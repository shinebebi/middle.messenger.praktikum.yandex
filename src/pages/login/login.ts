import Block from '../../../utils/Block'
export default class LoginPage extends Block {
    constructor() {
        super();
    }
        render() {
        //language=hbs
        return `
            <section class="overlay">
                <form class="main" novalidate>
                    <h1 class="header">Вход</h1>
                    <div class="inputs_container">
                        {{{Input name="login" minlength="3" maxlength="20"}}}
                        {{{Input name="password" minlength="8" maxlength="40" type="password"}}}
                    </div>
                    <div class="btn_container">
                        {{{Button text="Sign In"}}}
                        <button class="btn_sign-up">
                            <a href="../registration/registration.html" class="link">Sign Up</a>
                        </button>
                    </div>
                </form>
            </section>
        `
    }
}