import axios from 'axios';

import ApiConfig from './ApiConfig';

export const getPaginatedProducts = (page) => {
  return axios.get(`${ApiConfig.devBaseUrl}/api/products?_page=${page}&_limit=15`);
};

export const getSortedPaginatedProducts = (page, sortType) => {
  return axios.get(`${ApiConfig.devBaseUrl}/api/products?_page=${page}&_limit=15&_sort=${sortType}`);
};
