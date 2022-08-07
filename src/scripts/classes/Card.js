import deleteCards from "../api/deleteCards.js";
import CreateVisitModal from "./CreateVisitModal.js";

export default class Card {
  constructor({fullName, doctor, title, description, urgency, id, cardiovascularDiseases, bloodPressure, bodyMassIndex, age, lastVisit}) {
    this.fullName = fullName;
    this.doctor = doctor;
    this.title = title;
    this.description = description;
    this.urgency = urgency;
    this.id = id;
    this.cardiovascularDiseases = cardiovascularDiseases;
    this.bloodPressure = bloodPressure;
    this.bodyMassIndex = bodyMassIndex;
    this.age = age;
    this.lastVisit = lastVisit;

    this.card = document.createElement('div');
    this.cardBody = document.createElement('div');
    this.buttonClose = document.createElement('button');
    this.cardFullName = document.createElement('h5');
    this.cardDoctor = document.createElement('h6');
    this.containerAddInformation = document.createElement('div');
    this.cardTitle = document.createElement('p');
    this.cardDescription = document.createElement('p');
    this.cardUrgency = document.createElement('p');
    this.cardButtonAddInformation = document.createElement('button');
    this.cardButtonHideInformation = document.createElement('button');
    this.cardAdditionalInformation = document.createElement('div');
    this.cardCardiovascularDiseases = document.createElement('p');
    this.cardBloodPressure = document.createElement('p');
    this.cardBodyMassIndex = document.createElement('p');
    this.cardAge = document.createElement('p');
    this.cardLastVisit = document.createElement('p');
  }

  _createElements() {
    this.card.className = `card m-2 p-3 mb-2 bg-light text-dark card-${this.id}`;
    this.card.style.width = "40rem";
    this.cardBody.className = "card-body p-0";
    this.buttonClose.type = "button";
    this.buttonClose.className = "btn-close position-absolute top-0 end-0";
    this.buttonClose.ariaLabel = "Close";
    this.cardFullName.className = "card-title";
    this.cardFullName.innerHTML = `ФИО: ${this.fullName}`
    this.cardDoctor.className = "card-subtitle mb-2 text-muted";
    this.cardDoctor.innerHTML = `Врач: ${this.doctor}`;
    this.containerAddInformation.className = "d-none";
    this.cardTitle.className = "card-text";
    this.cardTitle.innerHTML = `Цель визита: ${this.title}`;
    this.cardDescription.className = "card-text";
    this.cardDescription.innerHTML = `Описание визита: ${this.description}`;
    this.cardUrgency.className = "card-text";
    this.cardUrgency.innerHTML = `Срочность: ${this.urgency}`;
    this.cardCardiovascularDiseases.className = "card-text";
    this.cardCardiovascularDiseases.innerHTML = ` Перенесенные заболевания: ${this.cardiovascularDiseases}`;
    this.cardBloodPressure.className = "card-text";
    this.cardBloodPressure.innerHTML = `Обычное давление: ${this.bloodPressure}`;
    this.cardBodyMassIndex.className = "card-text";
    this.cardBodyMassIndex.innerHTML = `Индекс массы тела: ${this.bodyMassIndex}`;
    this.cardAge.className = "card-text";
    this.cardAge.innerHTML = `Возраст: ${this.age}`;
    this.cardLastVisit.className = "card-text";
    this.cardLastVisit.innerHTML = `Последний визит: ${this.lastVisit}`;
   

    this.cardButtonAddInformation.className = "btn btn-outline-info";
    this.cardButtonAddInformation.type="button";
    this.cardButtonAddInformation.innerHTML = "Показать больше";
    this.cardButtonHideInformation.className = "btn btn-outline-info d-none";
    this.cardButtonHideInformation.type="button";
    this.cardButtonHideInformation.innerHTML = "Показать меньше";
    this.cardAdditionalInformation.className = "btn btn-primary ms-3";
    this.cardAdditionalInformation.href = "#";
    this.cardAdditionalInformation.innerHTML = "Редактировать";
    this.card.append(this.cardBody);
    this.cardBody.append(
      this.buttonClose,
      this.cardFullName,
      this.cardDoctor,
      this.containerAddInformation,
      this.cardButtonAddInformation,
      this.cardButtonHideInformation,
      this.cardAdditionalInformation
    )

    this.containerAddInformation.append(
      this.cardTitle,
      this.cardDescription,
      this.cardUrgency
    )
    if (this.doctor === "Кардиолог"){
      this.containerAddInformation.append(
        this.cardCardiovascularDiseases,
        this.cardBloodPressure,
        this.cardBodyMassIndex,
        this.cardAge
      )} else if (this.doctor === "Стоматолог"){
        this.containerAddInformation.append(
          this.cardLastVisit
      )} else if (this.doctor === "Терапевт"){
        this.containerAddInformation.append(
          this.cardAge
      )}

    this.cardButtonAddInformation.addEventListener('click', () => {
      this.cardButtonAddInformation.classList.add("d-none");
      this.cardButtonHideInformation.classList.remove("d-none");
      this.containerAddInformation.classList.remove("d-none");
    })
    this.cardButtonHideInformation.addEventListener('click', () => {
      this.cardButtonAddInformation.classList.remove("d-none");
      this.cardButtonHideInformation.classList.add("d-none");
      this.containerAddInformation.classList.add("d-none");
    })
    this.buttonClose.addEventListener('click', () => deleteCards(this.id));

    this.cardAdditionalInformation.addEventListener('click', () => {
      new CreateVisitModal().render();
    })

  }

  render(container = document.body) {
    this._createElements();
    container.append(this.card);
  }
}
