import refs from './refs/refs';

function onRegsidtrationBtnClick() {
  document.body.classList.toggle('open-registration-modal');
  refs.registrationModal.classList.toggle('hidden');
}

refs.openRegistrationBtn.addEventListener('click', onRegsidtrationBtnClick);
