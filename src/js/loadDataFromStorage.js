import { auth, getDataFromStorage } from './api/firebase/fireBase';
import storage from './local-storage/local-storage-service';

export const loadDataFromStorage = async key => {
  console.log(2);
  console.log(auth.currentUser);
  if (auth.currentUser) {
    return await getDataFromStorage(key);
  } else {
    return storage.load(key);
  }
};
