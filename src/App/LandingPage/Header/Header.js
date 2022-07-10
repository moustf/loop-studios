import React from "react";
import Logo from "../../../../assets/logo.svg";
import Close from "../../../../assets/icon-close.svg";
import { FaBars } from "react-icons/fa";
import SVG from "react-inlinesvg";
import "./Header.scss";

export default function Header () {
    const [isMenu, setIsMenu] = React.useState(false);
    const handleClick = () => {
        setIsMenu((prevIsMenu) => !prevIsMenu);
    };
    const menuStyle = {
        display: isMenu ? "flex" : "none"
    };
    const handleClose = () => {
        setIsMenu((prevIsMenu) => !prevIsMenu);
    };

    return (
        <header className="header">
            <SVG className="header__logo" src={Logo} alt="logo" />
            <FaBars className="header__bars" onClick={handleClick} />
            <div className="header__nav-mobile" style={menuStyle}>
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
                        onClick={handleClose}
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
            </div>
            <div className="header__nav-desktop">
                <a className="about" href="#about">
                    About
                </a>
                <a className="careers" href="#careers">
                    Careers
                </a>
                <a className="events" href="#events">
                    Events
                </a>
                <a className="products" href="#products">
                    Products
                </a>
                <a className="support" href="#support">
                    Support
                </a>
            </div>
        </header>
    );
}
