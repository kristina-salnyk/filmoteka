import api from './api';
import { REQUEST_URL } from '../../constants';
import { movieConfigs } from '../../../index';
import notifications from '../../notifications';

export const fetchSearchMovie = async () => {
  const config = {
    params: {
      query: movieConfigs.searchQuery,
      page: movieConfigs.page,
      include_adult: movieConfigs.includeAdult,
    },
  };

  const url = REQUEST_URL.SEARCH;

  try {
    const response = await api.get(url, config);
    return response.data;
  } catch (error) {
    notifications.failedRequest();
  }
};
