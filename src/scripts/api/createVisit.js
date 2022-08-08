import instance from "./instance.js";
import Card from "../classes/card.js";

const createVisit = async (visit) => {
	const { body } = visit;
	try {
		const { status, data } = await instance.post('', body);
		if (status === 200) {
			visit.closeModal();
			const {id} = data;
			body['id'] = id;
			new Card(body).render(document.querySelector(".container-cards"));
		}
	}
	catch (err) {
		alert("Упс... Что-то пошло не так!");
		console.error(err);
	}
}

export default createVisit;