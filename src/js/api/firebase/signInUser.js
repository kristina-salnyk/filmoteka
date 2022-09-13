import { signInWithEmailAndPassword } from 'firebase/auth';
import notifications from '../../notifications';
import refs from '../../refs/refs';
import { auth, db } from './fire-base-service';
import { STORAGE_KEYS } from '../../constants';
import { doc, setDoc } from 'firebase/firestore';
import { siteConfigs } from '../../SiteConfigs';

export async function signInUser({ email, password, newUser }) {
  signInWithEmailAndPassword(auth, email, password)
    .then(async userCredential => {
      notifications.showCustomSuccessMessage(
        'You are signed in to FireBase account.'
      );
      // if (newUser) {
      // siteConfigs.init = true;
      // await initStorage();
      // siteConfigs.init = false;
      // }
      refs.openRegistrationBtn.textContent = 'Log Out';
    })
    .catch(error => {
      notifications.showCustomFailedMessage(
        'Sign in is failed. Try again later.'
      );
    });
}

async function initStorage() {
  try {
    let usersFilmsObj = {
      [STORAGE_KEYS.WATCHED_MOVIES]: [],
      [STORAGE_KEYS.QUEUE_MOVIES]: [],
    };
    const userData = doc(db, 'users', auth.currentUser.uid);
    await setDoc(userData, usersFilmsObj, { merge: true });

    notifications.showCustomMessage('You database storage ready to use.');
  } catch (error) {
    notifications.showCustomFailedMessage(
      'Initialization of FireBase storage was failed.'
    );
  }
}
