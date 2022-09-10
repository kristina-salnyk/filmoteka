import { dynamicRefs } from './dynamicRefs';
import { modalBtnClickHandler, modalQueueBtnClickHandler, modalWatchedBtnClickHandler } from './modalBtnsClickHandler';

function onOpenModalBtn() {
  dynamicRefs().closeModalBtn.addEventListener('click', onCloseModalBtn);
  dynamicRefs().backdrop.addEventListener('click', onBackdropClick);

  dynamicRefs().watchedBtn.addEventListener('click', modalWatchedBtnClickHandler);
  dynamicRefs().queueBtn.addEventListener('click', modalQueueBtnClickHandler);

  window.addEventListener('keydown', onEscKeyPress);
  document.body.classList.add('on-open-modal');

}

function onCloseModalBtn() {
  window.removeEventListener('keydown', onEscKeyPress);
  document.body.classList.remove('on-open-modal');
}

function onBackdropClick(evn) {
  if (evn.currentTarget === evn.target) {
    onCloseModalBtn();
  }
}

function onEscKeyPress(evn) {
  const ESC_KEY_CODE = 'Escape';
  if (evn.code === ESC_KEY_CODE) {
    onCloseModalBtn();
  }
}

export default {
  onOpenModalBtn,
  onCloseModalBtn,
  onBackdropClick,
  onEscKeyPress,
};
