import LoginModal from "./classes/LoginModal.js";
import VisitModal from "./classes/VisitModal.js";
import { toggleBtn } from "./functions/toggleBtn.js";
import createVisit from "./api/createVisit.js";
import showCards from "./functions/showCards.js";
import Filter from "./classes/Filter.js";
import getCards from "./api/getCards.js";

import { handleDragStart, handleDragEnd, handleDragEnter, handleDragOver, handleDragLeave, handleDrop } from "./functions/handleDrags.js";

const btnLogin = document.querySelector('.header__btn-login');
const btnCreateVisit = document.querySelector('.header__btn-createVisit');
const formContainer = document.querySelector('.container-filter');

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

new Filter (formContainer).render();

(async () => {
	const cardsArray = await getCards();
	showCards(cardsArray);
})();

const cardsContainer = document.querySelector('.container-cards');

cardsContainer.addEventListener('mousedown', (e) => {
	document.querySelectorAll('.cards__card').forEach(card => {
		card.addEventListener('dragstart', handleDragStart);
		card.addEventListener('dragover', handleDragOver);
		card.addEventListener('dragenter', handleDragEnter);
		card.addEventListener('dragleave', handleDragLeave);
		card.addEventListener('dragend', handleDragEnd);
		card.addEventListener('drop', handleDrop);
	});
});

