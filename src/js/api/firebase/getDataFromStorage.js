import { doc, getDoc } from 'firebase/firestore';
import notifications from '../../notifications';
import { auth, db } from './fire-base-service';

export async function getDataFromStorage(key) {
  try {
    const userData = doc(db, 'users', auth.currentUser.uid);
    const docSnap = await getDoc(userData);
    if (docSnap.exists()) {
      const usersFilmsObj = docSnap.data();
      return usersFilmsObj[key];
    } else {
      notifications.showCustomMessage(
        'Failed to load movies from FireBase storage.'
      );
    }
  } catch (error) {
    notifications.showCustomMessage(
      'Failed to load movies from FireBase storage.'
    );
  }
}
