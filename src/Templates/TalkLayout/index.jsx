import React, { useEffect, useState, useRef,  memo } from "react";
import { observer, inject } from "mobx-react";

import Input from "@components/Input";
import Button from "@components/Button";
import BubbleChat from "@components/BubbleChat";

import "./style.scss";

const TalkLayout = (props) => {
    const { storeMain, storeChat } = props;
    const [chat, setChat] = useState("");

    const handleChat = (e) => {
        setChat(e.target.value);
    };

    const handleChatKeyDown = e => {
        if(e.keyCode == 13) {
            btnSend();
        }
    }

    const btnSend = (e) => {
        storeMain.stompClient.send("/pub/chat/message",{},
            JSON.stringify({
                chatRoomIdx:storeChat.chatRoomIdx,
                userIdx:storeMain.userIdx,
                message:chat
            })
        );
        setChat('');
    };

    let disabled = false;
    let placeHolderMsg = "메시지 입력";
    let btnMsg = "전송";

    return (
        <div className="TalkLayout">
            <p className="title">{props.title}</p>
            <div className="talk">
                <div ref={props.refElem} className="scrollbar" >{props.children}</div>
            </div>
            <div className="bottom">
                <Input
                    value={chat}
                    onChange={handleChat}
                    onKeyDown={handleChatKeyDown}
                    placeholder={placeHolderMsg}
                    height="small"
                    margin="0px 10px 0px 0px"
                    disabled={disabled}
                ></Input>
                <Button
                    onClick={btnSend}
                    value={btnMsg}
                    disabled={disabled}
                    width="110px"
                    height="40px"
                ></Button>
            </div>
        </div>
       
    );
};

export default inject("storeMain", "storeChat")(TalkLayout);
