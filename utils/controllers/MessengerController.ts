import {ChatAPI, IAddUser, TChatsData, TMemberData} from "../api/chat-api";
import {store} from '../store';
import {setChats} from "../store/chats";

class MessengerController {
    private chatApi: ChatAPI;

    constructor() {
        this.chatApi = new ChatAPI()
    }
    async addChat(data: {title: string}): Promise<void> {
        try {
            await this.chatApi.addChat(data)
        } catch (e) {
            console.log(e)
        }
    }
    async addUser(data: IAddUser): Promise<void> {
        try {
            await this.chatApi.addUser(data)
        } catch (e) {
            console.log(e)
        }
    }
    async deleteUser(data: IAddUser): Promise<void> {
        try {
            await this.chatApi.deleteUser(data)
        } catch (e) {
            console.log(e)
        }
    }
    async fetchChats(): Promise<TChatsData | void> {
        try {
            const chats = await this.chatApi.getChats()

            store.dispatch(setChats(chats));
            return chats;
        } catch (e) {
            console.log(e)
        }
    }
    async fetchMembers(id: number): Promise<TMemberData[] | void> {
        try {
            const membersList = await this.chatApi.getChatUsers(id)
            return membersList;
        } catch (e) {
            console.log(e)
        }
    }
    async getToken(chatId: number): Promise<{token: string} | void> {
        try {
            return await this.chatApi.getToken(chatId);
        } catch (e) {
            console.log(e)
        }
    }
}

export default new MessengerController();