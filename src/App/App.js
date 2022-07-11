import React from "react";
import LandingPage from "./LandingPage/LandingPage";
import Creators from "./Creators/Creators";
import OurCreations from "./OurCreations/OurCreations";
import Footer from "./Footer/Footer";
import "./App.scss";

export default function App () {
    return (
        <div className="container">
            <LandingPage />
            <Creators />
            <OurCreations />
            <Footer />
        </div>
    );
}
