import axios from 'axios';

export default axios.create({
  baseURL: 'https://staging-duplica-api.herokuapp.com',
  responseType: 'json',
});
