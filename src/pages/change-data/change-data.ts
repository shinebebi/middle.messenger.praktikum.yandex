import Block from '../../../utils/Block';
import AuthController from "../../../utils/controllers/AuthController";
import {router} from "../../index";
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
            ava: async (e) => {
                e.preventDefault()
                // @ts-ignore
                const myUserForm = document.getElementById('ava-form')
                // @ts-ignore
                const avatar = document.querySelector('.avatar_input').files[0]
                // @ts-ignore
                const form = new FormData(myUserForm);
                form.append('avatar', avatar);
                console.log(form.get(avatar))
                fetch(`https://ya-praktikum.tech/api/v2/user/profile/avatar`, {
                    method: 'PUT',
                    credentials: 'include', // Нам нужно подставлять cookies
                    mode: 'cors', // Работаем с CORS
                    body: form,
                })
                    .then(() => AuthController.fetchUser());
                /*e.preventDefault()
                // @ts-ignore
                const avatar = document.querySelector('.avatar_input').files[0]
                await AuthController.changeAvatarData(avatar)*/
            }
        };

    }
    componentDidMount() {
        console.log(this.props.user.avatar)
    }
    render() {
        //language=hbs
        return `
            <section class="main">
                <div class="nav-btn__container">
                    <button class="nav-btn">
                        <img src="" class="nav-btn__img"/>
                    </button>
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
                    <form class="info-container">
                        {{{ChangeInfo title="Почта" value=user.email ref="email"}}}
                        {{{ChangeInfo title="Логин" value=user.login ref="login"}}}
                        {{{ChangeInfo title="Имя" value=user.first_name ref="first_name"}}}
                        {{{ChangeInfo title="Фамилия" value=user.second_name ref="second_name"}}}
                        {{{ChangeInfo title="Имя в чате" value=user.display_name ref="display_name"}}}
                        {{{ChangeInfo title="Телефон" value=user.phone ref="phone"}}}
                        {{{Button text="Save" onClick=onChange}}}
                    </form>
                </div>
            </section>
        `
    }
}