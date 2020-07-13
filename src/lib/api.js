// Returns a promise.
import axios from 'axios';
import BASE_URL  from '../utils/constants';

const API = axios.create({
  baseURL: `${BASE_URL}`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

export default API;
