import axios from 'axios';

export const fetchFromWeatherstack = async (city) => {
  try {
    const { data } = await axios.get(`http://api.weatherstack.com/current?access_key=5cf36d01cd5d47c672c5add737ef4ae4&query=${city}`);
    return data.error
      ? null
      : {
        temperature: data.current.temperature,
        feels: data.current.feelslike,
        precip: data.current.precip,
        desc: data.current.weather_descriptions[0],
        cloud: data.current.cloudcover,
        icon: data.current.weather_icons[0]
      };
  } catch (error) {
    return null;
  }
};

export const fetchRandomWeather = async () => {
  try {
    return await Promise.resolve({
      temperature: 25,
      feels: 26,
      precip: 10,
      cloud: 0,
      desc: 'Sunny',
      icon: 'https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png'
    });
  } catch (error) {
    return null;
  }
};

const weather = {};

export const getWeatherAsync = async (city, date) => {
  if (!city || !date) {
    return null;
  }

  if (weather[date] && weather[date][city]) {
    return weather[date][city];
  }

  const response = await fetchFromWeatherstack(city);
  if (response) {
    weather[date] = weather[date] || {};
    weather[date][city] = response;
  }
  return response;
};

export const getWeather = (city, date) => {
  console.log(city);
  console.log(date);
  console.log(weather);
  return city && date && weather[date] && weather[date][city];
};
