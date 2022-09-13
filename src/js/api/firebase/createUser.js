import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FIRE_BASE_MESSAGES } from '../../constants';
import { auth } from './fire-base-service';
import { signInUser } from './signInUser';

export function createUser({ email, password }) {
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const options = {
        email,
        password,
        newUser: true,
      };
      signInUser(options);
    })
    .catch(error => {
      if (error.message.includes(FIRE_BASE_MESSAGES.REGISTERED_USER)) {
        const options = {
          email,
          password,
          newUser: false,
        };
        signInUser(options);
      }
    });
}
