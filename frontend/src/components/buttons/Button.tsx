import React from 'react';
import "./Button.css";

interface iButton {
    onClick? ():any;
    width?: string;
    height?: string;
    bcolor? : string;
    color? : string;
    text?: string;
    navbar?: boolean;
    toolbar?: boolean;
    menu?: boolean;
    children?: string;
}

function Button(props:iButton) {
    const style = {
        width: props.width != null ?  props.width : "",
        height: props.height != null ?  props.height : "",
        backgroundColor: props.bcolor != null ? props.bcolor : "",
        color: props.color != null ?  props.color : "",
    }
    
    return (
        <div className="global-button" style={style} onClick={props.onClick}>
            {props.children}
        </div>
    )
};

export default Button;
