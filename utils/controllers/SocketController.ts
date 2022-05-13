import ChatWebSocket from "../api/webSocket";
import MessengerController from "./MessengerController";
import {store} from "../store";
import {setMessages} from "../store/chats";

const activeChat: Record<string, WebSocket | null> = {};

const onError = (event: Event) => {
    console.log('Ошибка', event);
};

const onClose = (event: CloseEvent) => {
    if (event.wasClean) {
        console.log("Соединение закрыто чисто");
    } else {
        console.log("Обрыв соединения");
    }
};

const onMessage = (userId: number, event: MessageEvent) => {
    try {
        const data = JSON.parse(event.data);
        let messages: any = [];
        if (Array.isArray(data)) {
            messages = [
                {
                    messages: data.map((obj) => transformChatMessage(obj)),
                },
            ];
            store.dispatch(setMessages(messages[0].messages.reverse()))
        } else {
            messages = [
                {
                    messages: [transformChatMessage(data)],
                },
            ];
            const list = store.state.chats.messages
            list.push(messages[0].messages[0])
            store.dispatch(setMessages(list))
        }
    } catch (err) {
        console.log(err);
    }
};

const getMessages = (ws: WebSocket) => {
    ws.send(
        JSON.stringify({
            content: "0",
            type: "get old",
        })
    );
};

export const connectToChat = async (chatId: number, userId: number) => {
    const tokenValue = await MessengerController.getToken(chatId);
    if (!tokenValue) {
        return;
    }
    const wsMiddleWear = new ChatWebSocket();
    try {
        const socket = wsMiddleWear.create({ chatId, userId, tokenValue: tokenValue.token});
        socket.addEventListener("open", () => {
            activeChat[chatId] = socket;
            console.log("Соединение установлено");
            getMessages(socket);
        });
        socket.addEventListener("message", onMessage.bind(this, userId));
        socket.addEventListener("error", onError);
        socket.addEventListener("close", onClose);
    } catch (error) {
        console.log("Не удалось подключится к чату", error);
    }
};

export const sendMessageToChat = (chatId: number, message: string) => {
    const ws = activeChat[chatId];
    if (ws) {
        ws.send(
            JSON.stringify({
                content: message,
                type: "message",
            })
        );
    } else {
        console.log("Соединение с чатом не установлено");
    }
};

export const transformUser = (data: any): any => {
    return {
        id: data.id,
        login: data.login,
        firstName: data.first_name,
        secondName: data.second_name,
        displayName: data.display_name,
        email: data.email,
        phone: data.phone,
        avatar: data.avatar,
    };
};

export const transformMessage = (data?: any): any | null => {
    return data && {
        user: transformUser(data.user),
        time: new Date(data.time),
        content: data.content,
    }
};

export const transformChats = (data: any[]): any[] => {
    return data.map((dto) => {
        return {
            id: dto.id,
            title: dto.title,
            unreadCount: dto.unread_count,
            lastMessage: transformMessage(dto.last_message),
            avatar: dto.avatar,
        } as any;
    });
};

export const transformChatMessage = (
    data: any,
): any => {
    return {
        id: data.id,
        isRead: data.is_read,
        content: data.content,
        userId: data.user_id,
        chatId: data.chat_id,
    } as any;
};