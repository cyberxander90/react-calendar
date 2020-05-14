import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import { getWeather } from 'src/services/weather/weather.service';
import { ReactComponent as Temperature } from 'src/images/temp.svg';
import { ReactComponent as Cloud } from 'src/images/cloud.svg';
import { ReactComponent as Rain } from 'src/images/rain.svg';
import { debounce } from 'src/services/tools-service';

import styles from './weather.module.scss';

const fetch = async ({ _city, _date, _setWeather }) => {
  const result = await getWeather(_city, _date);
  _setWeather(result);
};

const Weather = ({ city, date, ms }) => {
  const [weather, setWeather] = useState(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceFetch = useCallback(debounce(fetch, ms), [ms]);
  useEffect(() => {
    debounceFetch({ _city: city, _date: date, _setWeather: setWeather });
  }, [debounceFetch, city, date]);

  return weather && (
    <div className={styles.weather}>
      <ul className={styles.features}>
        <li className={styles.feature}>
          <Temperature />
          {weather.temperature}
        </li>
        <li className={styles.feature}>
          <Cloud />
          {weather.cloud}
        </li>
        <li className={styles.feature}>
          <Rain />
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
  ms: PropTypes.number
};

Weather.defaultProps = {
  city: '',
  date: '',
  ms: 0
};

export default Weather;
