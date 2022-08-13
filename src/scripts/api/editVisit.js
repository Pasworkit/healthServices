import instance from "./instance.js";
import Card from "../classes/card.js";

const editVisit = async (visit, id, card) => {
    const { body } = visit;
    body["id"] = id;
    
    try {
        const { status } = await instance.put(`/${id}`, body);
        if (status === 200) {
            visit.closeModal();
            console.log(card);
            const { fullName, doctor, status, title, description, urgency, cardiovascularDiseases, bloodPressure, bodyMassIndex, age, lastVisit} = body;
            card.fullName = fullName;
            card.doctor = doctor;
            card.title = title;
            card.description = description;
            card.urgency = urgency;
            card.status = status;
            // card.id = id;
            card.cardiovascularDiseases = cardiovascularDiseases;
            card.bloodPressure = bloodPressure;
            card.bodyMassIndex = bodyMassIndex;
            card.age = age;
            card.lastVisit = lastVisit;


            // document.querySelector(`.card-${id}`).remove();
            // new Card(body).render(document.querySelector(".container-cards"));
        }
    }
    catch (err) {
        alert("Упс... Что-то пошло не так!");
        console.error(err);
    }
}

export default editVisit;