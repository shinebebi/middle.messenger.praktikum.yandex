import Block from '../../../utils/Block'
import ChangeInfo from '../../components/Change-info/change-info'
import Button from '../../components/Button/button'
// @ts-ignore
import {styles} from '../profile/profile.css'
const style = styles
// @ts-ignore
export default class ChangeDataPage extends Block {
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
                        {{{ChangeInfo title="Почта" value="pochta@yandex.ru"}}}
                        {{{ChangeInfo title="Логин" value="ivanivanov"}}}
                        {{{ChangeInfo title="Имя" value="Ivan"}}}
                        {{{ChangeInfo title="Фамилия" value="Иванов"}}}
                        {{{ChangeInfo title="Имя в чате" value="Иван"}}}
                        {{{ChangeInfo title="Телефон" value="+7 (909) 967 30 30"}}}
                        {{{Button text="Save"}}}
                    </div>
                </div>
            </section>
        `
    }
}