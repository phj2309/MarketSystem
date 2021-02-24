import React, { useEffect, useState, useRef, memo } from "react"; 
import { observer, inject } from "mobx-react";

import Input from "@components/Input"; 
import Button from "@components/Button"; 
import "./style.scss"; 
import MainLayout from "../../Templates/MainLayout";

import * as Util from "@util";
 
const PwFind = (props) => { 

    const { storeMain } = props;
    const [id, setId] = useState("");
    const [email, setEmail] = useState("");

    const handleIdChange = (e) => {
        setId(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const findBtn = (e) => {
        Util.requestServer("user/findpw", "POST", {
            id: id,
            email: email,
        }).then(async function (result) {
            if (result.code == 200) {
               
                alert(result.body);
                
                props.history.push("/login");
            } else {
                alert(result.body);
            }
        });
    };
 
    return ( 
        <MainLayout>
            <div className="PwFindPage"> 
                <div className="PwFind"> 
                    <p className="title">비밀번호 찾기</p> 
                    <div className="inputs"> 
                        <Input 
                            type="text" 
                            placeholder="아이디"
                            margin="0px 0px 10px 0px" 
                            width="100%"
                            value={id}
                            onChange={handleIdChange}
                        ></Input> 
 
                        <Input 
                            type="email" 
                            placeholder="이메일" 
                            margin="0px 0px 10px 0px" 
                            width="100%"
                            value={email}
                            onChange={handleEmailChange}
                        ></Input> 
                    </div> 
                    <div className="boxBottom"> 
                        <Button value="SEND E-MAIL" height="50px" onClick={findBtn}></Button> 
                    </div> 
                </div> 
            </div> 
        </MainLayout>
    ); 
}; 
 
export default inject("storeMain")(memo(PwFind)); 
