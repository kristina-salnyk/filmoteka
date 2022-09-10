import api from './api';
import { REQUEST_URL } from '../../constants';
import notifications from '../../notifications';

export const fetchGenresList = async () => {
  const url = `${REQUEST_URL.GENRES}`;

  try {
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    notifications.failedRequest();
  }
};
