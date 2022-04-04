import Block from '../../../utils/Block';

interface IChatBox {
    name: string,
    message: string,
    time: string,
    unread: string
}


export default class ChatBox extends Block {
    constructor({name, message, unread, time}: IChatBox) {
        super({
            name,
            message,
            unread,
            time
        });
    }

    render() {
        // language=hbs
        return `
            <div class="chat-box">
                <div class="img-box">
                    <img src="http://localhost:3000/pages/profile/../../profile-icon.0b9cd2ef.jpg?1649101664642" class="profile-icon"/>
                </div>
                <h2 class="name">{{name}}</h2>
                <p class="message">{{message}}</p>
                <p class="time">{{time}}</p>
                <div class="unread">{{unread}}</div>
            </div>
        `
    }
}