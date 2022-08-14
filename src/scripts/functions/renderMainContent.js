import Filter from "../classes/Filter.js";
import getCards from "../api/getCards.js";
import showCards from "./showCards.js";
import {
    handleDragEnd,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDragStart,
    handleDrop
} from "./handleDrags.js";
import VisitModal from "../classes/VisitModal.js";
import createVisit from "../api/createVisit.js";

export const renderMainContent = () => {
    const formContainer = document.querySelector('.container-filter');
    const btnCreateVisit = document.querySelector('.header__btn-createVisit');

    btnCreateVisit.addEventListener('click', () => {
        new VisitModal(createVisit, "create").render();
    })

    new Filter(formContainer).render();

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

}

