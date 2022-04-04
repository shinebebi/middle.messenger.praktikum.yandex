import { renderDOM } from '../../../utils/renderDOM'
import ChatBox from '../../components/ChatBox/chat-box'
import ChatPage from './chat'
import {registerComponent} from '../../../utils/registerComponent'
document.addEventListener('DOMContentLoaded', () => {
    registerComponent(ChatBox)
    const chatPage = new ChatPage()
    renderDOM('#app', chatPage)
})