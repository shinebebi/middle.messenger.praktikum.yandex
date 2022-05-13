import ChatPage from "./chat";
import {withRouter} from "../../../utils/Router";
import {connect, store} from "../../../utils/store";

export default withRouter(connect((state: any) => ({
    chats: state.chats.chatsData,
    currentChat: state.chats.currentChat,
    members: state.chats.members,
    messages: store.state.chats.messages
}), ChatPage));