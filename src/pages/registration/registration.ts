import Block from '../../../utils/Block'
import AuthController from '../../../utils/controllers/AuthController'
import {router} from "../../index";
import {FormValidator} from "../../../utils/FormValidation";
import {validationConfig} from "../login";

export default class RegistrationPage extends Block {
    protected getStateFromProps() {
        this.state = {
            onSignUp: async (e) => {
                e.preventDefault();
                const data: any = {};

                Object.entries(this.refs as {[key: string]: HTMLInputElement}).forEach(([key, input]) => {
                    // @ts-ignore
                    data[key] = input.querySelector('.input_form').value;
                });

                await AuthController.signup(data)
                    .then(() => {
                        router.go('/settings')
                    })
            },
            goToSignIn: (e) => {
                e.preventDefault();
                router.go('/')
            }
        };
    }
    componentDidMount() {
        const formSignUp: any = document.querySelector('.main_form');
        const loginValidator = new FormValidator(validationConfig, formSignUp);
        loginValidator.enableValidation()
    }
    render() {
        //language=hbs
        return `
            <section class="overlay_form">
                <form class="main_form" novalidate>
                    <h1 class="header_form">Регистрация</h1>
                    <div class="inputs_container_form">
                        {{{Input name="email" type="email" ref="email"}}}
                        {{{Input name="login" minlength="3" maxlength="20" ref="login"}}}
                        {{{Input name="name" ref="first_name"}}}
                        {{{Input name="surname" ref="second_name"}}}
                        {{{Input name="telephone" minlength="10" maxlength="15" type="number" ref="phone"}}}
                        {{{Input name="password" minlength="8" maxlength="40" type="password" ref="password"}}}
                    </div>
                    <div class="btn_container_form">
                        {{{Button text="Sign Up" onClick=onSignUp}}}
                        {{{Link text="Sign In" style="link_form" onClick=goToSignIn}}}
                    </div>
                </form>
            </section>
        `
    }
}
