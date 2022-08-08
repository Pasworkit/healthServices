import LoginModal from "./classes/LoginModal.js";
import VisitModal from "./classes/VisitModal.js";
import { toggleBtn } from "./functions/toggleBtn.js";
import createVisit from "./api/createVisit.js";

import { showCards } from "./functions/showCards.js";

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
	new VisitModal(createVisit, "create").render();
})

showCards();