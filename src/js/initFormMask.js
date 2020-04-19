import IMask from 'imask';

const initMask = () => {
  const phoneInput = document.querySelector(`.modal__form-input-phone`);
  const maskOptions = {
    mask: '0(000)000-00-00'
  };
  const mask = IMask(phoneInput, maskOptions);
}

export default initMask;
