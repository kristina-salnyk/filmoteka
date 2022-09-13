import { createUser } from '../api/firebase/createUser';
import { onCloseRegistrationBtn } from '../registration-modal';
import notifications from '../notifications';

export function registerFormSubmitHandler(e) {
  e.preventDefault();
  const { email, password } = e.currentTarget.elements;

  if (email.value.length < 6) {
    notifications.showCustomMessage('Please, enter your valid email');
    return;
  }
  if (password.value.length < 6) {
    notifications.showCustomMessage(
      'Please, enter your password (at least 6 characters)'
    );
    return;
  }

  createUser({
    email: email.value,
    password: password.value,
  });

  e.currentTarget.reset();
  onCloseRegistrationBtn();
}
