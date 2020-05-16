/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { getWeather } from 'src/services/weather/weather.service';
import { TemperatureIcon, CloudIcon, RainIcon } from 'src/components/icons';
import { debounce } from 'src/services/tools-service';
import styles from './weather.module.scss';

const fetch = async ({ _city, _date, _setWeather }) => {
  const result = await getWeather(_city, _date);
  _setWeather(result);
};

const Weather = ({
  city, date, ms, className
}) => {
  const [weather, setWeather] = useState(null);
  const debounceFetch = useCallback(debounce(fetch, ms), [ms]);
  useEffect(() => {
    debounceFetch({ _city: city, _date: date, _setWeather: setWeather });
  }, [debounceFetch, city, date]);

  return weather && (
    <div className={`${className} ${styles.weather}`}>
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
  date: PropTypes.string,
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
