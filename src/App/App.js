import React from "react";
import LandingPage from "./LandingPage/LandingPage";
import Creators from "./Creators/Creators";
import "./App.scss";

export default function App () {
    return (
        <div className="container">
            <LandingPage />
            <Creators />
        </div>
    );
}
