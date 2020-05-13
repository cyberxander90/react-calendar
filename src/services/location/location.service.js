/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const getLocation = async () => {
  const response = await axios.get('http://ipinfo.io?token=d896365570b98d');
  return response.data;
};
