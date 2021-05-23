import React, { useEffect, useState, useRef, memo } from "react";
import { observer, inject } from "mobx-react";
import { withRouter, Link } from "react-router-dom";

import MainLayout from "@templates/MainLayout";

import Button from "@components/Button";
import TextareaLine from "@components/TextareaLine";

import "./style.scss";

import * as Util from "@util";

import Logo from "@asset/bamboo.svg";
import closeIcon from "@asset/close.svg";

const Declaration = (props) => {
  const [content, setContent] = useState("");
  const [partnerName, setPartnerName] = useState("");
  const [partnerId, setPartnerId] = useState("");

  useEffect(() => {
    Util.requestServer("user/name", "GET", {
      userIdx: props.location.state.declaIdx
    }).then(async function (result) {
      if(result.code === 200) {
        setPartnerName(result.body.name);
        setPartnerId(result.body.id);
      }
    });

}, []);

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const resize = (event) => {
    let target = event.target;
    target.style.height = "200px";
    target.style.height = target.scrollHeight + "px";
  };

  const uploadBtn = (e) => {
    Util.requestServer("report", "POST", {
      userId: partnerId,
      content: content
    }).then(async function (result) {
      if(result.code === 200) {
        alert(result.body);

        props.history.push("/");
      }
    });
  };

  return (
    <MainLayout>
      <div className="Wrapper">
        <div className="Top">
          <div className="Title">신고하기</div>
          <div className="ImgWrapper">
            <img className="closeIcon" src={closeIcon} alt="" />
          </div>
        </div>

        <div className="ContentsWrapper">
          <p className="Contents">{partnerName} 님과의 거래 중에 문제가 있으셨나요?</p>

          <TextareaLine
            padding="5px 0px 0px 5px"
            value={content}
            height="200px"
            onChange={handleContentChange}
            onKeyUp={resize}
            onKeyDown={resize}
            placeholder="내용을 입력하세요."
            margin="0px 0px 10px 0px"
            className="content"
          ></TextareaLine>
        </div>

        <div className="Bottom">
          <Button
            className="uploadBtn"
            value="신고하기"
            width="100%"
            height="50px"
            onClick={uploadBtn}
          ></Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Declaration;
