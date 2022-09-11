import refs from '../refs/refs';

export const onRegsidtrationBtnClick = () => {
  document.body.classList.toggle('on-open-modal');
  refs.registrationModal.classList.toggle('is-hidden');
};
