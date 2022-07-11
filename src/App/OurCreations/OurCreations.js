import React from "react";
import Creation from "./Creation/Creation";
import CuriosityMobile from "../../../assets/mobile/image-curiosity.jpg";
import CuriosityDesktop from "../../../assets/desktop/image-curiosity.jpg";
import EarthMobile from "../../../assets/mobile/image-deep-earth.jpg";
import EarthDesktop from "../../../assets/desktop/image-deep-earth.jpg";
import FishEyeMobile from "../../../assets/mobile/image-fisheye.jpg";
import FishEyeDesktop from "../../../assets/desktop/image-fisheye.jpg";
import AboveMobile from "../../../assets/mobile/image-from-above.jpg";
import AboveDesktop from "../../../assets/desktop/image-from-above.jpg";
import GridMobile from "../../../assets/mobile/image-grid.jpg";
import GridDesktop from "../../../assets/desktop/image-grid.jpg";
import ArcadeMobile from "../../../assets/mobile/image-night-arcade.jpg";
import ArcadeDesktop from "../../../assets/desktop/image-night-arcade.jpg";
import PocketMobile from "../../../assets/mobile/image-pocket-borealis.jpg";
import PocketDesktop from "../../../assets/desktop/image-pocket-borealis.jpg";
import SoccerMobile from "../../../assets/mobile/image-soccer-team.jpg";
import SoccerDesktop from "../../../assets/desktop/image-soccer-team.jpg";
import "./OurCreations.scss";

export default function OurCreations () {
    return (
        <section className="our-creations">
            <header className="our-creations__header">
                <p className="text">OUR CREATIONS</p>
                <button type="button">SEE ALL</button>
            </header>
            <div className="creations">
                <Creation imgMob={EarthMobile} imgDesk={EarthDesktop} text="DEEP EARTH" />
                <Creation imgMob={ArcadeMobile} imgDesk={ArcadeDesktop} text="NIGHT ARCADE" />
                <Creation imgMob={SoccerMobile} imgDesk={SoccerDesktop} text="SOCCER TEAM VR" />
                <Creation imgMob={GridMobile} imgDesk={GridDesktop} text="THE GRID" />
                <Creation imgMob={AboveMobile} imgDesk={AboveDesktop} text="FROM UP ABOVE VR" />
                <Creation imgMob={PocketMobile} imgDesk={PocketDesktop} text="POCKET BOREALIS" />
                <Creation imgMob={CuriosityMobile} imgDesk={CuriosityDesktop} text="THE CURIOSITY" />
                <Creation imgMob={FishEyeMobile} imgDesk={FishEyeDesktop} text="MAKE IT FISH EYE" />
            </div>
            <button type="button" className="see-all">SEE ALL</button>
        </section>
    );
}
