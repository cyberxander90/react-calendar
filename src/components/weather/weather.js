/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'src/services/prop-types';
import { getWeatherAsync, getWeather } from 'src/services/weather';
import { TemperatureIcon, CloudIcon, RainIcon } from 'src/components/icons';
import { debounce } from 'src/services/tools';
import classNames from 'classnames';
import styles from './weather.module.scss';

const fetch = async ({ city, date, setWeather }) => {
  const result = await getWeatherAsync(city, date);
  setWeather(result);
};

const Weather = ({
  date, city, ms, className
}) => {
  const [weather, setWeather] = useState(getWeather(city, date));
  const debounceFetch = useCallback(debounce(fetch, ms), [ms]);
  useEffect(() => {
    const cancel = debounceFetch({ city, date, setWeather });
    return cancel;
  }, [debounceFetch, city, date]);

  return Boolean(weather) && (
    <div className={classNames(className, styles.weather)}>
      <ul className={styles.features}>
        <li className={styles.feature}>
          <TemperatureIcon />
          {weather.temperature}
        </li>
        <li className={styles.feature}>
          <CloudIcon />
          {weather.cloud}
        </li>
        <li className={styles.feature}>
          <RainIcon />
          {weather.precip}
        </li>
      </ul>
      <img src={weather.icon} alt="weather" className={styles.image} />
    </div>
  );
};

Weather.propTypes = {
  city: PropTypes.string,
  date: PropTypes.date,
  ms: PropTypes.number,
  className: PropTypes.string
};

Weather.defaultProps = {
  city: '',
  date: '',
  ms: 0,
  className: ''
};

export default Weather;
