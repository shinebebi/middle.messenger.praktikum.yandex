import Block from '../../../utils/Block'
import Button from '../../components/Button/button'
import Input from '../../components/Input/input'
// @ts-ignore
import {styles} from './login.css'
const style = styles
export default class LoginPage extends Block {
    constructor() {
        super({ onClick: () => console.log('fuck') });
    }
    render() {
        //language=hbs
        return `
            <section class="overlay">
                <form class="main" novalidate>
                    <h1 class="header">Вход</h1>
                    <div class="inputs_container">
                        {{{Input name="login"}}}
                        {{{Input name="password"}}}
                    </div>
                    <div class="btn_container">
                        {{{Button text="Sign In" onClick=onClick}}}
                        <button class="btn_sign-up">
                            <a href="../registration/registration.html" class="link">Sign Up</a>
                        </button>
                    </div>
                </form>
            </section>
        `
    }
}