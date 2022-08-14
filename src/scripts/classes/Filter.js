import debounce from "../utils/debounce.js"
import filtrationCards from "../functions/filtrationCards.js"

export default class Filter {
    constructor(formContainer) {
        this.formContainer = formContainer;

        this.searchWrap = document.createElement('form');
        this.formTitle = document.createElement('h4');
        this.formChooseUrgencyContainer = document.createElement('div');
        this.formChooseUrgencySelect = document.createElement('select');
        this.formChooseStatusContainer = document.createElement('div');
        this.formChooseStatusSelect = document.createElement('select');
        this.formVisitPurposeContainer = document.createElement('div');
        this.formVisitPurposeInput = document.createElement('input');
    }

    _createElements() {
        this.searchWrap.className = "d-flex";
        this.formTitle.innerText = "ФИЛЬТР";
        this.formTitle.className = "mt-5 text-secondary";

        //Form - visit purpose
        this.formVisitPurposeContainer.className = "h-auto w-auto p-3 mb-2 text-secondary";
        this.formVisitPurposeContainer.innerHTML = `
			<label for="visitPurpose" class="form-label">Цель/описание визита</label>
		`;

        //Form - visit purpose input
        this.formVisitPurposeInput.id = "visitPurpose";
        this.formVisitPurposeInput.className = "form-control";
        this.formVisitPurposeInput.type = "text";
        this.formVisitPurposeInput.required = true;

        //Form - choose urgency
        this.formChooseUrgencyContainer.className = "h-auto w-auto p-3 mb-2 text-secondary";
        this.formChooseUrgencyContainer.innerHTML = `
			<label for="urgencyChoose" class="form-label">
			Срочность
			</label>
		`;

        //Form - choose urgency select
        this.formChooseUrgencySelect.id = "urgencyChoose";
        this.formChooseUrgencySelect.className = "form-select";
        this.formChooseUrgencySelect.innerHTML = `
            <option selected></option>
			<option>Обычная</option>
			<option>Приоритетная</option>
			<option>Неотложная</option>
		`;

        //Form - choose status
        this.formChooseStatusContainer.className = "h-auto w-auto p-3 mb-2 text-secondary";
        this.formChooseStatusContainer.innerHTML = `
			<label for="statusChoose" class="form-label">
			Статус визита
			</label>
		`;

        //Form - choose status select
        this.formChooseStatusSelect.id = "urgencyChoose";
        this.formChooseStatusSelect.className = "form-select";
        this.formChooseStatusSelect.innerHTML = `
            <option selected></option>
			<option>Открыт</option>
			<option>Закрыт</option>
		`;

        this.formChooseUrgencyContainer.append(this.formChooseUrgencySelect);
        this.formChooseStatusContainer.append(this.formChooseStatusSelect);
        this.formVisitPurposeContainer.append(this.formVisitPurposeInput);
        this.searchWrap.append(
            this.formTitle,
            this.formVisitPurposeContainer,
            this.formChooseUrgencyContainer,
            this.formChooseStatusContainer,
        );
        this.formContainer.prepend(this.searchWrap);
    }

    render() {
        this._createElements();
        this.formVisitPurposeInput.addEventListener('input', (e) => {
            debounce(filtrationCards(e, "purpose", this.formChooseUrgencySelect, this.formChooseStatusSelect, this.formVisitPurposeInput), 1000)
        });
        this.formChooseUrgencySelect.addEventListener('input', (e) => {
            debounce(filtrationCards(e, "urgency", this.formChooseUrgencySelect, this.formChooseStatusSelect, this.formVisitPurposeInput), 1000)
        });
        this.formChooseStatusSelect.addEventListener('input', (e) => {
            debounce(filtrationCards(e, "status", this.formChooseUrgencySelect, this.formChooseStatusSelect, this.formVisitPurposeInput), 1000)
        });
    }
}