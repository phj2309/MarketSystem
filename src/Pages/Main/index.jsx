import React, { useEffect, useState, useRef, memo } from "react";
import { observer, inject } from "mobx-react";
import { withRouter, Link } from "react-router-dom";

import MainLayout from "@templates/MainLayout";
import Button from "@components/Button";
import Input from "@components/Input";

import "./style.scss";

import Logo from "@asset/bamboo.svg";
import openMenuIcon from "@asset/open-menu.svg";

const MainPage = (props) => {
  const { storeLecture, storeMain, match, history } = props;
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const searchBtn = (e) => {
    console.log(search);
    //사용자가 입력한 값이 search로 들어옴 -> search 값 넘겨주기
  };

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
      <div className="MainPage">
        <div className="Main">
          <div className="Top">
            <p className="Title">
              <img className="lectureIcon" src={Logo} alt=""></img>
              대나무마켓
            </p>
          </div>

          <div className="Search">
            <Input
              type="text"
              className="search"
              placeholder="검색어를 입력하세요."
              width="70%"
              height="30px"
              margin="0px 10px 10px 0px"
              value={search}
              onChange={handleSearchChange}
            />

            <Button
              value="검색"
              width="55px"
              height="40px"
              border-radius="15px"
              onClick={searchBtn}
            ></Button>
          </div>
          {items.map((item) => (
            <div className="Contents">
              <div className="ImgContents">
                <img className="OpenMenuIcon" src={item.img} alt=""></img>
              </div>

              <div className="TextContents">
                <p className="TitleContents"> {item.title}</p>

                <p className="DetailContents"> {item.contents} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default inject("storeMain")(observer(MainPage));
