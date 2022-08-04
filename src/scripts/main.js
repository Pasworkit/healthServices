import Modal from "./classes/Modal.js";
import login from "./api/login.js";
import CreateVisitModal from "./classes/CreateVisitModal.js";

const btnLogin = document.querySelector('.header__btn-login');
const btnCreateVisit = document.querySelector('.header__btn-createVisit');

btnLogin.addEventListener('click', () => {
	const modal = new Modal();
	modal.render();

	const btnRegistration = document.querySelector('.btn-registration');
	btnRegistration.addEventListener('click', () => {
		const emailInput = document.querySelector(".email");
		const passwordInput = document.querySelector(".password");
		const email = emailInput.value;
		const password = passwordInput.value;
		login(email, password).then((r) => {
			if (r < 300) {
				modal.closeModal();
				btnLogin.classList.add('none');
				btnCreateVisit.classList.remove('none');
			} else {
				document.querySelector('.label-mail').innerText = 'Неверный логин или пароль'
			}

		});
	})
})

btnCreateVisit.addEventListener('click', () => {
	new CreateVisitModal().render();
})






