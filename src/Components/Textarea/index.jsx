import React, { useEffect, useState, memo } from "react";

import "./style.scss";

const Textarea = (props) => {
    const handleChange = (e) => {
        props.onChange(e);
    };

    const handleKeyUp = (e) => {
        props.onKeyUp(e);
    };

    const handleKeyDown = (e) => {
        props.onKeyDown(e);
    };

    let clsName = "textarea ";
    let styleClsName = " style-";
    let colorClsName = " color-";

    if (props.color) colorClsName += props.color;
    else colorClsName += "default";

    if (props.style) styleClsName += props.style;
    else styleClsName += "default";

    clsName += colorClsName;
    clsName += styleClsName;

    return (
        <textarea
            className={clsName}
            placeholder={props.placeholder}
            name={
                props.name === null || props.name === undefined
                    ? ""
                    : props.name
            }
            value={
                props.value === null || props.value === undefined
                    ? ""
                    : props.value
            }
            onChange={handleChange}
            onKeyUp={props.onKeyUp ? handleKeyUp : null}
            onKeyDown={props.onKeyDown ? handleKeyDown : null}
            style={{
                width: props.width ? props.width : "100%",
                height: props.height ? props.height : "100%",
                minHeight: props.minHeight ? props.minHeight : "35px",
                margin: props.margin ? props.margin : "0",
                padding: props.padding ? props.padding : "0",
            }}
            disabled={props.disabled ? true : false}
        ></textarea>
    );
};

export default Textarea;
