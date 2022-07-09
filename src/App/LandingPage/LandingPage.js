import React from "react";
import Header from "./Header/Header";
import "./LandingPage.scss";

export default function LandingPage () {
    return (
        <section className="landing-page">
            <Header />
            <p calssName="landing-page__para">
                IMMERSIVE EXPERIENCES THAT DELIVER
            </p>
        </section>
    );
}
