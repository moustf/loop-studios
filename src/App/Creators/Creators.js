import React from "react";
import InteractiveMobile from "../../../assets/mobile/image-interactive.jpg";
import InteractiveDesktop from "../../../assets/desktop/image-interactive.jpg";
import "./Creators.scss";

export default function Creators () {
    return (
        <section className="creators">
            <img
                className="creators__int-mobile"
                src={InteractiveMobile}
                alt="interactive mobile"
            />
            <img
                className="creators__int-desktop"
                src={InteractiveDesktop}
                alt="interactive desktop"
            />
            <div className="creators__text">
                <h1 className="creators__text__heading">
                    THE LEADER IN INTERACTIVE VR
                </h1>
                <p className="creators__text__para">
                    Founded in 20II, Loopstudios has been producing world-class
                    virtual reality projects for some of teh best companies
                    around the globe. Our award-winning creations have
                    transformed business through digital experience that bind to
                    their brand.
                </p>
            </div>
        </section>
    );
}
