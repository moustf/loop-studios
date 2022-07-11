import React from "react";
import Logo from "../../../assets/logo.svg";
import Facebook from "../../../assets/icon-facebook.svg";
import Pinterest from "../../../assets/icon-pinterest.svg";
import Instagram from "../../../assets/icon-instagram.svg";
import Twitter from "../../../assets/icon-twitter.svg";
import SVG from "react-inlinesvg";
import "./Footer.scss";

export default function Footer () {
    return (
        <footer className="footer">
            <SVG className="footer__logo" src={Logo} />
            <div className="footer__social">
                <SVG className="facebook" src={Facebook} />
                <SVG className="twitter" src={Twitter} />
                <SVG className="pinterest" src={Pinterest} />
                <SVG className="instagram" src={Instagram} />
            </div>
            <nav className="footer__nav">
                <a href="#about" className="about">
                    About
                </a>
                <a href="#careers" className="careers">
                    Careers
                </a>
                <a href="#events" className="events">
                    Events
                </a>
                <a href="#products" className="products">
                    Products
                </a>
                <a href="#support" className="support">
                    Support
                </a>
            </nav>
            <p className="footer__info">
                {" "}
                © 2022 Loopstudios. All rights reserved.
            </p>
        </footer>
    );
}
