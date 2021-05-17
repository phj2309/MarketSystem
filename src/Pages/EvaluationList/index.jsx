import React, { useEffect, useState, useRef, memo } from "react";
import { observer, inject } from "mobx-react";

import MainLayout from "@templates/MainLayout";
import StarIcon from "@asset/star.svg";
import GoldStarIcon from "@asset/goldStar.svg";

import "./style.scss";

import * as Util from "@util";

const EvaluationList = (props) => {
    const { storeMain, storeItem, match, history } = props;

    const [evalList, setEvalList] = useState([]);
    const [average, setAverage] = useState('');

    useEffect(() => {
        Util.requestServer("eval/list", "GET", {
            userIdx: storeMain.mypageInfoIdx
          }).then(async function (result) {
            if(result.code === 200) {
              console.log(result);
              setAverage(result.body.average);
              setEvalList(result.body.evalList);
            }
          });
      
    }, []);


    return (
        <MainLayout>
            <p className="title">평가내역</p>
            <div className="MyPage">
                <div className="Evaluation">
                    <div className="Top">
                        <img className="goldStarIcon" src={GoldStarIcon} alt=""></img>
                        <div className="avg">
                            <div className="text">
                                <p className="name">{storeMain.mypageInfoName}</p>
                                <p>님의 총 평점</p>
                            </div>
                            <p>{average} / 5</p>
                        </div>
                    </div>
                    <div className="Middle">
                        {evalList.map((item, idx) => (
                            <div className="list" key={idx}>
                                <img className="starIcon" src={StarIcon} alt=""></img>
                                <div className="rate">
                                    <p>{item.rating} / 5</p>
                                    <p>{item.review}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default inject("storeMain", "storeItem")(observer(EvaluationList));