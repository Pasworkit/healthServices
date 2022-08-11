import getCards from "../api/getCards.js";


export default class Filter {
	constructor(formContainer, visitContainer) {
        this.formContainer = formContainer;
        this.visitContainer = visitContainer;

        this.searchWrap = document.createElement('form');
        this.formTitle = document.createElement('h4');
        this.formChooseUrgencyContainer = document.createElement('div');
		this.formChooseUrgencySelect = document.createElement('select');
		this.formChooseStatusContainer = document.createElement('div');
		this.formChooseStatusSelect = document.createElement('select');
		this.formVisitPurposeContainer = document.createElement('div');
		this.formVisitPurposeInput = document.createElement('input');
        this.submitButton = document.createElement('button');
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

        this.submitButton.className = "filter__button w-auto btn btn-primary mt-5";
		this.submitButton.type = "button";
		this.submitButton.innerText = "Применить";

        this.formChooseUrgencyContainer.append(this.formChooseUrgencySelect);
		this.formChooseStatusContainer.append(this.formChooseStatusSelect);
		this.formVisitPurposeContainer.append(this.formVisitPurposeInput);
        this.searchWrap.append(
            this.formTitle, 
            this.formVisitPurposeContainer, 
            this.formChooseUrgencyContainer, 
            this.formChooseStatusContainer, 
            this.submitButton
        );
        this.formContainer.prepend(this.searchWrap);
        

    }
    render() {
        this._createElements();
		this.searchWrap.addEventListener('submit', (e) => {
            e.preventDefault();
            getAndRender(this.formVisitPurposeInput, this.formChooseStatusSelect, this.formChooseUrgencySelect);
        });

        const getAndRender = async (purposeInput, statusSelect, urgencySelect) => {
            this.visitContainer.innerText = "";
            let cards = await getCards();

               const cardsSearch = cards.filter(({ title, description , status , urgency}) => {
                 const searchContent = title + " " + description;
                
                  if (searchContent.toLowerCase().includes(purposeInput.value.toLowerCase()))
                    
                  
                        return (statusSelect.value === "" && urgencySelect.value === "") || (statusSelect.value === status && urgencySelect.value === urgency) || (statusSelect.value === "" && urgencySelect.value === urgency) || (urgencySelect.value === "" && statusSelect.value === status);
           
               });
               console.log(cardsSearch);
           
         }
      
         this.submitButton.addEventListener('click', () => {
            getAndRender(this.formVisitPurposeInput, this.formChooseStatusSelect, this.formChooseUrgencySelect);
         })
	}
    
}


//    const getAndRender = async () => {
//       this.visitContainer.innerText = "";
//       let cards = await getCards();
//     //   const visits = getVisits(); // get data from the server
//          const cardsSearch = cards.filter(visit => {
//             if (visit) {
//                 console.log(visit);
//             //    const searchContent = visit.purpose + " " + visit.desc + " " + visit.doctor;
//             //    if (searchContent.toLowerCase().includes(searchInput.value.toLowerCase()))
//             //       if (statusInput.value === "Choose status" && urgencyInput.value === "Choose urgency")
//             //          return true;
//             //       else
//             //          return (statusInput.value === visit.status && urgencyInput.value === visit.urgency) || (statusInput.value === "Choose status" && urgencyInput.value === visit.urgency) || (urgencyInput.value === "Choose urgency" && statusInput.value === visit.status);
//             }
//          });
//          cardsSearch.forEach((item) => item.render(visitContainer));
//    }

//    this.submitButton.addEventListener('click', () => {
//       getAndRender();
//    })


// //get data with existing visits
// // export function getVisits() {
// //    return getCards().then(c => c.json())
// //        .then(visits => {
// //           if (visits !== undefined) {
// // //place cards into relevant array
// //              return visits.map(visit => {
// //                 if (visit.doctor === "Dentist") {
// //                    return new VisitDentist(visit);
// //                 } else if (visit.doctor === "Cardiologist") {
// //                    return new VisitCardiologist(visit);
// //                 } else if (visit.doctor === "Therapist") {
// //                    return new VisitTherapist(visit);
// //                 }
// //              });
// //           }
// //        });
// // }