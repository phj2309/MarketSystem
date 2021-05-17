import React, { useEffect, useState, useRef, memo } from "react";
import { observer, inject } from "mobx-react";

import MainLayout from "@templates/MainLayout";

import "./style.scss";

import * as Util from "@util";

const PurchaseList = (props) => {
    const { storeMain, storeItem, match, history } = props;

    const [list, setList] = useState([]);

    useEffect(() => {
      Util.requestServer("mypage/purchase", "GET", {
        userId: storeMain.id
      }).then(async function (result) {
        if(result.code === 200) {
          console.log(result);
          setList(result.body);
        }
      });
    }, []);

    const handleItem = (item) => {
        storeItem.setSelectItem(item);
    
        props.history.replace(
          "/enrollDetail"
        )
      };

    return (
        <MainLayout>
            <p className="title">구매내역</p>
            <div className="Container">
          {list.map((item, idx) => (
            <div className="Contents"
              key = {idx}
              onClick={(e) => handleItem(item)}
            >
              <div className="ImgContents">
                <img className="OpenMenuIcon" src={"data:image/png;base64,"+item.image} alt=""></img>
              </div>

              <div className="TextContents">
                <p className="TitleContents"> {item.title}</p>

                <p className="DetailContents"> {item.charge} </p>
              </div>
            </div>
          ))}
          </div>
        </MainLayout>
    );
}

export default inject("storeMain", "storeItem")(observer(PurchaseList));