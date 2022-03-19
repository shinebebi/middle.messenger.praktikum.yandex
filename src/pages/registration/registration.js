import {FormValidator} from "../../../utils/FormValidation.js"

const formReg = document.querySelector('.main');
const telInput = formReg.querySelector('.telephone')
const emailInput = formReg.querySelector('.email')
telInput.setAttribute('type', 'tel')
emailInput.setAttribute('type', 'email')
const validationConfig = {
    inputElement: '.input',
    submitButtonSelector: '.submit',
    inactiveButtonClass: 'btn-inactive',
    errorClass: 'input-error'
};

const loginValidator = new FormValidator(validationConfig, formReg);
loginValidator.enableValidation()