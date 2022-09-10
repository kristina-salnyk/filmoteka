(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-footer-modal-open]"),
    closeModalBtn: document.querySelector("[data-footer-modal-close]"),
    footerModal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.footerModal.classList.toggle("is-hidden");
  }
})();