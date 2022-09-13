import { signInWithEmailAndPassword } from 'firebase/auth';
import notifications from '../../notifications';
import refs from '../../refs/refs';
import { auth } from './fire-base-service';
import localStorageKeys from '../../local-storage/local-storage-keys';
import { doc, setDoc } from 'firebase/firestore';

export function signInUser({ email, password, newUser }) {
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      notifications.showCustomMessage('You are signed in!');
      if (newUser) {
        initStorage();
      }
      refs.openRegistrationBtn.textContent = 'Log Out';
    })
    .catch(error => {
      notifications.showCustomMessage('Login is failed. Try again later.');
    });
}

async function initStorage() {
  try {
    let usersFilmsObj = {
      [localStorageKeys.WATCHED_MOVIES]: [],
      [localStorageKeys.QUEUE_MOVIES]: [],
    };
    const userData = doc(db, 'users', auth.currentUser.uid);
    await setDoc(userData, usersFilmsObj, { merge: true });
    notifications.showCustomMessage('You database storage ready to use.');
  } catch (error) {
    notifications.showCustomMessage(
      'Initialization of database storage was failed.'
    );
  }
}
