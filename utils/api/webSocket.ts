type TChatWebSocket = {
    chatId: number;
    userId: number;
    tokenValue: string;
};

export default class ChatWebSocket {
    create(connection: TChatWebSocket): WebSocket {
        const { chatId, userId, tokenValue } = connection;
        return new WebSocket(
            `wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${tokenValue}`
        );
    }
}