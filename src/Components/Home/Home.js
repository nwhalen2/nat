import Nav from "../Nav/Nav.js";
import "./Home.css";
import "../../App.css";
import me from "./nat-orange.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faLinkedin } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    let spiel1 = "I graduated from the University of Notre Dame in May with a B.S. in Computer Science " 
    + "and soon after had my job offer rescinded from my post-grad company during a large layoff. "
    + "So I spent my summer road-tripping and camping across the US, traveling to different countries on a budget using Hopper for cheap flights, and playing around with this website. ";
    let spiel2 = "In the past month, I have fully re-invested myself into Software Engineering. "
    + "Whether at home, the library, or my dad's office, I clock into my own personal 9-5 everyday by 1. strengthening my skills by "
    + "practicing LeetCode, learning SQL, and freshening up on Web Development tools "
    + "and 2. building my network via conferences, personal connections, and LinkedIn. ";
    let spiel3 = "I am actively seeking full-time roles in Full-Stack Development / Engineering entry level positions.";
    return (
        <div className="home-body" >
            <Nav />
            <div className="home">
                <h2>NATALIE WHALEN</h2>
                <div>
                    <span className="thirds">
                        <a className="other-links" href="https://www.linkedin.com/in/natalie-whalen-7574b0166/"  target="_blank" rel="noreferrer">
                            <FontAwesomeIcon className="other-link" icon={['fab', 'linkedin']} size="2l"/> 
                        </a>
                    </span>
                    <btn className="thirds">
                        <a className="other-links" href="https://github.com/nwhalen2" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon className="other-link" icon={['fab', 'github']} /> 
                        </a>
                    </btn>
                </div>
                <div className="home-box">
                    <div className="spiel" >
                        <b>Where I've been: </b>{spiel1}
                    </div>
                    <div className="spiel" >
                        <b>Where I am: </b>{spiel2}
                    </div>
                    <div className="spiel" >
                        <b>Where I'm headed: </b>{spiel3}
                    </div>
                    <br/>
                    <img src={me} alt="none" style={{width:"40%"}}/>
                    <br/>
                    <br/>
                    <span className="description">Feel free to browse through my current tabs and learn a bit about me!
                    <br/>
                    </span>
                    <br/>
                    <b>last updated: 27 September 2023</b>
                </div>
                <h2>&#128011;</h2>
            </div>
        </div>
    )
}

export default Home;