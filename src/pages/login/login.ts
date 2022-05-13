import Block from '../../../utils/Block'
import './login.css'
import AuthController from "../../../utils/controllers/AuthController";
import {router} from "../../index";
import {FormValidator} from "../../../utils/FormValidation";
import {validationConfig} from "./index";

export default class LoginPage extends Block {
    protected getStateFromProps() {
        this.state = {
            onLogin: async (e) => {
                e.preventDefault();
                const data: any = {};

                Object.entries(this.refs as {[key: string]: HTMLInputElement}).forEach(([key, input]) => {
                    // @ts-ignore
                    data[key] = input.querySelector('.input_form').value;
                });
                //console.log(data)

                await AuthController.login(data)
                    .then(() => {
                        router.go('/settings')
                    })
            },
            goToSignUp: (e) => {
                e.preventDefault();
                router.go('/sign-up')
            }
        };
    }
    componentDidMount() {
        const formLogin: any = document.querySelector('.main_form');
        const loginValidator = new FormValidator(validationConfig, formLogin);
        loginValidator.enableValidation()
    }
    render() {
    //language=hbs
    return `
        <section class="overlay_form">
            <form class="main_form" novalidate>
                <h1 class="header_form">Вход</h1>
                <div class="inputs_container_form">
                    {{{Input name="login" minlength="3" maxlength="20" ref="login"}}}
                    {{{Input name="password" minlength="8" maxlength="40" type="password" ref="password"}}}
                </div>
                <div class="btn_container_form">
                    {{{Button text="Sign In" onClick=onLogin}}}
                    {{{Link text="Sign Up" style="link_form" onClick=goToSignUp}}}
                </div>
            </form>
        </section>
    `
    }
}