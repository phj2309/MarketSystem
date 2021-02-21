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

    const searchBtn = (e) => {};

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

                        <Button value="검색" width="55px" height="40px" border-radius="15px"
                        onClick={searchBtn}
                        >
                        </Button>

                    </div>

                    <div className="Contents">

                        <div className="ImgContents">
                            <img className="OpenMenuIcon" src={openMenuIcon} alt=""></img>
                        </div>

                        <div className="TextContents">
                            <p className="TitleContents"> 자료구조 팔아유 </p>

                            <p className="DetailContents"> 책 설명 어쩌고 저쩌고 </p>
                        </div>

                    </div>
                    <div className="Contents">

                        <div className="ImgContents">
                            <img className="OpenMenuIcon" src={openMenuIcon} alt=""></img>
                        </div>

                        <div className="TextContents">
                            <p className="TitleContents"> 자료구조 팔아유 </p>

                            <p className="DetailContents"> 책 설명 어쩌고 저쩌고 </p>
                        </div>

                    </div>
                </div>
            </div>

        </MainLayout>

    );
};

export default inject("storeMain")(observer(MainPage));
