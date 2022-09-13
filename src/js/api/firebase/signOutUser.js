import { signOut } from 'firebase/auth';
import notifications from '../../notifications';
import refs from '../../refs/refs';
import { auth } from './fire-base-service';

export function logOut() {
  signOut(auth)
    .then(() => {
      notifications.showCustomMessage('Bye.');
      // Sign-out successful.
    })
    .catch(error => {
      // An error happened.
    });
  refs.openRegistrationBtn.textContent = 'Log In';
  return;
}
