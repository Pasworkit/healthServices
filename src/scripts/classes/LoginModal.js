import Modal from "./Modal.js";
import login from "../api/login.js";
import {toggleBtn} from "../functions/toggleBtn.js";

export default class LoginModal extends Modal {
    constructor() {
        super();
    }

    _createElements() {
        super._createElements();
        this.form = document.createElement('form');
        this.emailContainer = document.createElement('div');
        this.passwordContainer = document.createElement('div');
        this.emailLabel = document.createElement('label');
        this.passwordLabel = document.createElement('label');
        this.emailInput = document.createElement('input');
        this.passwordInput = document.createElement('input');
        this.emailHelp = document.createElement('div');

        this.modalTitle.innerText = "Аутентификация:"

        this.modalBody.append(this.form);
        this.modalSubmitButton.classList.add('btn-registration');
        this.modalSubmitButton.type = 'submit';

        this.emailContainer.className = "mb-3";
        this.passwordContainer.className = "mb-3";

        this.form.append(this.emailContainer, this.passwordContainer);

        this.emailLabel.for = "inputEmail"
        this.emailLabel.className = "form-label";
        this.emailLabel.innerText = "Почта:";
        this.passwordLabel.for = "inputPassword"
        this.passwordLabel.className = "form-label";
        this.passwordLabel.innerText = "Пароль:";

        this.emailInput.id = "inputEmail";
        this.emailInput.className = "form-control";
        this.emailInput.type = "email";
        this.emailInput.required = true;
        this.emailInput.placeholder = "Enter email"
        this.emailHelp.className="form-text text-warning"
        this.passwordInput.id = "emailHelp";

        this.passwordInput.id = "inputPassword";
        this.passwordInput.className = "form-control";
        this.passwordInput.type = "password";
        this.passwordInput.required = true;
        this.passwordInput.placeholder = "Password"

        this.emailContainer.append(this.emailLabel, this.emailInput);
        this.passwordContainer.append(this.passwordLabel, this.passwordInput);



        this.form.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                document.querySelector(".btn-registration").click();
            }
        });

        this.modalSubmitButton.addEventListener('click', () => {
            login(this.emailInput.value, this.passwordInput.value).then((r) => {
                if (r < 300) {
                    this.closeModal();
                    toggleBtn();
                } else {
                    alert('Неверный логин или пароль');
                }
            });
        })
    }
}
