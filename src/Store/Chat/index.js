import { observable, action } from 'mobx';

export default class Chat {

    @observable
    chatRoomIdx = null;

    @observable
    chats = [];

    @action init = () => {
        this.chats = [];
    }

    @action addChat = (data) => {
        this.chats = this.chats.concat(data);
    }

    @action setChats = (data) => {
        this.chats = data;
    }

    @action enterChat = (chatRoomIdx) => {
        this.chatRoomIdx = chatRoomIdx;
    }
    
}
