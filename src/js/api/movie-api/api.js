import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '3db99de6ff3e5f2ef6de763ae547f586';

export default axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});
