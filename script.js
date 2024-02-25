const wrapper = document.querySelector('.wrapper');
const signinLink = document.querySelector('.signin-link');
const singupLink = document.querySelector('.signup-link');
const btnPopup = document.querySelector('.btnSignin-popup');
const iconClose = document.querySelector('.icon-close');


singupLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

signinLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});