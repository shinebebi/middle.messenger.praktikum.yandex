import Block from '../../../utils/Block'
import Button from '../../components/Button/button'
import Input from '../../components/Input/input'
// @ts-ignore
import {styles} from './registration.css'
const style = styles

export default class RegistrationPage extends Block {
    constructor() {
        super();
    }
    render() {
        //language=hbs
        return `
            <section class="overlay">
                <form class="main" novalidate>
                    <h1 class="header">Регистрация</h1>
                    <div class="inputs_container">
                        {{{Input name="email"}}}
                        {{{Input name="login"}}}
                        {{{Input name="name"}}}
                        {{{Input name="surname"}}}
                        {{{Input name="telephone"}}}
                        {{{Input name="password"}}}
                    </div>
                    <div class="btn_container">
                        {{{Button text="Sign Up"}}}
                        <button class="btn_sign-up">
                            <a href="" class="link">Sign In</a>
                        </button>
                    </div>
                </form>
            </section>
        `
    }
}