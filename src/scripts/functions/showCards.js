import getCards from "../api/getCards.js";
import Card from "../classes/card.js";

export const showCards = async () => {
    let cardsArray = await getCards();
    const noCards = document.querySelector(".no-cards")
    if(cardsArray.length > 0){
        noCards.classList.add("d-none")
    } 
    console.log(cardsArray);
    const containerCards = document.querySelector(".container-cards")

    cardsArray.forEach((el) => {
            new Card(el).render(containerCards);
    });
}