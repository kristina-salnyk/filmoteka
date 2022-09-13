import { doc, setDoc } from 'firebase/firestore';
import notifications from '../../notifications';
import { auth, db } from './fire-base-service';

export async function setDataToStorage(key, usersFilmsObj) {
  try {
    const userData = doc(db, 'users', auth.currentUser.uid);
    await setDoc(userData, usersFilmsObj, { merge: true });

    notifications.showCustomSuccessMessage(
      'Movies was saved in FireBase storage.'
    );
  } catch (error) {
    console.log(error.message);
    notifications.showCustomFailedMessage(
      'Saving movies in FireBase storage was failed.'
    );
  }
}
