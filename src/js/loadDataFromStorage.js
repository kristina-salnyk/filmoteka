import { auth } from './api/firebase/fire-base-service';
import storage from './local-storage-service';
import { getDataFromStorage } from './api/firebase/getDataFromStorage';

export const loadDataFromStorage = async key => {
  if (auth.currentUser) {
    const data = await getDataFromStorage();
    return data;
  } else {
    return storage.load(key);
  }
};
