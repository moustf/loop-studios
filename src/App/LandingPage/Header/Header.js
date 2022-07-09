import React from "react";
import Logo from "../../../../assets/logo.svg";
import Close from "../../../../assets/icon-close.svg";
import { FaBars } from "react-icons/fa";
import SVG from "react-inlinesvg";
import "./Header.scss";

export default function Header () {
    return (
        <header className="header">
            <SVG className="header__logo" src={Logo} alt="logo" />
            <FaBars className="header__bars" />
            <div className="header__nav-mobile">
                <div className="images">
                    <SVG
                        className="header__nav-mobile__logo"
                        src={Logo}
                        alt="logo"
                    />
                    <SVG
                        className="header__nav-mobile__close"
                        src={Close}
                        alt="close"
                    />
                </div>
                <div className="tags">
                    <a className="about" href="#about">
                        ABOUT
                    </a>
                    <a className="careers" href="#careers">
                        CAREERS
                    </a>
                    <a className="events" href="#events">
                        EVENTS
                    </a>
                    <a className="products" href="#products">
                        PRODUCTS
                    </a>
                    <a className="support" href="#support">
                        SUPPORT
                    </a>
                </div>
                <div className="header__nav-desktop">
                    <a className="about" href="#about">
                        ABOUT
                    </a>
                    <a className="careers" href="#careers">
                        CAREERS
                    </a>
                    <a className="events" href="#events">
                        EVENTS
                    </a>
                    <a className="products" href="#products">
                        PRODUCTS
                    </a>
                    <a className="support" href="#support">
                        SUPPORT
                    </a>
                </div>
            </div>
        </header>
    );
}
