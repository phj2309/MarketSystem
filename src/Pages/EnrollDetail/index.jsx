import React, { useEffect, useState, useRef, memo } from "react";
import { observer, inject } from "mobx-react";
import { withRouter, Link } from "react-router-dom";

import MainLayout from "@templates/MainLayout";

import Button from "@components/Button";
import Input from "@components/Input";
import Textarea from "@components/Textarea";

import "./style.scss";

const EnrollDetailPage = (props) => {
  const { storeMain } = props;

  const [title, setTitle] = useState("");
  const [cost, setCost] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");

  const infoBtn = (e) => {
    console.log("adfadf");
  };

  const chatBtn = (e) => {};

  return (
    <MainLayout>
      <div className="EnrollDetailPage">
        <div className="Enroll">
          <div className="Top">
            <Button
              className="typeBtn"
              value="대여"
              width="50px"
              height="30px"
              disabled
            ></Button>

            <p className="Title">자료구조 책 팝니다~</p>
          </div>

          <div className="Contents">
            <div className="img"></div>

            <div style={{ borderTop: "1px solid #ccc" }}>
              <Textarea
                padding="5px 0px 0px 5px"
                value="새거고 어쩌고 저ㄱ저고"
                height="200px"
                margin="0px 0px 10px 0px"
                disabled
              ></Textarea>
            </div>
            <div className="wrap">
              <p className="item_title">반납 날짜</p>

              <div className="rental">
                <p margin="0px 0px 10px 0px" width="60%">
                  2022.12.22
                </p>
              </div>
            </div>

            <div className="wrap">
              <p className="item_title">가격</p>
              <div className="rental">
                <p margin="0px 0px 10px 0px" width="60%">
                30000 원
                </p>
              </div>
            </div>
          </div>

          <div className="Bottom">
            <Button
              value="판매자 정보 보기"
              height="50px"
              width="45%"
              margin="0 10px"
              onclick={infoBtn}
            ></Button>

            <Button
              value="채팅으로 거래하기"
              height="50px"
              width="45%"
              float="right"
              onclick={chatBtn}
            ></Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default inject("storeMain")(observer(EnrollDetailPage));
