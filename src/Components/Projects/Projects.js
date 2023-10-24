import "./Projects.css";
import "../../App.css";
import Nav from "../Nav/Nav.js";
import dog3selfie from "../../media/projects/DOG3_selfie.jpeg";
import dog3work from "../../media/projects/DOG3_work.jpeg";
import flying from "../../media/projects/flying.mp4";
import maya from "../../media/projects/Final_Portfolio.mp4";
import dogs from "../../media/projects/dogs.mp4";
import spaceship from "../../media/projects/spaceship.mp4";
import hungerGames from "../../media/projects/HUNGER_STEREO-MIX.mp4";
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
                    <video controls="controls" className="project-video">
                        <source src={flying} type="video/mp4"></source>
                    </video>
                    <div>
                        Using a green screen and <b>DaVinci Resolve, </b>
                        {descriptions['gs-description-1']}
                    </div>
                </div>
                <div className="description-box comedy-box">
                    <div className="description">Modeling & Animation - <b>PORTFOLIO</b></div>
                    <video controls="controls" className="project-video">
                        <source src={maya} type="video/mp4"></source>
                    </video>
                    <div>
                        Using <b>Autodesk Maya</b> and <b>Houdini</b>, 
                        {descriptions["vfx-description-1"]}
                        <b>{descriptions["vfx-description-2"]}</b>
                        {descriptions["vfx-description-3"]}
                        <b>DaVinci Resolve </b>
                        {descriptions["vfx-description-4"]}
                    </div>
                    <video controls="controls" className="project-video">
                        <source src={dogs} type="video/mp4"></source>
                    </video>
                    <video controls="controls" className="project-video">
                        <source src={spaceship} type="video/mp4"></source>
                    </video>
                </div>
                <h2>AUDIO DESIGN</h2>
                <div className="description-box comedy-box">
                    <div className="description">Scene Strip & Overlay - <b>HUNGER GAMES</b></div>
                    <video controls="controls" className="project-video">
                        <source src={hungerGames} type="video/mp4"></source>
                    </video>
                    <div className="description">
                        <div>
                            {descriptions["audio-description-1"]}
                            <b>{descriptions["audio-description-2"]}</b>
                            {descriptions["audio-description-3"]}
                        </div>
                        <ul className="droid-list">
                            <li><b>{descriptions["audio-list-title-1"]}: </b>{descriptions["audio-list-1"]}</li>
                            <li><b>{descriptions["audio-list-title-2"]}: </b>{descriptions["audio-list-2"]}</li>
                            <li><b>{descriptions["audio-list-title-3"]}: </b>{descriptions["audio-list-3"]}</li>
                            <li><b>{descriptions["audio-list-title-4"]}: </b>{descriptions["audio-list-4"]}</li>
                            <li><b>{descriptions["audio-list-title-5"]}: </b>{descriptions["audio-list-5"]}</li>
                        </ul>
                        <div>
                            {descriptions["audio-description-4"]}
                        </div>
                    </div>
                </div>
                <h2>&#128011;</h2>
            </div>
        </div>
    )
}

export default Comedy;