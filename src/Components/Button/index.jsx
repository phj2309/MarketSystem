import React from "react";

import "./style.scss";

/*
    * value
    width - %, px,
    height - %, px
    color - zzz
*/

const Button = (props) => {
    let clsName = "Button ";
    let colorClsName = "color-default";

    if (props.color) colorClsName = "color-" + props.color;

    clsName += colorClsName;

    const buttonOnClick = (event) => {
        props.onClick(event);
    };

    return (
        <input
            type="button"
            className={clsName}
            value={props.value}
            style={{
                width: props.width ? props.width : "100%",
                height: props.height ? props.height : "100%",
                margin: props.margin ? props.margin : "0",
                borderRadius: props.borderRadius ? props.borderRadius : "15px",
            }}
            disabled={props.disabled ? props.disabled : false}
            onClick={buttonOnClick}
        ></input>
    );
};

export default Button;
