import axios from 'axios';

import ApiConfig from './ApiConfig';

export const getProducts = () => {
  return axios.get(`${ApiConfig.devBaseUrl}/api/products`);
};

export const sortProducts = (sortType) => {
  return axios.get(`${ApiConfig.devBaseUrl}/api/products?_sort=${sortType}`);
};
