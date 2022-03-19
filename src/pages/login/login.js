import {FormValidator} from "../../../utils/FormValidation.js"
const formLogin = document.querySelector('.main');
const loginInput = formLogin.querySelector('.login');
const passwordInput = formLogin.querySelector('.password');

const validationConfig = {
    inputElement: '.input',
    submitButtonSelector: '.submit',
    inactiveButtonClass: 'btn-inactive',
    errorClass: 'input-error'
};

const loginValidator = new FormValidator(validationConfig, formLogin);
loginValidator.enableValidation()