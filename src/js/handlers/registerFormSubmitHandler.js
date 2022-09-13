import { createUser } from '../api/firebase/createUser';
import { onCloseRegistrationBtn } from '../registration-modal';

export function registerFormSubmitHandler(e) {
  e.preventDefault();
  const { email, password } = e.currentTarget.elements;

  createUser({
    email: email.value,
    password: password.value,
  });

  e.currentTarget.reset();
  onCloseRegistrationBtn();
}
