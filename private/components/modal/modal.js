// eslint-disable-next-line boundaries/element-types
import postData from '../services/services';

class Modal {
  constructor(
    {
      formSelector,
      modalSelector,
      modalCloseSelector,
      modalDialog,
    },
  ) {
    this.modal = document.querySelector(modalSelector);
    this.form = this.modal.querySelector(formSelector);
    this.closeBtn = this.modal.querySelector(modalCloseSelector);
    this.prevModalDialog = this.modal.querySelector(modalDialog);
    this.messages = {
      loading: './assets/spinner.svg',
      success: 'Спасибо! Скоро мы с вами свяжемся.',
      failure: 'Что-то пошло не так...',
    };
  }

  showThanksModal(message) {
    this.prevModalDialog.classList.add('d-none');
    this.prevModalDialog.classList.remove('modal-dialog-centered');

    this.thanksModal = document.createElement('div');
    this.thanksModal.classList.add('modal-dialog');
    this.thanksModal.classList.add('modal-dialog-centered');
    this.thanksModal.innerHTML = `
            <div class="modal-content">
                <button type="button" class="btn-close modal-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
                <div class="modal-title">${message}</div>
            </div>
        `;

    document.querySelector('.modal').append(this.thanksModal);
    setTimeout(() => {
      document.querySelector('.fade').style.transition = 'all 0s';
      this.closeBtn.click();
      this.thanksModal.remove();
      this.prevModalDialog.classList.remove('d-none');
      this.prevModalDialog.classList.add('modal-dialog-centered');
    }, 5000);
  }

  bindPostData() {
    this.form.addEventListener('submit', (event) => {
      event.preventDefault();

      this.statusMessage = document.createElement('img');
      this.statusMessage.setAttribute('src', this.messages.loading);
      this.statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;

      this.form.insertAdjacentElement('afterend', this.statusMessage);

      this.formData = new FormData(this.form);

      this.json = JSON.stringify(Object.fromEntries(this.formData.entries()));

      postData('http://localhost:3004/requests', this.json)
        .then((data) => {
          console.log(data);
          this.showThanksModal(this.messages.success);
          this.statusMessage.remove();
        })
        .catch(() => {
          this.showThanksModal(this.messages.failure);
        })
        .finally(() => {
          this.form.reset();
        });
    });
  }
}

export default Modal;
