import axios from 'axios';

const BASE_URL= 'test.com';

export const client = axios.create({
  baseURL: BASE_URL,
});