import Modal from "./Modal.js";

export default class VisitModal extends Modal {
	constructor(submitHandler, flag, cardObject, card) {
		super();
		this.card = card;
		this.form = document.createElement('form');

		this.formChooseDoctorContainer = document.createElement('div');
		this.formChooseDoctorSelect = document.createElement('select');
		this.formChooseDoctorOptionCardiologist = document.createElement('option');
		this.formChooseDoctorOptionDentist = document.createElement('option');
		this.formChooseDoctorOptionTherapist = document.createElement('option');

		this.formChooseUrgencyContainer = document.createElement('div');
		this.formChooseUrgencySelect = document.createElement('select');
		this.formChooseUrgencyOptionDefault = document.createElement('option');
		this.formChooseUrgencyOptionPrioritized = document.createElement('option');
		this.formChooseUrgencyOptionUrgent = document.createElement('option');
		this.formChooseStatusContainer = document.createElement('div');
		this.formChooseStatusSelect = document.createElement('select');
		this.formChooseStatusOptionOpen = document.createElement('option');
		this.formChooseStatusOptionDone = document.createElement('option');

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

		this.requiredFieldsHint = document.createElement('span');

		this.body = {};
		this.submitHandler = submitHandler;
		this.flag = flag;

		//Data Edit
		if (this.flag === "edit") {
			const { fullName, doctor, status, title, description, urgency, id, cardiovascularDiseases, bloodPressure, bodyMassIndex, age, lastVisit } = cardObject;
			this.fullName = fullName;
			this.doctor = doctor;
			this.status = status,
				this.title = title;
			this.description = description;
			this.urgency = urgency;
			this.id = id;
			this.cardiovascularDiseases = cardiovascularDiseases;
			this.bloodPressure = bloodPressure;
			this.bodyMassIndex = bodyMassIndex;
			this.age = age;
			this.lastVisit = lastVisit;
		}
	}

