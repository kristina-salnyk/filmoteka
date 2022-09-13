import api from './api';
import { REQUEST_URL } from '../../constants';
import notifications from '../../notifications';

export const fetchMovieVideo = async id => {
  const url = `${REQUEST_URL.MOVIE}/${id}${REQUEST_URL.VIDEOS}`;

  try {
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    notifications.failedRequest();
  }
};
