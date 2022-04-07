import { renderDOM } from '../../../utils/renderDOM'
import RegistrationPage from './registration'
import Button from "../../components/Button/button"
import Input from "../../components/Input/input"
import {registerComponent} from '../../../utils/registerComponent'
// @ts-ignore
import {FormValidator} from "../../../utils/FormValidation.ts"
// @ts-ignore
import { validationConfig } from '../login'
document.addEventListener('DOMContentLoaded', () => {
    registerComponent(Button)
    registerComponent(Input)
    const registrationPage = new RegistrationPage()
    renderDOM('#app', registrationPage)
    const formReg: any = document.querySelector('.main');
    const btn = formReg.querySelector('.submit')
    let inputsObject = {}
    const inputs = formReg.querySelectorAll('.input')
    btn.addEventListener('click', evt => {
        inputs.forEach(elem => {
            inputsObject = {
                ...inputsObject,
                [elem.name]: elem.value
            }
        })
        console.log(inputsObject)
    });
    const loginValidator = new FormValidator(validationConfig, formReg);
    loginValidator.enableValidation()
})
