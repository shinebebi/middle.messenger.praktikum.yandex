import Block from '../../../utils/Block';
import AuthController from "../../../utils/controllers/AuthController";
import {router} from "../../index";
import {FormValidator} from "../../../utils/FormValidation";
import {validationConfig} from "../login";

export default class ChangeDataPage extends Block {
    protected getStateFromProps() {
        this.state = {
            onChange: async (e) => {
                e.preventDefault();
                const data: any = {};

                Object.entries(this.refs as {[key: string]: HTMLInputElement}).forEach(([key, input]) => {
                    // @ts-ignore
                    data[key] = input.querySelector('.person-info').value;
                });

                await AuthController.changeUserData(data)
            },
            goToProfile: () => {
                router.go('/settings')
            },
            ava: async (e) => {
                e.preventDefault()
                const myUserForm: any = document.getElementById('ava-form')
                // @ts-ignore
                const avatar = document.querySelector('.avatar_input').files[0]
                const form = new FormData(myUserForm);
                form.append('avatar', avatar);
                await AuthController.changeAvatarData(form)
                    .then(() => AuthController.fetchUser())
            }
        };

    }

    componentDidMount() {
        const formProfile: any = document.querySelector('.info-container');
        const loginValidator = new FormValidator(validationConfig, formProfile);
        loginValidator.enableValidation()
    }

    render() {
        //language=hbs
        return `
            <section class="main">
                <div class="nav-btn__container">
                    {{{SendButton goToProfile="go-message" onClick=goToProfile}}}
                </div>
                <div class="profile__container">
                    <div class="main-info__container">
                        <img src="https://ya-praktikum.tech/api/v2/resources{{user.avatar}}" class="img"/>
                        <form enctype="multipart/form-data" id="ava-form">
                            <input type="file" class="avatar_input"/>
                            {{{Button text="Save" onClick=ava}}}
                        </form>
                        <h2 class="name">{{user.display_name}}</h2>
                    </div>
                    <form class="info-container" novalidate>
                        {{{ChangeInfo title="Почта" value=user.email ref="email" name="email" type="email"}}}
                        {{{ChangeInfo title="Логин" value=user.login ref="login" name="login" minlength="3" maxlength="20"}}}
                        {{{ChangeInfo title="Имя" name="name" value=user.first_name ref="first_name"}}}
                        {{{ChangeInfo title="Фамилия"  name="surname" value=user.second_name ref="second_name"}}}
                        {{{ChangeInfo title="Имя в чате" value=user.display_name ref="display_name"}}}
                        {{{ChangeInfo title="Телефон" name="telephone" minlength="10" maxlength="15" type="number" value=user.phone ref="phone"}}}
                        {{{Button text="Save" onClick=onChange}}}
                    </form>
                </div>
            </section>
        `
    }
}