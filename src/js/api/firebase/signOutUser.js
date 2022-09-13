import { signOut } from 'firebase/auth';
import notifications from '../../notifications';
import { auth } from './fire-base-service';

export function signOutUser() {
  signOut(auth)
    .then(() => {
      notifications.showCustomMessage('You sign out from FireBase account.');
    })
    .catch(error => {
      notifications.showCustomMessage('Sign out was failed. Please try again.');
    });
}
