import refs from './refs/refs';
import { dynamicRefs } from './refs/dynamicRefs';

function onRegistrationBtnClick() {
  document.body.classList.toggle('open-registration-modal');
  dynamicRefs().registrationBackdrop.classList.toggle('hidden');

  dynamicRefs().closeRegistrationBtn.addEventListener(
    'click',
    onCloseRegistrationBtn
  );
  dynamicRefs().registrationBackdrop.addEventListener(
    'click',
    onRegistrationBackdropClick
  );

  window.addEventListener('keydown', onEscKeyPress);
}

function onCloseRegistrationBtn() {
  window.removeEventListener('keydown', onEscKeyPress);
  document.body.classList.toggle('open-registration-modal');
  dynamicRefs().registrationBackdrop.classList.toggle('hidden');
}

function onRegistrationBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseRegistrationBtn();
  }
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  if (event.code === ESC_KEY_CODE) {
    onCloseRegistartionBtn();
  }
}

refs.openRegistrationBtn.addEventListener('click', onRegistrationBtnClick);
