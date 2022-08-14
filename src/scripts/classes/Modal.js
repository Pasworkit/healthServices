export default class Modal {
	constructor() {
		this.modalBackdrop = document.createElement('div');
		this.modalFade = document.createElement('div');
		this.modalDialog = document.createElement('div');
		this.modalContent = document.createElement('div');
		this.modalHeader = document.createElement('div');
		this.modalTitle = document.createElement('h5');
		this.modalHeaderCloseButton = document.createElement('button');
		this.modalBody = document.createElement('div');
		this.modalFooter = document.createElement('div');
		this.modalCloseButton = document.createElement('button');
		this.modalSubmitButton = document.createElement('button');
	}

	closeModal() {
		this.modalFade.remove();
		this.modalBackdrop.remove();
	}


	_createElements() {
		this.modalBackdrop.className = "modal-backdrop fade show";

		//Modal fade
		this.modalFade.className = "modal fade show display js-modal";
		this.modalFade.id = "modal";
		this.modalFade.tabIndex = -1;
		this.modalFade.setAttribute("aria-labelledby", "modal");
		this.modalFade.setAttribute("aria-modal", "true");
		this.modalFade.setAttribute("role", "dialog");

		//Modal dialog
		this.modalDialog.className = "modal-dialog w-100";

		//Modal content
		this.modalContent.className = "modal-content";

		//Modal header
		this.modalHeader.className = "modal-header";
		this.modalTitle.className = "modal-title";
		this.modalTitle.id = "modalLabel";
		this.modalTitle.innerText = "Модальное окно";

		this.modalHeaderCloseButton.type = "button";
		this.modalHeaderCloseButton.className = "btn-close";
		this.modalHeaderCloseButton.ariaLabel = "Close";

		//Modal body
		this.modalBody.className = "modal-body";

		// Modal footer
		this.modalFooter.className = "modal-footer";

		this.modalCloseButton.className = "btn btn-secondary";
		this.modalCloseButton.type = "button";
		this.modalCloseButton.innerText = "Закрыть";
		this.modalSubmitButton.className = "btn btn-primary";
		this.modalSubmitButton.type = "button";
		this.modalSubmitButton.innerText = "Подтвердить";

		//Appends
		this.modalFade.append(this.modalDialog);
		this.modalDialog.append(this.modalContent);
		this.modalContent.append(this.modalHeader, this.modalBody, this.modalFooter);
		this.modalHeader.append(this.modalTitle, this.modalHeaderCloseButton);
		this.modalFooter.append(this.modalCloseButton, this.modalSubmitButton);
	}

	_eventHandlers() {
		this.modalFade.addEventListener('click', (e) => {
			if (e.target.classList.contains('js-modal')) {
				this.closeModal();
			}
		});

		this.modalHeaderCloseButton.addEventListener('click', this.closeModal.bind(this));

		this.modalCloseButton.addEventListener('click', this.closeModal.bind(this));
	}

	render(container = document.body) {
		this._createElements();
		this._eventHandlers();
		container.append(this.modalFade, this.modalBackdrop);
	}
}