import Block from '../../../utils/Block'
import './chat.css'
import {router} from "../../index";
import MessengerController from "../../../utils/controllers/MessengerController";

export default class ChatPage extends Block {
    protected getStateFromProps() {
        this.state = {
            toggleAddPopup: () => {
                const popup = document.querySelector('.add_popup')
                // @ts-ignore
                popup.classList.toggle('switch_popup')
            },
            goToProfile: () => {
                router.go('/settings')
            },
            addChat: async (e) => {
                e.preventDefault()
                // @ts-ignore
                const titleInput = document.querySelector('.title').value
                await MessengerController.addChat({title: titleInput}).then(() => {
                    this.state.toggleAddPopup()
                    MessengerController.fetchChats()
                })

            },
        }
    }
    /*componentDidUpdate() {
        console.log(this.props.messages)
        return true
    }*/

    render() {
        //language=hbs
        return `
            <section class="main">
                <section class="popup add_popup">
                    <div class="popup_overlay">
                        {{{CrossButton text="+" onClick=toggleAddPopup}}}
                        <form class="main_form">
                            {{{Input name="title"}}}
                            {{{Button text="add chat" onClick=addChat}}}
                        </form>
                    </div>
                </section>
                <section class="feed">
                    {{{Link text="Профиль >" onClick=goToProfile style="chat_link"}}}
                    <input placeholder="Поиск" class="search"/>
                    <div class="chats-container">
                        {{#each chats}}
                            {{{ChatBox info=this}}}
                        {{/each}}
                        {{{Button text="+" onClick=toggleAddPopup}}}
                    </div>
                </section>
                {{#if currentChat}}
                    {{{Chatting info=currentChat members=members messages=messages}}}
                {{else}}
                    <p class="choose-chat-text">Выберите чат чтобы отправить сообщение</p>
                {{/if}}
            </section>
        `
    }
}