import React, { useEffect, useState, useRef,  memo } from "react";
import { observer, inject } from "mobx-react";

import Input from "@components/Input";
import Button from "@components/Button";
import BubbleChat from "@components/BubbleChat";

import "./style.scss";

const TalkLayout = (props) => {
    const { storeMain, storeLecture } = props;
    const [chat, setChat] = useState("");


    const inputControl = () => {
        if (props.title.indexOf("공지") == 1) {
            //userType이 교수면 input 사용가능
            // 학생이면 input에 disable 넣기
        }
    };
    const handleChat = (e) => {
        setChat(e.target.value);
    };

    const handleChatKeyDown = e => {
        if(e.keyCode == 13) {
            storeMain.socket.emit("message", {
                token: sessionStorage.token,
                type: "chat",
                data: {
                    courseIdx: storeLecture.selectLecture.courseIdx,
                    chat: chat,
                    type: props.type,
                },
            });
    
            setChat('');
        }
    }

    const btnSend = (e) => {
        storeMain.socket.emit("message", {
            token: sessionStorage.token,
            type: "chat",
            data: {
                courseIdx: storeLecture.selectLecture.courseIdx,
                chat: chat,
                type: props.type,
            },
        });

        setChat('');
    };

    let disabled = false;
    let placeHolderMsg = "메시지 입력";
    let btnMsg = "전송";

    if (props.type === "notice") {
        if (storeMain.userType == 0) {
            placeHolderMsg = "교수님만 사용 가능합니다.";
            btnMsg = "전송 불가";
            disabled = true;
        }
    }

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

export default inject("storeMain", "storeLecture")(TalkLayout);
