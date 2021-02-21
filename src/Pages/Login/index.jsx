import React, { useEffect, useState, useRef, memo}  from "react";
import { observer, inject } from "mobx-react";
import { Link } from "react-router-dom";


import MainLayout from "@templates/MainLayout";
import Button from "@components/Button";
import Input from "@components/Input";

import "./style.scss";

import Logo from "@asset/bamboo.svg";

const LoginPage = (props) => {

    const { storeMain } = props;
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const handleIdChange = (e) => {
        setId(e.target.value);
    };

    const handlePwChange = (e) => {
        setPw(e.target.value);
    };

    const loginBtn = (e) => {
        // Util.requestServer("auth/login", "POST", {
        //     id: id,
        //     pw: pw,
        // }).then(async function (result) {
        //     if (result.code == 200) {
        //         sessionStorage["token"] = result.body.token;

        //         let resp = await Util.requestServer("auth/info", "get", {});
        //         storeMain.login(
        //             resp.body.info.id,
        //             resp.body.info.name,
        //             resp.body.info.userType
        //         );
        //         alert(result.body.msg);

        //         props.history.push("/");
        //     } else {
        //         alert(result.body.msg);
        //     }
        // });
    };

    return (
        <MainLayout>
            <div className="LoginPage">
                <div className="Login">
                        <p className="Title"> 
                            <img className="lectureIcon" src={Logo} alt=""></img>
                            대나무마켓 
                        </p>

                    <div className="InfoInput">
                        <div className="wrap">
                            <Input
                                type="text"
                                className="Id"
                                placeholder="아이디를 입력하세요."
                                margin="0px 0px 10px 0px"
                                value={id}
                                onChange={handleIdChange}
                            />
                            <Input
                                type="password"
                                className="Password"
                                placeholder="비밀번호를 입력하세요."
                                margin="0px 0px 10px 0px"
                                value={pw}
                                onChange={handlePwChange}
                            />
                        </div>
                    </div>

                    <div className="Bottom">

                        <Button
                            value="SIGN IN"
                            height="50px"
                            onClick={loginBtn}
                        ></Button>

                        <div className="regDirect">
                            <Link to="/register">회원가입</Link>
                        </div>

                         <div className="findDirect">
                            <Link to="/pwFind">비밀번호 찾기</Link>
                        </div>

                    </div>

                </div>
            </div>
            </MainLayout>
    );
};

export default inject("storeMain")(memo(LoginPage));
