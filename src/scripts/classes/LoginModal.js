import Modal from "./Modal.js";
export default class LoginModal extends Modal {
    constructor() {
        super();

    }
    closeModal() {
        super.closeModal();

    }

_createElements() {
    super._createElements();
    this.modalTitle.innerText="Аутентификация:"
    this.modalSubmitButton.classList.add('btn-registration');
    this.modalSubmitButton.type='submit';

    this.modalBody.innerHTML =`<form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Почта:</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required>
                    <div id="emailHelp" class="form-text text-warning"></div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Пароль:</label>
                <input type="password" class="form-control" id="exampleInputPassword1" required>
            </div>
        </form>`
}
}
