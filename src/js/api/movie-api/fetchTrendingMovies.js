import api from './api';
import { REQUEST_URL } from '../../constants';
import { movieConfigs } from '../../../index';
import notifications from '../../notifications';
import storege from '../../local-storage/local-storage-service';
import key from '../../local-storage/local-storage-keys';

export const fetchTrendingMovies = async () => {
  const config = {
    params: {
      page: movieConfigs.page,
    },
  };

  const url = `${REQUEST_URL.TRENDING}/${movieConfigs.mediaType}/${movieConfigs.timeWindow}`;

  try {
    const response = await api.get(url, config);
    storege.save(key.LAST_FETCH, 'TRENDING');
    return response.data;
  } catch (error) {
    notifications.failedRequest();
  }
};
