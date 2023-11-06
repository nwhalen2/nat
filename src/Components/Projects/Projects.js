import "./Projects.css";
import "../../App.css";
import Nav from "../Nav/Nav.js";
import dog3selfie from "../../images/DOG3_selfie.jpeg";
import dog3work from "../../images/DOG3_work.jpeg";
//import flying from "../../media/projects/flying.mp4";
//import maya from "../../media/projects/Final_Portfolio.mp4";
//import hungerGames from "../../media/projects/HUNGER_STEREO-MIX.mp4";
import descriptions from "./Projects.json";

const Comedy = () => {
    return (
        <div className="comedyBody">
            <Nav />
            <div className="comedy">
                <h1>TECHNICAL & CREATIVE ACCOMPLISHMENTS</h1>
                <h2>EMBEDDED SYSTEMS</h2>
                <div className="description-box comedy-box">
                    <div className="description">Arduino Droid - <b>DOG3</b></div>
                    <div className="dog3photos">
                        <img src={dog3selfie} alt="Selfie with DOG3"></img>
                        <img src={dog3work} alt="Working on DOG3"></img>
                    </div>
                    <div className="description">
                        <div>
                            My friend <a href="https://www.linkedin.com/in/hanjing-sylvia-zhu/" target="_blank" rel="noopener noreferrer">Hanjing Zhu</a>{descriptions["droid-description-1"]}
                        </div>
                        <ul className="droid-list">
                            <li><b>MOTOR & WHEELS: </b>{descriptions["droid-description-list-1"]}</li>
                            <li><b>SPEAKER: </b>{descriptions["droid-description-list-2"]}</li>
                            <li><b>SENSORS: </b>{descriptions["droid-description-list-3"]}</li>
                            <li><b>SERVO: </b>{descriptions["droid-description-list-4"]}</li>
                            <li><b>LEDs: </b>{descriptions["droid-description-list-5"]}</li>
                        </ul>
                        <div>
                            {descriptions["droid-description-2"]}
                        </div>
                    </div>
                </div>
                <h2>VISUAL EFFECTS</h2>
                <div className="description-box comedy-box">
                    <div className="description">Green Screen - <b>DREAMING</b></div>
                </div>
                <div className="description-box comedy-box">
                    <div className="description">Maya Compilation - <b>PORTFOLIO</b></div>
                </div>
                <h2>AUDIO DESIGN</h2>
                <div className="description-box comedy-box">
                    <div className="description">Scene Strip & Overlay - <b>HUNGER GAMES</b></div>
                </div>
                <h2>&#128011;</h2>
            </div>
        </div>
    )
}

export default Comedy;