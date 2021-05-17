import React, { useEffect, useState, useRef, memo } from "react";
import { observer, inject } from "mobx-react";

import MainLayout from "@templates/MainLayout";
import TalkLayout from "@templates/TalkLayout";
import BubbleChat from "@components/BubbleChat";
import ChatHeader from "@components/ChatHeader";
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

import "./style.scss";

import * as Util from "@util";

const Chat = (props) => {
  const { storeMain, storeChat, storeItem } = props;
  const [list, setList] = useState([]);
  const [itemUserId, setItemUserId] = useState("");
  const chatBoxElem = useRef(null);

  let sockJS = new SockJS("http://3.35.103.50:8080/ws-stomp");
  let stompClient = Stomp.over(sockJS);
  storeMain.setStomp(stompClient);

  useEffect(() => {
    Util.requestServer("chat/room", "GET", {
      chatRoomIdx: storeChat.chatRoomIdx
    }).then(async function (result) {
      if(result.code === 200) {
        console.log(result);
        setList(result.body);
        storeChat.setChats(result.body);
      }
    });

    stompClient.connect({}, () => {
      stompClient.subscribe("/sub/chat/room/"+storeChat.chatRoomIdx, (data) => {
        var recv = JSON.parse(data.body);
        addMessage(recv);
      });
    });

    Util.requestServer("item/userId", "GET", {
      itemIdx: storeItem.selectItem.itemIdx
    }).then(async function (result) {
      if(result.code === 200) {
        setItemUserId(result.body);
      }
    });

      return () => {
          console.log('disconnect');
          stompClient.disconnect();

          storeItem.setSelectItem(null);
          storeItem.setItemUserIdx(null);
      };
  }, []);

  const addMessage = (msg) => {
    storeChat.addChat(msg);
    setList(storeChat.chats);
    console.log("msg: "+msg);
    chatBoxElem.current.scrollTop = chatBoxElem.current.scrollHeight;
  }

  let isMyItem = false;

  if(itemUserId === storeMain.id) {
    isMyItem = true;
  }

  let chats = list.map((item, i) => {
    return (
      <BubbleChat
          key={i}
          data={item}
          color={item.userIdx == storeMain.userIdx ? "green" : "default"}
      ></BubbleChat>
    );
  });

  return (
    <MainLayout>
      <TalkLayout isMyItem={isMyItem} refElem={chatBoxElem} title="채팅" type="qna">
          {chats}
      </TalkLayout>
    </MainLayout>
  );
};

export default inject("storeMain", "storeChat", "storeItem")(observer(Chat));
