import api from './api';
import { REQUEST_URL } from '../../constants';
import notifications from '../../notifications';

export const fetchGenresList = async () => {
  try {
    const response = await api.get(REQUEST_URL.GENRES);
    return response.data;
  } catch (error) {
    notifications.failedRequest();
  }
};
