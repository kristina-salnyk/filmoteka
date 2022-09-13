import { auth } from './api/firebase/fire-base-service';
import storage from './local-storage-service';
import { setDataToStorage } from './api/firebase/setDataToStorage';

export const loadDataToStorage = async (key, data) => {
  if (auth.currentUser) {
    return await setDataToStorage(key, data);
  } else {
    return storage.save(key, data);
  }
};
