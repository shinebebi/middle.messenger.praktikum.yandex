import Block from '../../../utils/Block'

export default class ProfilePage extends Block {
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
                        {{{Info title="Почта" value="pochta@yandex.ru"}}}
                        {{{Info title="Логин" value="ivanivanov"}}}
                        {{{Info title="Имя" value="Ivan"}}}
                        {{{Info title="Фамилия" value="Иванов"}}}
                        {{{Info title="Имя в чате" value="Иван"}}}
                        {{{Info title="Телефон" value="+7 (909) 967 30 30"}}}
                    </div>
                    <div class="btn__container">
                        <div class="btn">
                            <a href="../change-data/change-data.html" class="link" style="color: #3369F3">Изменить данные</a>
                        </div>
                        <div class="btn">
                            <a href="../change-password/change-password.html" class="link" style="color: #3369F3">Изменить пароль</a>
                        </div>
                        <div class="btn">
                            <a href="../login/login.html" class="link">Выйти</a>
                        </div>
                    </div>
                </div>
            </section>
        `
    }
}