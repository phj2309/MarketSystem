import React, { useEffect, useState, useRef, memo } from "react";
import { observer, inject } from "mobx-react";
import { withRouter, Link } from "react-router-dom";

import MainLayout from "@templates/MainLayout";

import Button from "@components/Button";
import Textarea from "@components/Textarea";

import "./style.scss";

import Logo from "@asset/bamboo.svg";
import closeIcon from "@asset/close.svg";

const Evaluation = () => {
  const [content, setContent] = useState("");

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const resize = (event) => {
    let target = event.target;
    target.style.height = "200px";
    target.style.height = target.scrollHeight + "px";
  };

  const uploadBtn = (e) => {};

  return (
    <MainLayout>
      <div className="Wrapper">
        <div className="Top">
          <div className="Title">평가하기</div>
          <div className="ImgWrapper">
            <img className="closeIcon" src={closeIcon} alt="" />
          </div>
        </div>

        <div className="ContentsWrapper">
          <p className="Contents">쥬르리 님과의 거래를 평가해주세요!</p>

          <Textarea
            padding="5px 0px 0px 5px"
            value={content}
            height="200px"
            onChange={handleContentChange}
            onKeyUp={resize}
            onKeyDown={resize}
            placeholder="내용을 입력하세요."
            margin="0px 0px 10px 0px"
            className="content"
          ></Textarea>
        </div>

        <div className="Bottom">
          <Button
            className="uploadBtn"
            value="완료"
            width="100%"
            height="50px"
            onClick={uploadBtn}
          ></Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Evaluation;
