import Nav from "../Nav/Nav.js";
import "./Home.css";
import "../../App.css";
import me from "./nat-orange.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import spiels from "./Home.json";

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
                        <b>Where I've been:</b>{spiels["spiel1"]}
                    </div>
                    <div className="spiel" >
                        <b>Where I am:</b>{spiels["spiel2"]}
                        <ul className="currList">
                            <li>{spiels["spiel_list_1"]}</li>
                            <li>{spiels["spiel_list_2"]}</li>
                            <li>{spiels["spiel_list_3"]}</li>
                        </ul>
                    </div>
                    <div className="spiel" >
                        <b>Where I'm headed:</b>{spiels["spiel3"]}
                    </div>
                    <br/>
                    <img className="photo-of-me" src={me} alt="me" />
                    <br/>
                    <br/>
                    <div className="description">Feel free to browse through my current tabs and learn a bit about me!
                        <br/>
                        <b>last updated: 6 November 2023</b>
                    </div>
                </div>
                <h2 className="whale">&#128011;</h2>
            </div>
        </div>
    )
}

export default Home;