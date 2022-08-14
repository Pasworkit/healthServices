import showCards from './showCards.js';
import getCards from "../api/getCards.js";

const filtrationCards = async ({ target }, flag, urgencyInput, statusInput, purposeInput) => {

    const cardsData = await getCards();

    const filteredCards = cardsData.filter(({ title, description, status, urgency }) => {
        if (flag === "purpose") {
            return (title.toLowerCase().includes(target.value.toLowerCase()) || description.toLowerCase().includes(target.value.toLowerCase()) || target.value === "") && (urgencyInput.value === "" || urgencyInput.value === urgency) && (statusInput.value === "" || statusInput.value === status)
        } else if (flag === "urgency") {
            return (title.toLowerCase().includes(purposeInput.value.toLowerCase()) || description.toLowerCase().includes(purposeInput.value.toLowerCase()) || purposeInput.value === "") && (target.value === "" || target.value === urgency) && (statusInput.value === "" || statusInput.value === status)
        } else if (flag === "status") {
            return (title.toLowerCase().includes(purposeInput.value.toLowerCase()) || description.toLowerCase().includes(purposeInput.value.toLowerCase()) || purposeInput.value === "") && (urgencyInput.value === "" || urgencyInput.value === urgency) && (target.value === "" || target.value === status)
        }
    })

    showCards(filteredCards);
}

export default filtrationCards;