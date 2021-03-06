import React, { PureComponent, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { observer, inject } from "mobx-react";

import MainPage from "./Pages/Main";
import LoginPage from "./Pages/Login";
import RegisterPage from "./Pages/Register";
import PwFindPage from "./Pages/PwFind";
import InfoChangePage from "./Pages/InfoChange";
import EnrollPage from "./Pages/Enroll";
import EnrollDetailPage from "./Pages/EnrollDetail";
import Chat from "./Pages/Chat";
import ChatList from "./Pages/ChatList";
import Evaluation from "./Pages/Evaluation";
import PurchaseList from "./Pages/PurchaseList";
import MyPage from "./Pages/MyPage";
import EvaluationList from "./Pages/EvaluationList";
import SaleList from "./Pages/SaleList";

import Declaration from "./Pages/Declaration";
import DeclarationList from "./Pages/DeclarationList";

import * as Util from "@util";

import "./index.scss";

const App = (props) => {
  console.log(props);
  const { storeMain } = props;

  useEffect(() => {
    if (sessionStorage["token"]) {
      Util.requestServer("user/info", "GET", {
        token: sessionStorage["token"],
      }).then(function (resp) {
        storeMain.login(resp.body.id, resp.body.name, resp.body.userIdx);
      });
    } else {
      if (location.pathname !== "/login") location.href = "/login";
    }
  });

  return (
    <React.Fragment>
      <BrowserRouter>
        <Route exact path="/" component={MainPage} />
        <Route path="/main" component={MainPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/pwfind" component={PwFindPage} />
        <Route path="/infochange" component={InfoChangePage} />
        <Route path="/enroll" component={EnrollPage} />
        <Route path="/enrolldetail" component={EnrollDetailPage} />
        <Route path="/chat" component={Chat} />
        <Route path="/chatlist" component={ChatList} />
        <Route path="/declaration" component={Declaration} />
        <Route path="/evaluation" component={Evaluation} />
        <Route path="/purchaselist" component={PurchaseList} />
        <Route path="/mypage" component={MyPage} />
        <Route path="/evalList" component={EvaluationList} />
        <Route path="/saleList" component={SaleList} />
        <Route path="/declaList" component={DeclarationList} />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default inject("storeMain")(observer(App));
