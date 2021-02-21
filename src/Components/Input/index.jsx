import React from "react";

import "./style.scss";

const Input = (props) => {
    let clsName = "form-control";
    let style = {
        width: "100%",
    };

    if (props.height) {
        clsName += " height_" + props.height;
    } else clsName += " height_default";

    if (props.design) {
        clsName += " style_" + props.design;
    }

    if (props.width) {
        style.width = props.width;
    }

    if (props.margin) {
        style.margin = props.margin;
    }

    if (props.padding) {
        style.padding = props.padding;
    }

    return (
        <input
            ref={props.ref ? props.ref : null}
            type={props.type}
            className={clsName}
            placeholder={props.placeholder}
            style={style}
            disabled={props.disabled ? props.disabled : false}
            value={
                props.value === null || props.value === undefined
                    ? ""
                    : props.value
            }
            min={props.min}
            onChange={props.onChange}
            onKeyDown={props.onKeyDown}
            onClick={props.onClick ? props.onClick : null}
            onBlur={props.onBlur ? props.onBlur : null}
        ></input>
    );
};

export default Input;
