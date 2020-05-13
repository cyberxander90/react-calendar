/* eslint-disable import/prefer-default-export */

export const getWeather = async (/* city, dateTime */) => {
  const response = await Promise.resolve({
    temperature: 25,
    icon: 'https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png',
    descriptions: 'Partly cloudy',
    windSpeed: 11,
    pressure: 1018,
    precip: 0.7,
    humidity: 83,
  });
  return response;
};
