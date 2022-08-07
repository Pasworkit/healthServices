import Modal from "./Modal.js";

export default class VisitModal extends Modal {
	constructor(submitHandler) {
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
		this.formBloodPressureContainer = document.createElement('div');
		this.formBloodPressureInput = document.createElement('input');
		this.formBodyMassIndexContainer = document.createElement('div');
		this.formBodyMassIndexInput = document.createElement('input');
		this.formCardiovascularDiseasesContainer = document.createElement('div');
		this.formCardiovascularDiseasesContent = document.createElement('textarea');
		this.formAgeContainer = document.createElement('div');
		this.formAgeInput = document.createElement('input');
		this.formLastVisitContainer = document.createElement('div');
		this.formLastVisitInput = document.createElement('input');

		this.body = {};
		this.submitHandler = submitHandler;
	}

	_createElements() {
		super._createElements();

		this.modalTitle.innerText = "Создать визит";
		this.modalSubmitButton.innerText = "Создать";

		//Modal form
		this.form.className = "row";

		//Modal form - choose doctor
		this.formChooseDoctorContainer.className = "col-5 mb-2";
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
		this.formChooseUrgencyContainer.className = "col-5 offset-2 mb-2";
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
		this.formBloodPressureContainer.className = "col-4 mb-2";
		this.formBloodPressureContainer.innerHTML = `
			<label for="bloodPresure" class="form-label">Обычное давление</label>
		`;

		//Modal form - blood presure input
		this.formBloodPressureInput.id = "bloodPresure";
		this.formBloodPressureInput.className = "form-control";
		this.formBloodPressureInput.type = "text";
		this.formBloodPressureInput.required = true;
		this.formBloodPressureInput.placeholder = "120/80";
		this.formBloodPressureInput.pattern = "[0-9]{2,3}\/[0-9]{2,3}";

		//Modal form - body mass index
		this.formBodyMassIndexContainer.className = "col-4 mb-2";
		this.formBodyMassIndexContainer.innerHTML = `
			<label for="bodyMassIndex" class="form-label">Индекс массы тела</label>
		`;

		//Modal form - body mass index input
		this.formBodyMassIndexInput.id = "bodyMassIndex";
		this.formBodyMassIndexInput.className = "form-control";
		this.formBodyMassIndexInput.type = "text";
		this.formBodyMassIndexInput.required = true;
		this.formBodyMassIndexInput.placeholder = "24";
		this.formBodyMassIndexInput.pattern = "\\d{1,2}(\.\\d{1,2})?";

		//Modal form - cardiovascular diseases
		this.formCardiovascularDiseasesContainer.className = "mb-2";
		this.formCardiovascularDiseasesContainer.innerHTML = `
			<label for="cardiovascularDiseases" class="form-label">Перенесенные заболевания сердечно-сосудистой системы</label>
		`;

		//Modal form - cardiovascular diseases input
		this.formCardiovascularDiseasesContent.id = "cardiovascularDiseases";
		this.formCardiovascularDiseasesContent.className = "form-control";

		//Modal form - age
		this.formAgeContainer.className = "col-2 mb-2";
		this.formAgeContainer.innerHTML = `
			<label for="age" class="form-label">Возраст</label>
		`;

		//Modal form - age input
		this.formAgeInput.id = "age";
		this.formAgeInput.className = "form-control";
		this.formAgeInput.type = "text";
		this.formAgeInput.required = true;
		this.formAgeInput.pattern = "([1-9][0-9]|[1-9])";

		//Modal form - last visit
		this.formLastVisitContainer.className = "col-5 mb-2";
		this.formLastVisitContainer.innerHTML = `
			<label for="lastVisit" class="form-label">Дата последнего визита</label>
		`;

		//Modal form - last visit input
		this.formLastVisitInput.id = "lastVisit";
		this.formLastVisitInput.className = "form-control";
		this.formLastVisitInput.type = "date";
		this.formLastVisitInput.required = true;

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
		this.formBloodPressureContainer.append(this.formBloodPressureInput);
		this.formBodyMassIndexContainer.append(this.formBodyMassIndexInput);
		this.formCardiovascularDiseasesContainer.append(this.formCardiovascularDiseasesContent);
		this.formAgeContainer.append(this.formAgeInput);
		this.formLastVisitContainer.append(this.formLastVisitInput);
	}

	#createBody() {
		this.selectedDoctor = this.formChooseDoctorSelect.selectedOptions[0].value;
		this.data = {
			title: this.formVisitPurposeInput.value,
			description: this.formVisitDescriptionContent.value || null,
			doctor: this.selectedDoctor,
			urgency: this.formChooseUrgencySelect.selectedOptions[0].value,
			fullName: this.formFullNameInput.value,
		};

		switch (this.selectedDoctor) {
			case "Кардиолог": {
				this.data.bloodPressure = this.formBloodPressureInput.value;
				this.data.bodyMassIndex = this.formBodyMassIndexInput.value;
				this.data.cardiovascularDiseases = this.formCardiovascularDiseasesContent.value || null;
				this.data.age = this.formAgeInput.value;
				break;
			}
			case "Стоматолог": {
				this.data.lastVisit = this.formLastVisitInput.value;
				break;
			}
			case "Терапевт": {
				this.data.age = this.formAgeInput.value;
				break;
			}
			default:
				throw new Error("Параметры для доктора не указаны");
		}

		return this.data;
	}

	#showAdditionalFields(doctor) {
		if (doctor === "Кардиолог") {
			this.additionalFieldsContainer.innerHTML = "";
			this.additionalFieldsContainer.append(
				this.formBloodPressureContainer,
				this.formBodyMassIndexContainer,
				this.formCardiovascularDiseasesContainer,
				this.formAgeContainer);
		}
		if (doctor === "Стоматолог") {
			this.additionalFieldsContainer.innerHTML = "";
			this.additionalFieldsContainer.append(this.formLastVisitContainer);
		}
		if (doctor === "Терапевт") {
			this.additionalFieldsContainer.innerHTML = "";
			this.additionalFieldsContainer.append(this.formAgeContainer);
		}
		this.form.append(this.additionalFieldsContainer);
	}

	_eventHandlers() {
		super._eventHandlers();

		this.formChooseDoctorSelect.addEventListener('change', (e) => {
			this.#showAdditionalFields(e.target.value);
		})

		this.modalSubmitButton.addEventListener('click', (e) => {
			this.body = this.#createBody();
			this.form.classList.add('was-validated');
			if (this.form.checkValidity()) {
				this.modalSubmitButton.disabled = true;
				this.modalSubmitButton.innerHTML = `
							<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
							<span>Загрузка...</span>
						`;
				this.submitHandler(this);
			}
		});
	}

	render() {
		super.render();
		this.#showAdditionalFields(this.formChooseDoctorSelect.selectedOptions[0].value);
	}
}