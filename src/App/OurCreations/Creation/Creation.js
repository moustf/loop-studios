/* eslint-disable react/prop-types */
import React from "react";
import "./Creation.scss";

export default function Creation (props) {
    return (
        <div className="creation-box">
            <img
                className="image-mobile"
                src={props.imgMob}
                alt="mobile image"
            />
            <img
                className="image-desktop"
                src={props.imgDesk}
                alt="mobile desktop"
            />
            <div className="creation-box__overlay" />
            <p className="text">{props.text}</p>
        </div>
    );
}
