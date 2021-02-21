import React from "react";

import "./style.scss";

const Radio = (props) => {
    let clsName = "Radio";
    let colorClsName = "color-default";

    if (props.color) colorClsName = "color-" + props.color;

    clsName += colorClsName;

    // state = {
    //     checked: false
    //   };

    const checkOnClick = (event) => {
        props.onClick(event);

        // const { target: { checked } } = event;
        // this.setState({ checked });
    };

    return (
        <input
            type="radio"
            className={clsName}
            name={props.name}
            value={props.value}
            style={{
                width: props.width ? props.width : "auto",
                height: props.height ? props.height : "auto",
                margin: props.margin ? props.margin : "5px",
            }}
            disabled={props.disabled ? props.disabled : false}
            
            onClick={checkOnClick}
        ></input>
    );
};

export default Radio;
