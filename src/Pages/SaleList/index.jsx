import React, { useEffect, useState, useRef, memo } from "react";
import { observer, inject } from "mobx-react";

import MainLayout from "@templates/MainLayout";
import TrashIcon from "@asset/trash.svg";
import EditIcon from "@asset/edit.svg";

import "./style.scss";

import * as Util from "@util";

const SaleList = (props) => {
    const { storeMain, storeItem, match, history } = props;

    const [saleList, setSaleList] = useState([]);

    useEffect(() => {
        Util.requestServer("mypage/sale", "GET", {
            userIdx: storeMain.mypageInfoIdx
          }).then(async function (result) {
            if(result.code === 200) {
              console.log(result);
              setSaleList(result.body);
            }
          });
      
    }, []);

    const handleItem = (item) => {
        storeItem.setSelectItem(item);
    
        props.history.replace(
          "/enrollDetail"
        )
      };

    const deleteItem = (item) => {
        console.log("itemIdx: "+item.itemIdx);
        Util.requestServer("item", "DELETE", {
          itemIdx: item.itemIdx
        }).then(async function (result) {
          if(result.code === 200) {
            console.log("삭제되었습니다.");
          }
        });
    };

    const EditItem = (item) => {
      storeItem.setEditItemIdx(item.itemIdx);

      props.history.replace(
        "/enroll"
      )
    };

    let edit = null;
    let sale = null;
    if(storeMain.userIdx === storeMain.mypageInfoIdx) {
        sale = (
          saleList.map((item, idx) => (
            <div className="Contents"
              key = {idx}
            >
              <div className="ImgContents" onClick={(e) => handleItem(item)}>
                <img className="OpenMenuIcon" src={"data:image/png;base64,"+item.image} alt=""></img>
              </div>
          
              <div className="TextContents" onClick={(e) => handleItem(item)}>
                <p className="TitleContents"> {item.title}</p>
                <div className="Bottom">
                  <p className="DetailContents"> {item.charge} </p>
                  <p className="State">{item.state}</p>
                </div>
                
              </div>

              <div className="IconContents">
                <img className="EditIcon" src={EditIcon} alt="" onClick={(e) => EditItem(item)}></img>
                <img className="TrashIcon" src={TrashIcon} alt="" onClick={(e) => deleteItem(item)}></img>
              </div>
            </div>
          ))
        );
        edit = (
            <div className="IconContents">
                <img className="EditIcon" src={EditIcon} alt="" onClick={(e) => EditItem(item)}></img>
                <img className="TrashIcon" src={TrashIcon} alt="" onClick={(e) => deleteItem(item)}></img>
            </div>
        );
    } else {
      sale = (
        saleList.map((item, idx) => (
          <div className="Contents"
            key = {idx}
          >
            <div className="ImgContents" onClick={(e) => handleItem(item)}>
              <img className="OpenMenuIcon" src={"data:image/png;base64,"+item.image} alt=""></img>
            </div>
        
            <div className="TextContents" onClick={(e) => handleItem(item)}>
              <p className="TitleContents"> {item.title}</p>
              <div className="Bottom">
                <p className="DetailContents"> {item.charge} </p>
                <p className="State">{item.state}</p>
              </div>
              
            </div>
          </div>
        ))
      )
    }


    return (
        <MainLayout>
            <p className="title">판매내역</p>
                <div className="Container">
                    {sale}
              </div>
        </MainLayout>
    );
}

export default inject("storeMain", "storeItem")(observer(SaleList));