	_createElements() {
		super._createElements();
		if (this.flag === "create") {
			this.modalTitle.innerText = "?????????????? ??????????";
			this.modalSubmitButton.innerText = "??????????????";
		} else if (this.flag === "edit") {
			this.modalTitle.innerText = "?????????????????????????? ??????????";
			this.modalSubmitButton.innerText = "??????????????????";
		}

		//Modal form
		this.form.className = "row";

		//Modal form - choose doctor
		this.formChooseDoctorContainer.className = "col-5 mb-2";
		this.formChooseDoctorContainer.innerHTML = `
		<label for="doctorChoose" class="form-label">
		???????????????? ??????????
		</label>
		`;

		//Modal form - choose doctor select
		this.formChooseDoctorSelect.id = "doctorChoose";
		this.formChooseDoctorSelect.className = "form-select";

		//Modal form - choose doctor options

		this.formChooseDoctorOptionCardiologist.innerHTML = "??????????????????";
		this.formChooseDoctorOptionCardiologist.selected = true;
		this.formChooseDoctorOptionDentist.innerHTML = "????????????????????";
		this.formChooseDoctorOptionTherapist.innerHTML = "????????????????";

		if (this.flag === "edit") {
			switch (this.doctor) {
				case "??????????????????": this.formChooseDoctorOptionCardiologist.selected = true;
					break;
				case "????????????????????": this.formChooseDoctorOptionDentist.selected = true;
					break;
				case "????????????????": this.formChooseDoctorOptionTherapist.selected = true;
					break;
			}
		}

		//Modal form - choose urgency
		this.formChooseUrgencyContainer.className = "col-5 offset-2 mb-2";
		this.formChooseUrgencyContainer.innerHTML = `
			<label for="urgencyChoose" class="form-label">
			??????????????????
			</label>
		`;

		//Modal form - choose urgency select
		this.formChooseUrgencySelect.id = "urgencyChoose";
		this.formChooseUrgencySelect.className = "form-select";

		//Modal form - choose urgency options
		this.formChooseUrgencyOptionDefault.innerHTML = "??????????????";
		this.formChooseUrgencyOptionDefault.selected = true;
		this.formChooseUrgencyOptionPrioritized.innerHTML = "????????????????????????";
		this.formChooseUrgencyOptionUrgent.innerHTML = "????????????????????";

		if (this.flag === "edit") {
			switch (this.urgency) {
				case "??????????????": this.formChooseUrgencyOptionDefault.selected = true;
					break;
				case "????????????????????????": this.formChooseUrgencyOptionPrioritized.selected = true;
					break;
				case "????????????????????": this.formChooseUrgencyOptionUrgent.selected = true;
					break;
			}
		}

		//Modal form - choose status
		this.formChooseStatusContainer.className = "col-5 offset-2 ms-0 mb-2";
		this.formChooseStatusContainer.innerHTML = `
			<label for="statusChoose" class="form-label">
			???????????? ????????????
			</label>
		`;

		//Modal form - choose status select
		this.formChooseStatusSelect.id = "urgencyChoose";
		this.formChooseStatusSelect.className = "form-select";

		this.formChooseStatusOptionOpen.innerHTML = "????????????";
		this.formChooseStatusOptionOpen.selected = true;
		this.formChooseStatusOptionDone.innerHTML = "????????????";

		if (this.flag === "edit") {
			switch (this.status) {
				case "????????????": this.formChooseStatusOptionOpen.selected = true;
					break;
				case "????????????": this.formChooseStatusOptionDone.selected = true;
					break;
			}
		}

		//Modal form - visit purpose
		this.formVisitPurposeContainer.className = "mb-2";
		this.formVisitPurposeContainer.innerHTML = `
			<label for="visitPurpose" class="form-label label--required">???????? ????????????</label>
		`;

		//Modal form - visit purpose input
		this.formVisitPurposeInput.id = "visitPurpose";
		this.formVisitPurposeInput.className = "form-control";
		this.formVisitPurposeInput.type = "text";
		this.formVisitPurposeInput.required = true;
		if (this.flag === "edit") {
			this.formVisitPurposeInput.value = this.title;
		}

		//Modal form - visit description
		this.formVisitDescriptionContainer.className = "mb-2";
		this.formVisitDescriptionContainer.innerHTML = `
		<label for="visitDescription" class="form-label">
			?????????????? ???????????????? ????????????
		</label>
		`;

		//Modal form - visit description textarea
		this.formVisitDescriptionContent.className = "form-control";
		this.formVisitDescriptionContent.id = "visitDescription";
		this.formVisitDescriptionContent.rows = 1;
		if (this.flag === "edit") {
			this.formVisitDescriptionContent.value = this.description;
		}

		//Modal form - full name
		this.formFullNameContainer.className = "mb-2";
		this.formFullNameContainer.innerHTML = `
			<label for="fullName" class="form-label label--required">??????</label>
		`;

		//Modal form - full name input
		this.formFullNameInput.id = "fullName";
		this.formFullNameInput.className = "form-control";
		this.formFullNameInput.type = "text";
		this.formFullNameInput.required = true;
		if (this.flag === "edit") {
			this.formFullNameInput.value = this.fullName;
		}

		// Modal form - additional fields
		this.additionalFieldsContainer.className = "mb-2";

		//Modal form - blood presure
		this.formBloodPressureContainer.className = "col-4 mb-2";
		this.formBloodPressureContainer.innerHTML = `
			<label for="bloodPresure" class="form-label label--required">?????????????? ????????????????</label>
		`;

		//Modal form - blood presure input
		this.formBloodPressureInput.id = "bloodPresure";
		this.formBloodPressureInput.className = "form-control";
		this.formBloodPressureInput.type = "text";
		this.formBloodPressureInput.required = true;
		this.formBloodPressureInput.placeholder = "120/80";
		this.formBloodPressureInput.pattern = "[0-9]{2,3}\/[0-9]{2,3}";
		if (this.flag === "edit") {
			this.formBloodPressureInput.value = this.bloodPressure;
		}

		//Modal form - body mass index
		this.formBodyMassIndexContainer.className = "col-4 mb-2";
		this.formBodyMassIndexContainer.innerHTML = `
			<label for="bodyMassIndex" class="form-label label--required">???????????? ?????????? ????????</label>
		`;

		//Modal form - body mass index input
		this.formBodyMassIndexInput.id = "bodyMassIndex";
		this.formBodyMassIndexInput.className = "form-control";
		this.formBodyMassIndexInput.type = "text";
		this.formBodyMassIndexInput.required = true;
		this.formBodyMassIndexInput.placeholder = "24";
		this.formBodyMassIndexInput.pattern = "\\d{1,2}(\.\\d{1,2})?";
		if (this.flag === "edit") {
			this.formBodyMassIndexInput.value = this.bodyMassIndex;
		}

		//Modal form - cardiovascular diseases
		this.formCardiovascularDiseasesContainer.className = "mb-2";
		this.formCardiovascularDiseasesContainer.innerHTML = `
			<label for="cardiovascularDiseases" class="form-label">???????????????????????? ?????????????????????? ????????????????-???????????????????? ??????????????</label>
		`;

		//Modal form - cardiovascular diseases input
		this.formCardiovascularDiseasesContent.id = "cardiovascularDiseases";
		this.formCardiovascularDiseasesContent.className = "form-control";
		if (this.flag === "edit") {
			this.formCardiovascularDiseasesContent.value = this.cardiovascularDiseases;
		}

		//Modal form - age
		this.formAgeContainer.className = "col-2 mb-2";
		this.formAgeContainer.innerHTML = `
			<label for="age" class="form-label label--required">??????????????</label>
		`;

		//Modal form - age input
		this.formAgeInput.id = "age";
		this.formAgeInput.className = "form-control";
		this.formAgeInput.type = "text";
		this.formAgeInput.required = true;
		this.formAgeInput.pattern = "([1-9][0-9]|[1-9])";
		if (this.flag === "edit") {
			this.formAgeInput.value = this.age;
		}

		//Modal form - last visit
		this.formLastVisitContainer.className = "col-5 mb-2";
		this.formLastVisitContainer.innerHTML = `
			<label for="lastVisit" class="form-label label--required">???????? ???????????????????? ????????????</label>
		`;

		//Modal form - last visit input
		this.formLastVisitInput.id = "lastVisit";
		this.formLastVisitInput.className = "form-control";
		this.formLastVisitInput.type = "date";
		this.formLastVisitInput.required = true;
		this.formLastVisitInput.max = `${this.#getFormattedTodayDate()}`;

		if (this.flag === "edit") {
			this.formLastVisitInput.value = this.lastVisit;
		}

		this.requiredFieldsHint.className = "form-text";
		this.requiredFieldsHint.innerText = "* ???????????????????????? ???????? ?????? ?????????? ????????????";

		//Appends
		this.modalBody.append(this.form, this.requiredFieldsHint);
		this.form.append(
			this.formChooseDoctorContainer,
			this.formChooseUrgencyContainer,
			this.formChooseStatusContainer,
			this.formVisitPurposeContainer,
			this.formVisitDescriptionContainer,
			this.formFullNameContainer,
			this.additionalFieldsContainer);
		this.formChooseDoctorContainer.append(this.formChooseDoctorSelect);
		this.formChooseDoctorSelect.append(
			this.formChooseDoctorOptionCardiologist,
			this.formChooseDoctorOptionDentist,
			this.formChooseDoctorOptionTherapist,
		);
		this.formChooseStatusContainer.append(this.formChooseStatusSelect);
		this.formChooseStatusSelect.append(
			this.formChooseStatusOptionOpen,
			this.formChooseStatusOptionDone,
		);
		this.formChooseUrgencyContainer.append(this.formChooseUrgencySelect);
		this.formChooseUrgencySelect.append(
			this.formChooseUrgencyOptionDefault,
			this.formChooseUrgencyOptionPrioritized,
			this.formChooseUrgencyOptionUrgent,
		);
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
			description: this.formVisitDescriptionContent.value,
			doctor: this.selectedDoctor,
			status: this.formChooseStatusSelect.selectedOptions[0].value,
			urgency: this.formChooseUrgencySelect.selectedOptions[0].value,
			fullName: this.formFullNameInput.value,
		};

