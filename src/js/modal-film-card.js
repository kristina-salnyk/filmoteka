const refs = {
  // openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('.js-modal-close-btn'),
};

// refs.openModalBtn.addEventListener('click', onOpenModalBtn);
refs.closeModalBtn.addEventListener('click', onCloseModalBtn);
refs.backdrop.addEventListener('click', onBackdropClick);


function onOpenModalBtn() {
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
  const ESC_KEY_CODE = 'Escape'
  if (evn.code === ESC_KEY_CODE) {
    onCloseModalBtn();
  }
}

export default {
  onOpenModalBtn,
  onCloseModalBtn,
  onBackdropClick,
  onEscKeyPress,
}