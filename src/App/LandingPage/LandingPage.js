import React from "react";
import Header from "./Header/Header";
import HeroMobile from "../../../assets/mobile/image-hero.jpg";
import HeroDesktop from "../../../assets/desktop/image-hero.jpg";
import "./LandingPage.scss";

export default function LandingPage () {
    return (
        <section className="landing-page">
            <img className="hero" src={HeroMobile} alt="hero mobile" />
            <img className="hero-desktop" src={HeroDesktop} alt="hero desktop" />
            <div className="overlay" />
            <Header />
            <p className="landing-page__para">
                IMMERSIVE EXPERIENCES THAT DELIVER
            </p>
        </section>
    );
}
