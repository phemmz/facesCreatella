import axios from 'axios';

import ApiConfig from './ApiConfig';

const getProducts = () => {
  return axios.get(`${ApiConfig.devBaseUrl}/api/products`);
};

export default getProducts;
