export default class Modal {
    constructor() {

        this.modal = document.createElement('div');
        this.modalDialog = document.createElement('div');
        this.modalContent = document.createElement('div');

        this.modalHeader = document.createElement('div');
        this.modalHeaderTitle = document.createElement('h5');
        this.closeHeaderButton = document.createElement('button');
        this.closeHeaderButton.addEventListener('click', this.closeModal.bind(this));

        this.modalBody = document.createElement('div');
        this.modalBodyForm = document.createElement('form');
        this.modalBodyWrapperMail = document.createElement('div');
        this.modalBodyLabelMail = document.createElement('label');
        this.modalBodyInputMail = document.createElement('input');
        this.modalBodyWrapperPassword = document.createElement('div');
        this.modalBodyLabelPassword = document.createElement('label');
        this.modalBodyInputPassword = document.createElement('input');

        this.modalFooter = document.createElement('div');
        this.closeButton = document.createElement('button');
        this.closeButton.addEventListener('click', this.closeModal.bind(this));
        this.sendButton = document.createElement('button');

    }

    closeModal() {
        this.modal.remove();
    }


    createElements() {
        this.modal.classList.add('modal','display');
        this.modalDialog.classList.add('modal-dialog', 'modal-dialog-centered', 'w-100');
        this.modalContent.classList.add('modal-content');

        this.modalHeader.classList.add('modal-header');
        this.modalHeaderTitle.classList.add('modal-title');
        this.modalHeaderTitle.innerText = 'Ваши данные:'
        this.closeHeaderButton.classList.add('close');
        this.closeHeaderButton.setAttribute("type", 'button')
        this.closeHeaderButton.insertAdjacentHTML("beforeend", `<span aria-hidden="true">&times;</span>`)
        this.modal.append(this.modalDialog)
        this.modalDialog.append(this.modalContent)
        this.modalContent.append(this.modalHeader, this.modalBody)
        this.modalHeader.append(this.modalHeaderTitle, this.closeHeaderButton);

        this.modalBody.classList.add('modal-body');
        this.modalBodyWrapperMail.classList.add('mb-3');
        this.modalBodyLabelMail.classList.add('col-form-label', 'label-mail');
        this.modalBodyLabelMail.innerText = 'Почта:'
        this.modalBodyInputMail.classList.add('form-control', 'email');
        this.modalBodyInputMail.setAttribute("type", 'email')

        this.modalBodyWrapperPassword.classList.add('mb-3');
        this.modalBodyLabelPassword.classList.add('col-form-label');
        this.modalBodyLabelPassword.innerText = 'Пароль:'
        this.modalBodyInputPassword.classList.add('form-control', 'password');
        this.modalBodyInputPassword.setAttribute("type", 'password')
        this.modalBody.append(this.modalBodyForm)
        this.modalBodyForm.append(this.modalBodyWrapperMail, this.modalBodyWrapperPassword);
        this.modalBodyWrapperMail.append(this.modalBodyLabelMail, this.modalBodyInputMail)
        this.modalBodyWrapperPassword.append(this.modalBodyLabelPassword, this.modalBodyInputPassword)


        this.modalFooter.classList.add('modal-footer');
        this.closeButton.classList.add('btn', 'btn-secondary');
        this.closeButton.innerText = 'Закрыть';
        this.sendButton.classList.add('btn', 'btn-primary', 'btn-registration');
        this.sendButton.innerText = 'Войти'
        this.modalBody.append(this.modalFooter)
        this.modalFooter.append(this.closeButton, this.sendButton);
    }

    render(selector = document.body) {
        this.createElements();
        selector.append(this.modal);
    }

}