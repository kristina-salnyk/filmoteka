import refs from './refs/refs';

(() => {
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.footerModal.addEventListener('click', backdropClickHandler);
  window.addEventListener('keydown', onEscPress);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.footerModal.classList.toggle('is-hidden');
  }

  function backdropClickHandler(e) {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  }

  function onEscPress(e) {
    const ESC_KEY_CODE = 'Escape';

    if (e.code === ESC_KEY_CODE) {
      document.body.classList.remove('modal-open');
      refs.footerModal.classList.add('is-hidden');
      return;
    }
  }
})();
