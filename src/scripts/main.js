import LoginModal from "./classes/LoginModal.js";
import {toggleBtn} from "./functions/toggleBtn.js";

const btnLogin = document.querySelector('.header__btn-login');

if (document.cookie.includes('token')) {
    toggleBtn();
} else {
    btnLogin.addEventListener('click', () => {
        new LoginModal().render();
    })
}



