import Block from '../../../utils/Block';
import MessengerController from "../../../utils/controllers/MessengerController";
import AuthController from "../../../utils/controllers/AuthController";
import {TChat, TMemberData} from "../../../utils/api/chat-api";
import {sendMessageToChat} from "../../../utils/controllers/SocketController";

interface IChatting {
    info: TChat,
    members: TMemberData[],
    messages: any,
}


export default class Chatting extends Block {
    constructor({info, members, messages}: IChatting) {
        super({
            info, members, messages,
        });
    }
    protected getStateFromProps() {
        this.state = {
            toggleAddUserPopup: () => {
                const popup = document.querySelector('.add-user_popup')
                // @ts-ignore
                popup.classList.toggle('switch_popup')
            },
            toggleMembersPopup: (e) => {
                console.log('hi')
                e.preventDefault()
                const popup = document.querySelector('.members_popup')
                // @ts-ignore
                popup.classList.toggle('switch_popup')
            },
            addUser: async (e) => {
                e.preventDefault()
                // @ts-ignore
                const loginInput = document.querySelector('.login-user').value
                const userData = await AuthController.defineUser({login: loginInput})
                //@ts-ignore
                await MessengerController.addUser({users: [userData[0].id], chatId: this.props.info.id})
            },
            sendMessage: async () => {
                //@ts-ignore
                const messageInput = document.querySelector('.message-input')?.value
                await sendMessageToChat(this.props.info.id, messageInput)
            }

        }
    }


    render() {
        // language=hbs format=false
        return `
            <section class="chatting">
                <section class="popup add-user_popup">
                    <div class="popup_overlay">
                        {{{CrossButton text="+" onClick=toggleAddUserPopup}}}
                        <form class="main_form">
                            {{{Input name="login-user"}}}
                            {{{Button text="add user" onClick=addUser}}}
                        </form>
                    </div>
                </section>
                <section class="popup members_popup">
                    <div class="popup_overlay">
                        {{{CrossButton text="+" onClick=toggleMembersPopup}}}
                        <form class="main_form">
                            {{#each members}}
                                <div class="member-box" id={{this.id}}>
                                    <h4>{{this.first_name}}</h4>
                                    {{{CrossButton text="+" info=this}}}
                                </div>
                            {{/each}}
                        </form>
                    </div>
                </section>
                <div class="chat_header">
                    <img src=""/>
                    <p>{{info.title}}</p>
                    {{{Button text="+" onClick=toggleAddUserPopup}}}
                    {{{Button text="Members" onClick=toggleMembersPopup}}}
                </div>
                <div class="message-feed">
                    {{#each messages}}
                        {{{Message content=this}}}
                    {{/each}}
                </div>
                <div class="message-box">
                    <div class="chat-img"></div>
                    <input class="message-input" placeholder="Сообщение"/>
                    {{{SendButton onClick=sendMessage}}}
                </div>
            </section>
            </section>
        `
    }
}