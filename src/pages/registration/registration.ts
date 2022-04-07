import Block from '../../../utils/Block'

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
                        {{{Input name="email" type="email"}}}
                        {{{Input name="login" minlength="3" maxlength="20"}}}
                        {{{Input name="name"}}}
                        {{{Input name="surname"}}}
                        {{{Input name="telephone" minlength="10" maxlength="15" type="number"}}}
                        {{{Input name="password" minlength="8" maxlength="40" type="password"}}}
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