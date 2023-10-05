import "./Comedy.css";
import "../../App.css";
import Nav from "../Nav/Nav.js";
import dog3selfie from "../../media/projects/DOG3_selfie.jpeg";
import dog3work from "../../media/projects/DOG3_work.jpeg";
import flying from "../../media/projects/flying.mp4";
import maya from "../../media/projects/Final_Portfolio.mp4";
import hungerGames from "../../media/projects/HUNGER_STEREO-MIX.mp4";

const Comedy = () => {
    return (
        <div className="comedyBody">
            <Nav />
            <div className="comedy">
                <h1>TECHNICAL & CREATIVE ACCOMPLISHMENTS</h1>
                <div className="description-box comedy-box">
                    <span className="description"> here i will upload cool projects</span>
                </div>
                <h2>EMBEDDED SYSTEMS</h2>
                <div className="description-box comedy-box">
                    <div className="description">Arduino Droid - <b>DOG3</b></div>
                    <div className="dog3photos">
                        <img src={dog3selfie} alt="Selfie with DOG3"></img>
                        <img src={dog3work} alt="Working on DOG3"></img>
                    </div>
                    <div className="description">DOG3 had three moods: happy, sad, & angry</div>
                </div>
                <h2>VISUAL EFFECTS</h2>
                <div className="description-box comedy-box">
                    <div className="description">Green Screen - <b>DREAMING</b></div>
                    <video width="60%" controls="controls">
                        <source src={flying} type="video/mp4"></source>
                    </video>
                </div>
                <div className="description-box comedy-box">
                    <div className="description">Maya Compilation - <b>PORTFOLIO</b></div>
                    <video width="60%" controls="controls">
                        <source src={maya} type="video/mp4"></source>
                    </video>
                </div>
                <h2>AUDIO DESIGN</h2>
                <div className="description-box comedy-box">
                    <div className="description">Scene Strip & Overlay - <b>HUNGER GAMES</b></div>
                    <video width="60%" controls="controls">
                        <source src={hungerGames} type="video/mp4"></source>
                    </video>
                </div>
                <h2>&#128011;</h2>
            </div>
        </div>
    )
}

export default Comedy;