import api from './api';
import { REQUEST_URL } from '../../constants';
import { siteConfigs } from '../../SiteConfigs';
import notifications from '../../notifications';
import storage from '../../local-storage/local-storage-service';
import key from '../../local-storage/local-storage-keys';

export const fetchTrendingMovies = async () => {
  const config = {
    params: {
      page: siteConfigs.page,
    },
  };

  const url = `${REQUEST_URL.TRENDING}/${siteConfigs.mediaType}/${siteConfigs.timeWindow}`;

  try {
    const response = await api.get(url, config);
    storage.save(key.LAST_FETCH, 'TRENDING');
    return response.data;
  } catch (error) {
    notifications.failedRequest();
  }
};
