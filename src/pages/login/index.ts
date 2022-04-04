import { renderDOM } from '../../../utils/renderDOM'
import LoginPage from './login'
import Button from "../../components/Button/button"
import Input from "../../components/Input/input"
import {registerComponent} from '../../../utils/registerComponent'
// @ts-ignore
import {FormValidator} from "../../../utils/FormValidation.ts"
const validationConfig = {
    inputElement: '.input',
    submitButtonSelector: '.submit',
    inactiveButtonClass: 'btn-inactive',
    errorClass: 'input-error'
};
document.addEventListener('DOMContentLoaded', () => {
    registerComponent(Button)
    registerComponent(Input)
    const loginPage = new LoginPage()
    renderDOM('#app', loginPage)
    const formLogin: any = document.querySelector('.main');
    const btn = formLogin.querySelector('.submit')
    const loginInput = formLogin.querySelector('.login');
    const passwordInput = formLogin.querySelector('.password');
    loginInput.setAttribute('minlength', 3)
    loginInput.setAttribute('maxlength', 20)
    const loginValidator = new FormValidator(validationConfig, formLogin);
    let inputsObject = {}
    const inputs = formLogin.querySelectorAll('.input')
    btn.addEventListener('click', evt => {
        inputs.forEach(elem => {
            inputsObject = {
                ...inputsObject,
                [elem.name]: elem.value
            }
        })
        console.log(inputsObject)
    });
    loginValidator.enableValidation()
})
export {validationConfig}