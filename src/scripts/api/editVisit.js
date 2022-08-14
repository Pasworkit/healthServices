import instance from "./instance.js";
import Card from "../classes/card.js";

const editVisit = async (visit, id, card) => {
    const { body } = visit;
    body["id"] = id;
    
    try {
        const { status } = await instance.put(`/${id}`, body);
        if (status === 200) {
            visit.closeModal();

            document.querySelector(`#card-${id}`).remove();
            new Card(body).render(document.querySelector(".container-cards"));
        }
    }
    catch (err) {
        alert("Упс... Что-то пошло не так!");
        console.error(err);
    }
}

export default editVisit;