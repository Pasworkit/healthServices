import LoginModal from "./classes/LoginModal.js";
import login from "./api/login.js";

const btnLogin = document.querySelector('.header__btn-login');
const btnCreateVisit = document.querySelector('.header__btn-createVisit');

    if (document.cookie.includes('token')) {
        btnLogin.classList.add('none');
        btnCreateVisit.classList.remove('none');
    } else {
        btnLogin.addEventListener('click', () => {
            const modal = new LoginModal();
            modal.render();

            const btnRegistration = document.querySelector('.btn-registration');

            btnRegistration.addEventListener('click', () => {
                const email = document.querySelector("#exampleInputEmail1").value;
                const password = document.querySelector("#exampleInputPassword1").value;
                login(email, password).then((r) => {
                    if (r < 300) {
                        modal.closeModal();
                        btnLogin.classList.add('none');
                        btnCreateVisit.classList.remove('none');
                    } else {
                        document.querySelector('.form-text').innerText = 'Неверный логин или пароль'
                    }

                });
            })
        })
    }






