import React, { useEffect, useState, useRef, memo } from "react";
import { observer, inject } from "mobx-react";

import MainLayout from "@templates/MainLayout";

import "./style.scss";

import * as Util from "@util";

const ChatList = (props) => {
  const { storeMain, storeChat, storeItem } = props;

  const [list, setList] = useState([]);

  useEffect(() => {
    Util.requestServer("chat/list", "GET", {
      userIdx: storeMain.userIdx
    }).then(async function (result) {
      if(result.code === 200) {
        console.log(result);
        setList(result.body);
      }
    });
  }, []);

  const enterChatRoom = (item) => {
    storeChat.enterChat(item.chatRoomIdx);
    storeItem.setSelectItem(item);

    props.history.replace(
      "/chat"
    )
  }

    const items = [
        {// img, title, content 값 가져오기
          img: 
            "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
          title: "자료구조 책 팝니다.",
          contents: "새 책이고 어쩌고 저쩌고",
        },
        {
          img:
            "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
          title: "운영체제 책 팝니다.",
          contents: "중곤데 뭐요",
        },
      ];

    return (
        <MainLayout>
            <p className="title">채팅</p>
            <div className="Container">
          {list.map((item, idx) => (
            <div className="Contents"
              key = {idx}
              onClick={(e) => enterChatRoom(item)}
            >
              <div className="ImgContents">
                <img className="OpenMenuIcon" src={"data:image/png;base64,"+item.image} alt=""></img>
              </div>

              <div className="TextContents">
                <p className="TitleContents"> {item.title}</p>

                <p className="DetailContents"> {item.charge} </p>
              </div>
            </div>
          ))}
          </div>
        </MainLayout>
    );
}

export default inject("storeMain", "storeChat", "storeItem")(observer(ChatList));