import BaseAPI from './base-api';
import {SignupData} from "./auth-api";


export interface LoginData {
    login: string;
    password: string;
}
export type TUserData = Omit<SignupData, 'password'> & { avatar: string };
export type TMemberData = TUserData & {display_name: string, role: string}
export type TChat = {
    id: number,
    title: string,
    avatar: string,
    unread_count: number,
    last_message: {
        user: TUserData,
        time: string,
        content: string
    }
}
export type TChatsData = Array<TChat>
export interface IAddUser {
    users: number[],
    chatId: number
}

export class ChatAPI extends BaseAPI {
    constructor() {
        super('/chats');
    }

    addChat(data: {title: string}): Promise<void> {
        return this.http.post('', data);
    }

    getChats(): Promise<TChatsData> {
        return this.http.get('')
    }

    addUser(data: IAddUser): Promise<void> {
        return this.http.put('/users', data)
    }
    getChatUsers(id: number): Promise<TMemberData[]> {
        return this.http.get(`/${id}/users`)
    }
    deleteUser(data: IAddUser): Promise<void> {
        return this.http.delete('/users', data)
    }
    getToken(chatId: number): Promise<{token: string}> {
        return this.http.post(`/token/${chatId}`)
    }


    delete: undefined;
    create: undefined;
    update: undefined;
    read: undefined
}