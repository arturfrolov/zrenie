// eslint-disable-next-line boundaries/element-types
import postData from '../services/services';

function forms(formSelector, modalSelector, modalCloseSelector) {
  // Form

  const modal = document.querySelector(modalSelector);
  const form = modal.querySelector(formSelector);
  const closeBtn = modal.querySelector(modalCloseSelector);

  const messages = {
    loading: './assets/spinner.svg',
    success: 'Спасибо! Скоро мы с вами свяжемся.',
    failure: 'Что-то пошло не так...',
  };

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal-dialog');

    prevModalDialog.classList.add('d-none');
    prevModalDialog.classList.remove('modal-dialog-centered');

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal-dialog');
    thanksModal.classList.add('modal-dialog-centered');
    thanksModal.innerHTML = `
            <div class="modal-content">
                <button type="button" class="btn-close modal-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
                <div class="modal-title">${message}</div>
            </div>
        `;

    document.querySelector('.modal').append(thanksModal);
    setTimeout(() => {
      document.querySelector('.fade').style.transition = 'all 0s';
      closeBtn.click();
      thanksModal.remove();
      prevModalDialog.classList.remove('d-none');
      prevModalDialog.classList.add('modal-dialog-centered');
    }, 5000);
  }

  function bindPostData(form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const statusMessage = document.createElement('img');
      statusMessage.setAttribute('src', messages.loading);
      statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;

      form.insertAdjacentElement('afterend', statusMessage);

      const formData = new FormData(form);

      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      postData('http://localhost:3004/requests', json)
        .then((data) => {
          console.log(data);
          showThanksModal(messages.success);
          statusMessage.remove();
        })
        .catch(() => {
          showThanksModal(messages.failure);
        })
        .finally(() => {
          form.reset();
        });
    });
  }

  bindPostData(form);
}

export default forms;
