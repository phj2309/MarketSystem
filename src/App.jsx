import React, { PureComponent }from "react";
import { BrowserRouter, Route} from "react-router-dom";
import { observer, inject } from "mobx-react";

import MainPage from "./Pages/Main";
import LoginPage from "./Pages/Login";
import RegisterPage from "./Pages/Register";
import PwFindPage from "./Pages/PwFind";
import InfoChangePage from "./Pages/InfoChange";
import EnrollPage from "./Pages/Enroll";
import EnrollDetailPage from "./Pages/EnrollDetail";

import * as Util from "@util";

import "./index.scss";

const App = (props) => {
    console.log(props);

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
            </BrowserRouter>
        </React.Fragment>
    );
};

export default inject("storeMain")(observer(App));