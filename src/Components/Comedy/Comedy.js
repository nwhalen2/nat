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
                <h3>-- UNDER CONSTRUCTION --</h3>
                <div className="description-box">
                    <span className="description"> here i will upload cool projects</span>
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
                <h2>&#128011;</h2>
            </div>
        </div>
    )
}

export default Comedy;