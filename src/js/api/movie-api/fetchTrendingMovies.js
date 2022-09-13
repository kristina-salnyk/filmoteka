import api from './api';
import { REQUEST_URL } from '../../constants';
import { siteConfigs } from '../../SiteConfigs';
import notifications from '../../notifications';
import storage from '../../local-storage-service';
import { STORAGE_KEYS } from '../../constants';

export const fetchTrendingMovies = async () => {
  const config = {
    params: {
      page: siteConfigs.page,
    },
  };

  const url = `${REQUEST_URL.TRENDING}/${siteConfigs.mediaType}/${siteConfigs.timeWindow}`;

  try {
    const response = await api.get(url, config);
    storage.save(STORAGE_KEYS.LAST_FETCH, 'TRENDING');
    return response.data;
  } catch (error) {
    notifications.failedRequest();
  }
};
