import Block from '../../../utils/Block';
import {store} from "../../../utils/store";
import {chooseChat} from "../../../utils/store/chats";
import MessengerController from "../../../utils/controllers/MessengerController";
import {TChat} from "../../../utils/api/chat-api";
import {connectToChat} from "../../../utils/controllers/SocketController";

interface IChatBox {
    info: TChat
}


export default class ChatBox extends Block {
    constructor({info}: IChatBox) {
        async function onClick(e) {
            e.preventDefault()
            const list = await MessengerController.fetchChats()
            const members = await MessengerController.fetchMembers(info.id)
            store.dispatch(chooseChat(info, list, members))
            await connectToChat(info.id, store.state.user.profile.id)
        }

        super({
            info,
            events: {
                click: onClick,
            }
        });
    }

    render() {
        // language=hbs
        return `
            <div class="chat-box">
                <div class="img-box">
                    <img src="" class="profile-icon"/>
                </div>
                <h2 class="name">{{info.title}}</h2>
                <p class="message">{{info.last_message.content}}</p>
                <p class="time"></p>
                <div class="unread">{{info.unread_count}}</div>
            </div>
        `
    }
}