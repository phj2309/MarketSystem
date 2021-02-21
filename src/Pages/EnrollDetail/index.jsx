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
        console.log('adfadf');
    };

    const chatBtn = (e) => {

    };

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

                        <p className="Title">
                            자료구조 책 팝니다~
                        </p>
                    </div>

                    <div className="Contents">

                        <div className="img">

                        </div>


                        <Textarea
                            padding="5px 0px 0px 5px"
                            value={content}
                            height="200px"
                            placeholder="제품 설명"
                            margin="0px 0px 10px 0px"
                            disabled
                        >

                        </Textarea>

                        <div className="wrap">
                            <p className="item_title">반납 날짜</p>

                            <div className="rental">
                                <Input
                                    type="date"
                                    className="date"
                                    value={date}
                                    placeholder="반납 날짜"
                                    height="small"
                                    margin="0px 0px 10px 0px"
                                    width="60%"
                                ></Input>
                            </div>
                        </div>
                    </div>

                    <div className="Bottom">

                    <Button value="판매자 정보 보기" height="50px" width="45%" margin="0 10px" onclick={infoBtn}></Button>
                        
                        <Button value="채팅으로 거래하기" height="50px" width="45%" float="right" onclick={chatBtn}
                        ></Button>

                    </div>

                </div>
            </div>
        </MainLayout>


    );
};

export default inject("storeMain")(observer(EnrollDetailPage));
