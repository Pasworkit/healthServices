

export function toggleBtn(){
    const btnLogin = document.querySelector('.header__btn-login');
    const btnCreateVisit = document.querySelector('.header__btn-createVisit');
    btnLogin.classList.add('none');
    btnCreateVisit.classList.remove('none');
}