import api from './api';
import { REQUEST_URL } from '../../constants';
import { movieConfigs } from '../../../index';
import notifications from '../../notifications';

export const fetchTrendingMovies = async () => {
  const config = {
    params: {
      page: movieConfigs.page,
    },
  };

  const url = `${REQUEST_URL.TRENDING}/${movieConfigs.mediaType}/${movieConfigs.timeWindow}`;

  try {
    const response = await api.get(url, config);
    return response.data;
  } catch (error) {
    notifications.failedRequest();
  }
};
