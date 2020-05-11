import axios from 'axios';
import Auth from './auth';

const request = axios.create({
  baseURL: process.env.API_BASE_URL || 'https://staging-duplica-api.herokuapp.com',
  responseType: 'json',
});

const auth = Auth(request);

export default {
  request,
  auth
};
