import React, { useEffect, useState, useRef, memo } from "react";
import { observer, inject } from "mobx-react";
import { withRouter, Link } from "react-router-dom";

import MainLayout from "@templates/MainLayout";

import Button from "@components/Button";
import Input from "@components/Input";
import Radio from "@components/Radio";
import Textarea from "@components/Textarea";

import "./style.scss";

import * as Util from "@util";

import Logo from "@asset/bamboo.svg";
import closeIcon from "@asset/close.svg";
import cameraIcon from "@asset/camera.svg";

const EnrollPage = (props) => {
  const { storeMain } = props;

  const [title, setTitle] = useState("");
  const [cost, setCost] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [rentalType, setRentalType] = useState(false);

  const [imgBase64, setImgBase64] = useState(""); // 파일 base64
  const [imgFile, setImgFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCostChange = (e) => {
    setCost(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const resize = (event) => {
    let target = event.target;
    target.style.height = "200px";
    target.style.height = target.scrollHeight + "px";
  };

  const formatDate = (date) => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  };

  const handleDateChange = (e) => {
    console.log(e.target.value);
    setDate(e.target.value);
  };

  const handleRentalTypeChange = (e) => {
    console.log(e.target.value);
    setRentalType(!rentalType);
  };

  const picUploadBtn = (e) => {
    console.log("adfadf");
  };

  const uploadBtn = (e) => {

  };

  const handleChangeFile = (event) => {
    let reader = new FileReader();

    reader.onloadend = () => {
      // 2. 읽기가 완료되면 아래코드가 실행됩니다.
      const base64 = reader.result;
      setPreviewURL(reader.result);
      if (base64) {
        setImgBase64(base64.toString()); // 파일 base64 상태 업데이트
      }
    };
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다.
      setImgFile(event.target.files[0]); // 파일 상태 업데이트
    }
  };

  return (
    <MainLayout>
      <div className="EnrollPage">
        <div className="Enroll">
          <div className="Top">
            <img className="closeIcon" src={closeIcon} alt=""></img>

            <p className="Title">
              <img className="lectureIcon" src={Logo} alt=""></img>
              대나무마켓
            </p>
          </div>

          <div className="Contents">
            <div className="ImagePreview">
              <img className="img_preview" src={previewURL}/>
            </div>
            <div className="pic">
              {/* <img className="cameraIcon" src={cameraIcon} alt=""></img>
                            <p className="picTitle">사진 등록</p> */}
              <label className="input-file-button" for="input-file">
                사진 등록
              </label>

              <input
                type="file"
                multiple
                id="input-file"
                name="imgFile"
                //id="imgFile"
                onChange={handleChangeFile}
                style={{ display: "none" }}
              />
            </div>

            <Input
              type="text"
              className="title"
              placeholder="제목을 입력하세요."
              margin="0px 0px 10px 0px"
              value={title}
              onChange={handleTitleChange}
            />

            <Input
              type="text"
              className="cost"
              placeholder="가격을 입력하세요."
              margin="0px 0px 10px 0px"
              value={cost}
              onChange={handleCostChange}
            />

            <Textarea
              padding="5px 0px 0px 5px"
              value={content}
              height="200px"
              onChange={handleContentChange}
              onKeyUp={resize}
              onKeyDown={resize}
              placeholder="제품 설명을 입력하세요."
              margin="0px 0px 10px 0px"
              className="content"
            ></Textarea>

            <div className="wrap">
              <p className="item_title">반납 날짜 설정</p>

              <div className="rental">
                <label htmlFor="rentalType" className="typeLabel">
                  <input
                    type="checkbox"
                    checked={rentalType}
                    onChange={handleRentalTypeChange}
                    id="rentalType"
                    className="rentalType"
                    padding="0px 3px 0px 0px"
                  />
                  대여 여부
                </label>
                {rentalType === true && (
                  <Input
                    type="date"
                    value={date}
                    onChange={handleDateChange}
                    className="date"
                    placeholder="반납 날짜"
                    height="small"
                    margin="0px 0px 10px 0px"
                    width="60%"
                  ></Input>
                )}
              </div>
            </div>
          </div>

          <div className="Bottom">
            <Button
              className="uploadBtn"
              value="상품 올리기"
              width="100%"
              height="50px"
              onClick={uploadBtn}
            ></Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default inject("storeMain")(observer(EnrollPage));
