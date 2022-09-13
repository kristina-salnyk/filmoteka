import { auth } from './api/firebase/fire-base-service';
import storage from './local-storage-service';
import { getDataFromStorage } from './api/firebase/getDataFromStorage';
import { siteConfigs } from './SiteConfigs';

export const loadDataFromStorage = async key => {
  if (auth.currentUser && siteConfigs.storageCreated) {
    return await getDataFromStorage(key);
  } else {
    return storage.load(key);
  }
};