		switch (this.selectedDoctor) {
			case "??????????????????": {
				this.data.bloodPressure = this.formBloodPressureInput.value;
				this.data.bodyMassIndex = this.formBodyMassIndexInput.value;
				this.data.cardiovascularDiseases = this.formCardiovascularDiseasesContent.value;
				this.data.age = this.formAgeInput.value;
				break;
			}
			case "????????????????????": {
				this.data.lastVisit = this.formLastVisitInput.value;
				break;
			}
			case "????????????????": {
				this.data.age = this.formAgeInput.value;
				break;
			}
			default:
				throw new Error("?????????????????? ?????? ?????????????? ???? ??????????????");
		}

		return this.data;
	}

	#showAdditionalFields(doctor) {
		if (doctor === "??????????????????") {
			this.additionalFieldsContainer.innerHTML = "";
			this.additionalFieldsContainer.append(
				this.formBloodPressureContainer,
				this.formBodyMassIndexContainer,
				this.formCardiovascularDiseasesContainer,
				this.formAgeContainer);
		}
		if (doctor === "????????????????????") {
			this.additionalFieldsContainer.innerHTML = "";
			this.additionalFieldsContainer.append(this.formLastVisitContainer);
		}
		if (doctor === "????????????????") {
			this.additionalFieldsContainer.innerHTML = "";
			this.additionalFieldsContainer.append(this.formAgeContainer);
		}
	}

	#getFormattedTodayDate = () => {
		const date = new Date();
		const month = date.getMonth() > 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
		const day = date.getDate() > 10 ? date.getDate() : `0${date.getDate()}`;

		return `${date.getFullYear()}-${month}-${day}`;
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
							<span>????????????????...</span>
						`;
				this.submitHandler(this, this.id, this.card);
			}
		});
	}

	render() {
		super.render();
		this.#showAdditionalFields(this.formChooseDoctorSelect.selectedOptions[0].value);
	}
}
