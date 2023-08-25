import "./Comedy.css";
import "../../App.css";
import Nav from "../Nav/Nav.js";
import dog3selfie from "../../images/DOG3_selfie.jpeg";
import dog3work from "../../images/DOG3_work.jpeg";

const Comedy = () => {
    return (
        <div className="comedyBody">
            <Nav />
            <div className="comedy">
                <h2>COMEDY</h2>
                <div className="description-box">
                    <span className="description"> here i will upload jokes & videos of me telling jokes at stand-up comedy performances</span>
                </div>
                <h2>PROJECTS</h2>
                <div className="description-box">
                    <span className="description">Arduino Droid - <b>DOG3</b></span>
                    <br/>
                    <div className="dog3photos">
                        <img src={dog3selfie} alt="Selfie with DOG3"></img>
                        <img src={dog3work} alt="Working on DOG3"></img>
                    </div>
                    <span className="description">DOG3 had three moods: happy, sad, & angry</span>
                    <br/>
                </div>
            </div>
        </div>
    )
}

export default Comedy;