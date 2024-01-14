(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
  })();
  (() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modalb-open]"),
      closeModalBtn: document.querySelector("[data-modalb-close]"),
      modal: document.querySelector("[data-modalb]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
  })();
  (() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modalc-open]"),
      closeModalBtn: document.querySelector("[data-modalc-close]"),
      modal: document.querySelector("[data-modalc]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
  })();
  (() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modald-open]"),
      closeModalBtn: document.querySelector("[data-modald-close]"),
      modal: document.querySelector("[data-modald]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
  })();