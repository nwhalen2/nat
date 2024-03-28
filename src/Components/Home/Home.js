import Nav from "../Nav/Nav.js";
import "./Home.css";
import "../../App.css";
import me from "./nat-orange.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import spiels from "./Home.json";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home-body" >
            <Nav />
            <div className="home">
                <h1>NATALIE WHALEN</h1>
                <div className="home-links">
                    <span>
                        <a className="social-links" href="https://www.linkedin.com/in/natalie-whalen-7574b0166/"  target="_blank" rel="noreferrer">
                            <FontAwesomeIcon className="social-link" icon={['fab', 'linkedin']} size="2l"/> 
                        </a>
                    </span>
                    <span>
                        <a className="social-links" href="https://github.com/nwhalen2" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon className="social-link" icon={['fab', 'github']} /> 
                        </a>
                    </span>
                </div>
                <div className="home-box">
                    <div className="spiel" >
                        <b>University of Notre Dame:</b>{spiels["spiel1"]}
                        <Link className="resume-redirect" to="/cs">Check out my resume </Link>for details.
                        {spiels["spiel1.5"]}<Link className="projects-redirect" to="/projects">projects</Link>{spiels["spiel1.75"]}
                    </div>
                    <br/>
                    <div className="spiel" >
                        <b>Work:</b>{spiels["spiel2"]}<a href="https://www.truefirestudios.com/" clasName="spiel-link">TrueFire Studios</a>
                        {spiels["spiel2.5"]}
                        {spiels["spiel3"]}<a href="https://www.remotasks.com/" className="spiel-link">Remotasks</a>{spiels["spiel3.5"]}
                        {spiels["spiel4"]}
                    </div>
                    <br/>
                    <div className="spiel" >
                        <b>Volunteer:</b>{spiels["spiel5"]}
                        <a href="https://www.buildingpeacefulbridges.org/" className="spiel-link">Building Peaceful Bridges</a>
                        {spiels["spiel6"]}
                        {spiels["spiel7"]}<a href="https://chirpradio.org/" className="spiel-link">Chirp</a>
                        {spiels["spiel8"]}
                    </div>
                    <br/>
                    <div className="spiel" >
                        <b>Fun:</b>
                        {spiels["spiel9"]}
                        <Link className="music-redirect" to="/music">playing guitar</Link>
                        {spiels["spiel10"]}
                    </div>
                    <br/>
                    <img className="photo-of-me" src={me} alt="me" />
                    <br/>
                    <br/>
                    <div className="center">Feel free to browse through my current tabs and learn a bit about me!
                        <br/>
                        <b>last updated: 28 March 2024</b>
                    </div>
                </div>
                <h2 className="whale">&#128011;</h2>
            </div>
        </div>
    )
}

export default Home;