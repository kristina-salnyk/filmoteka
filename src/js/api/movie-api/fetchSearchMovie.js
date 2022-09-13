import api from './api';
import { REQUEST_URL } from '../../constants';
import { siteConfigs } from '../../SiteConfigs';
import notifications from '../../notifications';
import storage from '../../local-storage-service';
import { STORAGE_KEYS } from '../../constants';

export const fetchSearchMovie = async () => {
  const config = {
    params: {
      query: siteConfigs.searchQuery,
      page: siteConfigs.page,
      include_adult: siteConfigs.includeAdult,
    },
  };

  try {
    const response = await api.get(REQUEST_URL.SEARCH, config);
    storage.save(STORAGE_KEYS.LAST_FETCH, 'SEARCH');
    return response.data;
  } catch (error) {
    notifications.failedRequest();
  }
};
