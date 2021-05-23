import React, { useEffect, useState, useRef, memo } from "react";
import { observer, inject } from "mobx-react";

import MainLayout from "@templates/MainLayout";
import StarIcon from "@asset/mark.svg";
import WarningIcon from "@asset/warning.svg";

import "./style.scss";

import * as Util from "@util";

const DeclarationList = (props) => {
  const { storeMain, storeItem, match, history } = props;

  const [reportList, setReportList] = useState([]);

  useEffect(() => {
    Util.requestServer("report/list", "GET", {
      userId: storeMain.id,
    }).then(async function (result) {
      if (result.code === 200) {
        setReportList(result.body.reportList);
        console.log(result);
      }
    });
  }, []);

  return (
    <MainLayout>
      <p className="title">신고내역</p>
      <div className="MyPage">
        <div className="Declaration">
          <div className="Top">
            <img className="WarningIcon" src={WarningIcon} alt=""></img>
            <div className="avg">
              <div className="text">
                <p className="name">{storeMain.name}</p>
                <p>님의 신고내역</p>
              </div>
            </div>
          </div>
          <div className="Middle">
            {reportList.map((item, idx) => (
              <div className="list" key={idx}>
                <div className="rate">
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default inject("storeMain", "storeItem")(observer(DeclarationList));
