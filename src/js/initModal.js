import MicroModal from 'micromodal';

const initModal = () => {
  MicroModal.init({
      onShow: onShow,
      onClose: onClose,
  });
  const onShow = () => {
    document.body.classList.add(`js-disable-scroll`);
  }
  const onClose = () => {
    document.body.classList.remove(`js-disable-scroll`);
  }
  const buttons = document.querySelectorAll(`.js-modal-open`);
  const closeButton = document.querySelector(`.modal__close`);
  closeButton.addEventListener(`click`, () =>MicroModal.close('modal-form'));
  buttons.forEach((button) => button.addEventListener(`click`, () => MicroModal.show('modal-form', {
    onShow: onShow,
    onClose: onClose,
  })));
}

export default initModal;
