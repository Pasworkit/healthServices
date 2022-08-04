import Modal from "./Modal.js";

export default class CreateVisitModal extends Modal {
	constructor() {
		super();

		this.form = document.createElement('form');
		this.formChooseDoctorContainer = document.createElement('div');
		this.formChooseDoctorSelect = document.createElement('select');
		this.formChooseUrgencyContainer = document.createElement('div');
		this.formChooseUrgencySelect = document.createElement('select');
		this.formVisitPurposeContainer = document.createElement('div');
		this.formVisitPurposeInput = document.createElement('input');
		this.formVisitDescriptionContainer = document.createElement('div');
		this.formVisitDescriptionContent = document.createElement('textarea');
		this.formFullNameContainer = document.createElement('div');
		this.formFullNameInput = document.createElement('input');

		//Additional fields
		this.additionalFieldsContainer = document.createElement('div');
		this.bloodPresureContainer = document.createElement('div');
		this.bloodPresureInput = document.createElement('input');
		this.bodyMassIndexContainer = document.createElement('div');
		this.bodyMassIndexInput = document.createElement('input');
		this.cardiovascularDiseasesContainer = document.createElement('div');
		this.cardiovascularDiseasesContent = document.createElement('textarea');
		this.ageContainer = document.createElement('div');
		this.ageInput = document.createElement('input');
		this.lastVisitContainer = document.createElement('div');
		this.lastVisitInput = document.createElement('input');
	}

