import React, { useEffect, useState, useRef, memo } from "react";
import { observer, inject } from "mobx-react";
import { withRouter, Link } from "react-router-dom";

import MainLayout from "@templates/MainLayout";

import Button from "@components/Button";
import Input from "@components/Input";
import Textarea from "@components/Textarea";

import "./style.scss";

import * as Util from "@util";

const EnrollDetailPage = (props) => {
  const { storeMain, storeItem } = props;

  const [title, setTitle] = useState("");
  const [cost, setCost] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState(true);
  const [images, setImages] = useState([]);

  let typeValue = "";

  useEffect(() => {
    if(storeItem) {
      Util.requestServer("item", "GET", {
        itemIdx : storeItem.selectItem.itemIdx,
      }).then(function (resp) {
        let body = resp.body;

        if(resp.code === 200) {
          setTitle(body.title);
          setCost(body.charge);
          setContent(body.content);
          setDate(body.returnDate);
          setType(body.type);
          setImages(body.imageList);
        }
      });
    }
  }, []);

  if(type) {
    typeValue = "대여";
  } else {
    typeValue = "판매";
  }

  const infoBtn = (e) => {
    console.log("adfadf");
  };

  const chatBtn = (e) => {
    Util.requestServer("chat/create", "POST", {
      itemIdx: storeItem.selectItem.itemIdx,
      userIdx: storeMain.userIdx
  }).then(function (result) {
      if(result.code == 200) {
          console.log(result);
          alert("채팅방이 개설되었습니다.");
          props.history.push('/chat');
      } else {
          alert(result.body);
      }
  });
  };

  return (
    <MainLayout>
      <div className="EnrollDetailPage">
        <div className="Enroll">
          <div className="Top">
            <Button
              className="typeBtn"
              value={typeValue}
              width="50px"
              height="30px"
              disabled
            ></Button>

            <p className="Title">{title}</p>
          </div>

          <div className="Contents">
            <div className="img">
              <img className="image" src={"data:image/png;base64,"+images[0]} alt=""></img>
            </div>

            <div style={{ borderTop: "1px solid #ccc" }}>
              <Textarea
                padding="5px 0px 0px 5px"
                value={content}
                height="200px"
                margin="0px 0px 10px 0px"
                disabled
              ></Textarea>
            </div>
            <div className="wrap">
              <p className="item_title">반납 날짜</p>

              <div className="rental">
                <p margin="0px 0px 10px 0px" width="60%">
                  {date}
                </p>
              </div>
            </div>

            <div className="wrap">
              <p className="item_title">가격</p>
              <div className="rental">
                <p margin="0px 0px 10px 0px" width="60%">
                {cost}
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
              onClick={infoBtn}
            ></Button>

            <Button
              value="채팅으로 거래하기"
              height="50px"
              width="45%"
              float="right"
              onClick={chatBtn}
            ></Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default inject("storeMain", "storeItem")(observer(EnrollDetailPage));
