import LoginModal from "./classes/LoginModal.js";
import CreateVisitModal from "./classes/CreateVisitModal.js";
import {toggleBtn} from "./functions/toggleBtn.js";

const btnLogin = document.querySelector('.header__btn-login');
const btnCreateVisit = document.querySelector('.header__btn-createVisit');


if (document.cookie.includes('token')) {
    toggleBtn();
} else {
    btnLogin.addEventListener('click', () => {
        new LoginModal().render();
    })
}
btnCreateVisit.addEventListener('click', () => {
    new CreateVisitModal().render();
})







