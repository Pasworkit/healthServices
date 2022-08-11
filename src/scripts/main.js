import LoginModal from "./classes/LoginModal.js";
import VisitModal from "./classes/VisitModal.js";
import { toggleBtn } from "./functions/toggleBtn.js";
import createVisit from "./api/createVisit.js";
import { showCards } from "./functions/showCards.js";
import Filter from "./classes/Filter.js";
import getCards from "./api/getCards.js";


const btnLogin = document.querySelector('.header__btn-login');
const btnCreateVisit = document.querySelector('.header__btn-createVisit');
const formContainer = document.querySelector('.container-filter');
const visitContainer = document.querySelector('.container-cards');


if (document.cookie.includes('token')) {
	toggleBtn();
} else {
	btnLogin.addEventListener('click', () => {
		new LoginModal().render();
	})
}
btnCreateVisit.addEventListener('click', () => {
	new VisitModal(createVisit, "create").render();
})

new Filter (formContainer, visitContainer).render();

showCards(getCards);