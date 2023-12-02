import axios from 'axios';

const productionUrl = 'https://api.punkapi.com/v2';

export const customFetch = axios.create({
  baseURL: productionUrl,
});