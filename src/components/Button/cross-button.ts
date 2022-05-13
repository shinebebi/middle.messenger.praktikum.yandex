import Block from '../../../utils/Block';
import MessengerController from "../../../utils/controllers/MessengerController";
import {store} from "../../../utils/store";

interface IButtonProps {
    text: string;
    onClick?: () => void,
    info?: any
    chatId?: any
}

export default class CrossButton extends Block {
    constructor(props: IButtonProps) {
        const {
            onClick, text, info, chatId
        } = props;
        async function deleteUser() {
            const a = document.getElementById(info.id)
            // @ts-ignore
            a.remove()
            await MessengerController.deleteUser({users: [info.id], chatId: store.state.chats.currentChat.id})
        }
        super({
            text,
            info,
            chatId,
            events: {
                click: !info ? onClick : deleteUser,
            },
        });
    }

    render() {
        // language=hbs
        return `
            <button class="cross-btn" type="button">{{text}}</button>
        `
    }
}