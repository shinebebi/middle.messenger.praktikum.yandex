import Block from '../../../utils/Block'
export default class ChangePasswordPage extends Block {
    constructor() {
        super();
    }
    render() {
        //language=hbs
        return `
            <section class="main">
                <div class="nav-btn__container">
                    <button class="nav-btn">
                        <img src="http://localhost:3000/pages/profile/../../btn-to-main.49889140.png?1649102076789" class="nav-btn__img"/>
                    </button>
                </div>
                <div class="profile__container">
                    <div class="main-info__container">
                        <img src="http://localhost:3000/pages/profile/../../profile-icon.0b9cd2ef.jpg?1649101664642"" class="img"/>
                        <h2 class="name">Ivan</h2>
                    </div>
                    <div class="info-container">
                        {{{ChangeInfo title="Старый пароль" value="*****"}}}
                        {{{ChangeInfo title="Новый пароль" value="***********"}}}
                        {{{ChangeInfo title="Повторите новый пароль" value="********"}}}
                        {{{Button text="Save"}}}
                    </div>
                </div>
            </section>
        `
    }
}