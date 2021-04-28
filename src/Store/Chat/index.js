import { observable, action } from 'mobx';

export default class Chat {

    @observable
    chatRoomIdx = null;

    @action enterChat = (chatRoomIdx) => {
        this.chatRoom = chatRoomIdx;
    }
    
}
