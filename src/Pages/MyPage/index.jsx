import React, { useEffect, useState, useRef, memo } from "react";
import { observer, inject } from "mobx-react";

import MainLayout from "@templates/MainLayout";
import StarIcon from "@asset/star.svg";

import "./style.scss";

import * as Util from "@util";

const MyPage = (props) => {
    const { storeMain, storeItem, match, history } = props;

    const [evalList, setEvalList] = useState([]);
    const [saleList, setSaleList] = useState([]);
    const [purchaseList, setPurchaseList] = useState([]);
    const [itemUserIdx, setItemUserIdx] = useState("");
    const [name, setName] = useState(null);
    const [id, setId] = useState(null);

    useEffect(() => {
        Util.requestServer("mypage", "GET", {
            userIdx: storeMain.mypageInfoIdx
          }).then(async function (result) {
            if(result.code === 200) {
              console.log(result);
              setName(result.body.userDto.name);
              setEvalList(result.body.evalList);
              setSaleList(result.body.saleList);
              setPurchaseList(result.body.purchaseList);
            }
          });
      
    }, []);

    //   const evalList = [
    //     {
    //       rating: 4,
    //       review: "친절했다",
    //     },
    //     {
    //       rating: 3,
    //       review: "약속 시간에 늦게나옴",
    //     }
    //   ];

    const handleItem = (item) => {
        storeItem.setSelectItem(item);
    
        props.history.replace(
          "/enrollDetail"
        )
      };

      const evalMoreBtn = (item) => {
        props.history.replace(
          "/evalList"
        )
      };
      const saleMoreBtn = (item) => {
        props.history.replace(
          "/saleList"
        )
      };
      const purchaseMoreBtn = (item) => {   
        props.history.replace(
          "/purchaseList"
        )
      };

      let purchase = null;
    if(storeMain.userIdx === storeMain.mypageInfoIdx) {
        purchase = (
          <div className="Purchase">
              <div className="Top">
                  <p className="title">구매내역</p>
                  <input type="button"
                      className="more"
                      value="더보기"
                      onClick={purchaseMoreBtn}
                  ></input>
              </div>
              <div className="Middle">
              {purchaseList.map((item, idx) => (
                      <img className="image"
                        key={idx}
                        src={"data:image/png;base64,"+item.image}
                        alt=""
                        onClick={(e) => handleItem(item)}></img>
                  ))}
              </div>
          </div>
        );
    }

    return (
        <MainLayout>
            <p className="title">{name}님의 마이페이지</p>
            <div className="MyPage">
                <div className="Evaluation">
                    <div className="Top">
                        <p className="title">평가내역</p>
                        <input type="button"
                            className="more"
                            value="더보기"
                            onClick={evalMoreBtn}
                        ></input>
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

                <div className="Sale">
                    <div className="Top">
                        <p className="title">판매내역</p>
                        <input type="button"
                            className="more"
                            value="더보기"
                            onClick={saleMoreBtn}
                        ></input>
                    </div>
                    <div className="Middle">
                    {saleList.map((item, idx) => (
                            <img className="image"
                              key={idx}
                              src={"data:image/png;base64,"+item.image}
                              alt=""
                              onClick={(e) => handleItem(item)}></img>
                        ))}
                    </div>
                </div>

                <div>
                  {purchase}
                </div>
            </div>
        </MainLayout>
    );
}

export default inject("storeMain", "storeItem")(observer(MyPage));