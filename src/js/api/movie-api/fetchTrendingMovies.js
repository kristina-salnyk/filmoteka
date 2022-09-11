import api from './api';
import { REQUEST_URL } from '../../constants';
import { homeConfigs } from '../../HomeConfigs';
import notifications from '../../notifications';
import storage from '../../local-storage/local-storage-service';
import key from '../../local-storage/local-storage-keys';

export const fetchTrendingMovies = async () => {
  const config = {
    params: {
      page: homeConfigs.page,
    },
  };

  const url = `${REQUEST_URL.TRENDING}/${homeConfigs.mediaType}/${homeConfigs.timeWindow}`;

  try {
    const response = await api.get(url, config);
    storage.save(key.LAST_FETCH, 'TRENDING');
    return response.data;
  } catch (error) {
    notifications.failedRequest();
  }
};
