import React, { useEffect, useState, useRef, memo } from "react";

import "./style.scss";

const ChatHeader = () => {
  const items = [
    {
      // img, title, content 값 가져오기
      img:
        "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
      title: "제목ㄲㄲㄲㄲ",
      contents: "내용ㅇㅇㅇ",
    },
  ];

  return (
    <div className="Container">
      <div className="Contents">
        <div className="ImgContents">
          <img className="OpenMenuIcon" src={items[0].img} alt=""></img>
        </div>

        <div className="TextContents">
          <p className="TitleContents"> {items[0].title}</p>

          <p className="DetailContents"> {items[0].contents} </p>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
