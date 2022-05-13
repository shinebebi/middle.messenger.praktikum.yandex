// @ts-ignore
import {registerComponent} from '../utils/registerComponent';
import Router from '../utils/Router';
import ChatPage from './pages/chat';
import LoginPage from './pages/login/login';
import RegistrationPage from './pages/registration/registration';
import Button from "./components/Button/button"
import Input from "./components/Input/input"
import Link from "./components/Link/link";
import ProfilePage from './pages/profile';
import ChatBox from './components/ChatBox/chat-box'
import Info from "./components/Info/info";
import AuthController from "../utils/controllers/AuthController";
import ChangeInfo from "./components/Change-info/change-info";
import ChangeDataPage from "./pages/change-data";
import ChangePasswordPage from "./pages/change-password";
import MessengerController from "../utils/controllers/MessengerController";
import CrossButton from "./components/Button/cross-button";
import Chatting from "./components/Chatting/chatting";
import Message from "./components/Message/message";
import SendButton from "./components/Button/send-button";


registerComponent(Button)
registerComponent(Input)
registerComponent(ChatBox)
registerComponent(Info)
registerComponent(Link)
registerComponent(ChangeInfo)
registerComponent(CrossButton)
registerComponent(Chatting)
registerComponent(Message)
registerComponent(SendButton)
export const router = new Router();
AuthController.fetchUser()
    .then(() => MessengerController.fetchChats())
    .then(() => {
        router
            .use('/messenger', ChatPage)
            .use('/', LoginPage)
            .use('/sign-up', RegistrationPage)
            .use('/settings', ProfilePage)
            .use('/change-data', ChangeDataPage)
            .use('/change-password', ChangePasswordPage)
            .start();
    });