import Block from '../../../utils/Block'
import AuthController from "../../../utils/controllers/AuthController";
import "./profile.css";
import {router} from "../../index";

export default class ProfilePage extends Block {
    protected getStateFromProps() {
        this.state = {
            onLogout: () => {
                AuthController.logout()
                    .then(() => {
                        router.go('/');
                    })
            },
            goToChangeData: () => {
                router.go('/change-data')
            },
            goToChat: () => {
                router.go('/messenger')
            },
            goToChangePassword: () => {
                router.go('/change-password')
            }
        }
    }
    componentDidMount() {
        if (!this.props.user) {
            this.props.router.go('/');
        }
    }

    componentDidUpdate() {
        if (!this.props.user) {
            this.props.router.go('/');
        }

        return true;
    }


    render() {
        //language=hbs
        return `
            <section class="main">
                <div class="nav-btn__container">
                    {{{SendButton goToProfile="go-message" onClick=goToChat}}}
                </div>
                <div class="profile__container">
                    <div class="main-info__container">
                        <img src="https://ya-praktikum.tech/api/v2/resources{{user.avatar}}" class="img"/>
                        <h2 class="name_profile">{{user.display_name}}</h2>
                    </div>
                    <div class="info-container">
                        {{{Info title="Почта" value=user.email}}}
                        {{{Info title="Логин" value=user.login}}}
                        {{{Info title="Имя" value=user.first_name}}}
                        {{{Info title="Фамилия" value=user.second_name}}}
                        {{{Info title="Имя в чате" value=user.display_name}}}
                        {{{Info title="Телефон" value=user.phone}}}
                    </div>
                    <div class="btn__container">
                        {{{Link text="Изменить данные" onClick=goToChangeData color="#3369F3" style="btn link"}}}
                        {{{Link text="Изменить пароль" onClick=goToChangePassword color="#3369F3" style="btn link"}}}
                        {{{Link text="Выйти" onClick=onLogout color="#red" style="btn link"}}}
                    </div>
                </div>
            </section>
        `
    }
}