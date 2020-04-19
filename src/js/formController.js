import axios from 'axios';

class formController {
  constructor($form) {
    this.$form = $form;
    this.$inputs = this.$form.querySelectorAll(`.requiredInput`);
    this.$checkbox = this.$form.querySelector(`.checkbox`);
    this.$checkboxError = this.$form.querySelector(`.error-checkbox`);
    this.$successRequest = this.$form.querySelector(`.success-request`);
    this.$errorRequest = this.$form.querySelector(`.error-request`);
  }

  init() {
    const submit = this.$form.querySelector(`.modal__form-submit`);
    submit.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this.formSender();
      this.validateInputs();
      this.validateCheckbox();
    })
  }

  formReset() {
    this.$inputs.forEach((input) => {
      input.value = ``;
    });
    this.$checkbox.checked = false;
  }

  formSender() {
    if(this.validateInputs() && this.validateCheckbox()) {
      const formData = new FormData($form);
      axios.post(`https://echo.htmlacademy.ru/courses`, formData)
      .then(() => {
        this.showSuccess();
        this.formReset();
        setTimeout(() => this.hideForm(), 2500)
      }).catch(() => {
        this.showError();
      });
    }
  }

  hideForm() {
    console.log(1)
    this.hideMessages();
  }

  validateInputs() {
    let inputStatus = [];
    this.$inputs.forEach((input) => {
      if(input.value.length <= 0) {
        input.classList.add(`error-form`);
        inputStatus.push(false);    
      } else {
        input.classList.remove(`error-form`);
        inputStatus.push(true);
      }
    });
    const isValide = inputStatus.includes(false) ? false : true;
    return isValide;
  }

  validateCheckbox() {
    if (!this.$checkbox.checked) {
      this.$checkboxError.classList.remove(`hidden`);
      return false;
    } else {
      this.$checkboxError.classList.add(`hidden`);
      return true;
    }
  }

  showSuccess() {
    this.$errorRequest.classList.add(`hidden`);
    this.$successRequest.classList.remove(`hidden`);
  }

  showError() {
    this.$errorRequest.classList.remove(`hidden`);
    this.$successRequest.classList.add(`hidden`);
  }

  hideMessages() {
    this.$successRequest.classList.add(`hidden`);
    this.$errorRequest.classList.add(`hidden`);
    MicroModal.close('modal-form');
  }
}

export default () => {
  window.$form = document.querySelector(`.modal__form`);
  new formController($form).init();
}