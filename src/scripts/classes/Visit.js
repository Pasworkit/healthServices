export default class Visit {
	constructor() {
		this.modalBackdrop = document.createElement('div');
		this.modalFade = document.createElement('div');
		this.modalDialog = document.createElement('div');
		this.modalContent = document.createElement('div');
		this.modalHeader = document.createElement('div');
		this.modalHeaderCloseButton = document.createElement('button');
		this.modalBody = document.createElement('div');
		this.modalFooter = document.createElement('div');
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
		this.modalCloseButton = document.createElement('button');
		this.modalSubmitButton = document.createElement('button');
	}

	_createElements() {
		this.modalBackdrop.className = "modal-backdrop fade show";

		//Modal fade
		this.modalFade.className = "modal fade show display js-modal";
		this.modalFade.id = "createVisitModal";
		this.modalFade.tabIndex = -1;
		this.modalFade.setAttribute("aria-labelledby", "createVisitModal");
		this.modalFade.setAttribute("aria-modal", "true");
		this.modalFade.setAttribute("role", "dialog");

		//Modal dialog
		this.modalDialog.className = "modal-dialog w-100";

		//Modal content
		this.modalContent.className = "modal-content";

		//Modal header
		this.modalHeader.className = "modal-header";
		this.modalHeader.innerHTML = `
			<h5 class="modal-title" id="createVisitModalLabel">
				Создать визит
			</h5>
		`;
		this.modalHeaderCloseButton.type = "button";
		this.modalHeaderCloseButton.className = "btn-close";
		this.modalHeaderCloseButton.ariaLabel = "Close";

		//Modal body
		this.modalBody.className = "modal-body";

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

		// Modal footer
		this.modalFooter.className = "modal-footer";

		this.modalCloseButton.className = "btn btn-secondary";
		this.modalCloseButton.type = "button";
		this.modalCloseButton.innerText = "Закрыть";
		this.modalSubmitButton.className = "btn btn-primary";
		this.modalSubmitButton.type = "button";
		this.modalSubmitButton.innerText = "Создать";

		//Appends
		this.modalFade.append(this.modalDialog);
		this.modalDialog.append(this.modalContent);
		this.modalContent.append(this.modalHeader, this.modalBody, this.modalFooter);
		this.modalHeader.append(this.modalHeaderCloseButton);
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
		this.modalFooter.append(this.modalCloseButton, this.modalSubmitButton);
	}

	#closeModal() {
		this.modalFade.remove();
		this.modalBackdrop.remove();
	}

	_eventHandlers() {
		this.modalFade.addEventListener('click', (e) => {
			if (e.target.classList.contains('js-modal')) {
				this.#closeModal();
			}
		});

		this.modalHeaderCloseButton.addEventListener('click', this.#closeModal.bind(this));

		this.modalCloseButton.addEventListener('click', this.#closeModal.bind(this));
	}

	render(container = document.body) {
		this._createElements();
		this._eventHandlers();
		container.append(this.modalFade, this.modalBackdrop);
	}
}

// Получить выбранного доктора
// this.formChooseDoctorSelect.selectedOptions[0].innerText