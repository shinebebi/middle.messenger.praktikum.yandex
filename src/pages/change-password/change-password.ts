import Block from '../../../utils/Block'
import AuthController from "../../../utils/controllers/AuthController";
import {router} from "../../index";
export default class ChangePasswordPage extends Block {
    protected getStateFromProps() {
        this.state = {
            onChange: async (e) => {
                e.preventDefault();
                const data: any = {};

                Object.entries(this.refs as {[key: string]: HTMLInputElement}).forEach(([key, input]) => {
                    // @ts-ignore
                    data[key] = input.querySelector('.person-info').value;
                });

                await AuthController.changePassword(data)
            },
            goToProfile: () => {
                router.go('/settings')
            }
        };
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
                        <h2 class="name">{{user.display_name}}</h2>
                    </div>
                    <div class="info-container">
                        {{{ChangeInfo title="Старый пароль" value="" ref="oldPassword"}}}
                        {{{ChangeInfo title="Новый пароль" value="" ref="newPassword"}}}
                        {{{Button text="Save"}}}
                    </div>
                </div>
            </section>
        `
    }
}