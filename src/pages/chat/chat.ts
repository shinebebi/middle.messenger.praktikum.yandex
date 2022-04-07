import Block from '../../../utils/Block'
export default class ChatPage extends Block {
    constructor() {
        super();
    }
    render() {
        //language=hbs
        return `
            <section class="main">
                <section class="feed">
                    <a href="../profile/profile.html" class="link">Профиль ></a>
                    <input placeholder="Поиск" class="search"/>
                    <div class="chats-container">
                        {{{ChatBox name="Veronika" message="Hello" time="13:54" unread="6"}}}
                        {{{ChatBox  name="Vladimir" message="Like..." time="66:66" unread="10"}}}
                        {{{ChatBox name="Alex" message="Nice!" time="13:54" unread="6"}}}
                    </div>
                </section>
                <section class="chatting">
                    <p class="choose-chat-text">Выберите чат чтобы отправить сообщение</p>
                </section>
            </section>
        `
    }
}