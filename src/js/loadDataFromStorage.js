import { auth, getDataFromStorage } from './api/firebase/fireBase';
import storage from './local-storage/local-storage-service';

export const loadDataFromStorage = async key => {
  if (auth.currentUser) {
    return await getDataFromStorage(key);
  } else {
    return storage.load(key);
  }
};
