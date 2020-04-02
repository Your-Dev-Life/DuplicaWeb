import axios from 'axios';

export default axios.create({
  baseURL: process.env.API_BASE_URL || 'https://staging-duplica-api.herokuapp.com',
  responseType: 'json',
});