	_createElements() {
		super._createElements();

		//Modal form
		this.form.className = "row";

		//Modal form - choose doctor
		this.formChooseDoctorContainer.className = "col-4 mb-2";
		this.formChooseDoctorContainer.innerHTML = `
		<label for="doctorChoose" class="form-label">
		Выберите врача
		</label>
		`;

		//Modal form - choose doctor select
		this.formChooseDoctorSelect.id = "doctorChoose";
		this.formChooseDoctorSelect.className = "form-select";
		this.formChooseDoctorSelect.innerHTML = `
			<option selected>Кардиолог</option>
			<option>Стоматолог</option>
			<option>Терапевт</option>
		`;

		//Modal form - choose urgency
		this.formChooseUrgencyContainer.className = "col-5 offset-3 mb-2";
		this.formChooseUrgencyContainer.innerHTML = `
			<label for="urgencyChoose" class="form-label">
			Срочность
			</label>
		`;

		//Modal form - choose urgency select
		this.formChooseUrgencySelect.id = "urgencyChoose";
		this.formChooseUrgencySelect.className = "form-select";
		this.formChooseUrgencySelect.innerHTML = `
		<option selected>Обычная</option>
		<option>Приоритетная</option>
		<option>Неотложная</option>
		`;

		//Modal form - visit purpose
		this.formVisitPurposeContainer.className = "mb-2";
		this.formVisitPurposeContainer.innerHTML = `
			<label for="visitPurpose" class="form-label">Цель визита</label>
		`;

		//Modal form - visit purpose input
		this.formVisitPurposeInput.id = "visitPurpose";
		this.formVisitPurposeInput.className = "form-control";
		this.formVisitPurposeInput.type = "text";
		this.formVisitPurposeInput.required = true;

		//Modal form - visit description
		this.formVisitDescriptionContainer.className = "mb-2";
		this.formVisitDescriptionContainer.innerHTML = `
		<label for="visitDescription" class="form-label">
			Краткое описание визита
		</label>
		`;

		//Modal form - visit description textarea
		this.formVisitDescriptionContent.className = "form-control";
		this.formVisitDescriptionContent.id = "visitDescription";
		this.formVisitDescriptionContent.rows = 1;

		//Modal form - full name
		this.formFullNameContainer.className = "mb-2";
		this.formFullNameContainer.innerHTML = `
			<label for="fullName" class="form-label">ФИО</label>
		`;

		//Modal form - full name input
		this.formFullNameInput.id = "fullName";
		this.formFullNameInput.className = "form-control";
		this.formFullNameInput.type = "text";
		this.formFullNameInput.required = true;

		// Modal form - additional fields
		this.additionalFieldsContainer.className = "mb-2";

		//Modal form - blood presure
		this.bloodPresureContainer.className = "col-4 mb-2";
		this.bloodPresureContainer.innerHTML = `
			<label for="bloodPresure" class="form-label">Обычное давление</label>
		`;

		//Modal form - blood presure input
		this.bloodPresureInput.id = "bloodPresure";
		this.bloodPresureInput.className = "form-control";
		this.bloodPresureInput.type = "text";
		this.bloodPresureInput.required = true;

		//Modal form - body mass index
		this.bodyMassIndexContainer.className = "col-4 mb-2";
		this.bodyMassIndexContainer.innerHTML = `
			<label for="bodyMassIndex" class="form-label">Индекс массы тела</label>
		`;

		//Modal form - body mass index input
		this.bodyMassIndexInput.id = "bodyMassIndex";
		this.bodyMassIndexInput.className = "form-control";
		this.bodyMassIndexInput.type = "text";
		this.bodyMassIndexInput.required = true;

		//Modal form - cardiovascular diseases
		this.cardiovascularDiseasesContainer.className = "mb-2";
		this.cardiovascularDiseasesContainer.innerHTML = `
			<label for="cardiovascularDiseases" class="form-label">Перенесенные заболевания сердечно-сосудистой системы</label>
		`;

		//Modal form - cardiovascular diseases input
		this.cardiovascularDiseasesContent.id = "cardiovascularDiseases";
		this.cardiovascularDiseasesContent.className = "form-control";

		//Modal form - age
		this.ageContainer.className = "col-2 mb-2";
		this.ageContainer.innerHTML = `
			<label for="age" class="form-label">Возраст</label>
		`;

		//Modal form - age input
		this.ageInput.id = "age";
		this.ageInput.className = "form-control";
		this.ageInput.type = "text";
		this.ageInput.required = true;

		//Modal form - last visit
		this.lastVisitContainer.className = "col-5 mb-2";
		this.lastVisitContainer.innerHTML = `
			<label for="lastVisit" class="form-label">Дата последнего визита</label>
		`;

		//Modal form - last visit input
		this.lastVisitInput.id = "lastVisit";
		this.lastVisitInput.className = "form-control";
		this.lastVisitInput.type = "date";
		this.lastVisitInput.required = true;

		//Appends
		this.modalBody.append(this.form);
		this.form.append(
			this.formChooseDoctorContainer,
			this.formChooseUrgencyContainer,
			this.formVisitPurposeContainer,
			this.formVisitDescriptionContainer,
			this.formFullNameContainer);
		this.formChooseDoctorContainer.append(this.formChooseDoctorSelect);
		this.formChooseUrgencyContainer.append(this.formChooseUrgencySelect);
		this.formVisitPurposeContainer.append(this.formVisitPurposeInput);
		this.formVisitDescriptionContainer.append(this.formVisitDescriptionContent);
		this.formFullNameContainer.append(this.formFullNameInput);
		this.bloodPresureContainer.append(this.bloodPresureInput);
		this.bodyMassIndexContainer.append(this.bodyMassIndexInput);
		this.cardiovascularDiseasesContainer.append(this.cardiovascularDiseasesContent);
		this.ageContainer.append(this.ageInput);
		this.lastVisitContainer.append(this.lastVisitInput);
	}

	#showAdditionalFields(doctor) {
		if (doctor === "Кардиолог") {
			this.additionalFieldsContainer.innerHTML = "";
			this.additionalFieldsContainer.append(
				this.bloodPresureContainer,
				this.bodyMassIndexContainer,
				this.cardiovascularDiseasesContainer,
				this.ageContainer);
		}
		if (doctor === "Стоматолог") {
			this.additionalFieldsContainer.innerHTML = "";
			this.additionalFieldsContainer.append(this.lastVisitContainer);
		}
		if (doctor === "Терапевт") {
			this.additionalFieldsContainer.innerHTML = "";
			this.additionalFieldsContainer.append(this.ageContainer);
		}

		this.form.append(this.additionalFieldsContainer);
	}

	_eventHandlers() {
		super._eventHandlers();

		this.formChooseDoctorSelect.addEventListener('change', (e) => {
			this.#showAdditionalFields(e.target.value);
		})

		this.modalSubmitButton.addEventListener('click', (e) => {
			this.form.classList.add('was-validated');
		});
	}

	render() {
		super.render();
		this.#showAdditionalFields(this.formChooseDoctorSelect.selectedOptions[0].innerText);
	}
}