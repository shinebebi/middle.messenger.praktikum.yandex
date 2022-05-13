import {Action} from './store';
import {TChat, TChatsData, TMemberData} from "../api/chat-api";
//import {UserData} from '../api/auth-api';

const SET_CHATS = 'chats/SET';
const DELETE_CHATS = 'chats/DELETE';
const SET_ERROR = 'chats/SET_ERROR';
const CHOOSE_CHAT ='chat/CHOOSE_CHAT';
const SET_MEMBERS = 'chat/SET_MEMBERS';
const GET_MESSAGES = 'chat/GET_MESSAGES'

export const setChats = (chats: TChatsData) => ({
    type: SET_CHATS,
    payload: chats,
});

export const chooseChat = (chat: TChat, chatList: any, members: any) => ({
    type: CHOOSE_CHAT,
    payload: {
        chat: chat,
        chatList: chatList,
        members: members
    },
});
export const setMembers = (members: TMemberData[]) => ({
    type: SET_MEMBERS,
    payload: {
        members: members
    }
})

export const setMessages = (messages: any) => ({
    type: GET_MESSAGES,
    payload: messages
})


export const setError = (error: { reason: string }) => ({
    type: SET_ERROR,
    payload: error,
});

export default (state = { chatsData: null, error: null,  currentChat: null, members: null, messages: []}, action: Action) => {
    switch (action.type) {
        case SET_CHATS:
            return { error: null, chatsData: action.payload };
        case SET_ERROR:
            return { error: action.payload, chatsData: null };
        case CHOOSE_CHAT:
            return {
                ...state,
                currentChat: action.payload.chat,
                chatsData: action.payload.chatList,
                members: action.payload.members,
            }
        case GET_MESSAGES: {
            return {
                ...state,
                messages: action.payload
            }
        }
        default:
            return state;
    }
}