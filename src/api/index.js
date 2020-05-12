import axios from 'axios';
import Auth from './auth';
import FactoryService from './factory';

const request = axios.create({
  baseURL: process.env.API_BASE_URL || 'https://staging-duplica-api.herokuapp.com',
  responseType: 'json',
});
const auth = Auth(request);

request.interceptors.request.use(
  config => {
    config.headers['Authorization'] = `Bearer ${auth.getToken()}`;
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

const factoryService = FactoryService(request);

export default {
  auth,
  factoryService,
};
