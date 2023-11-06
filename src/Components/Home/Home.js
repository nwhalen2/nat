import Nav from "../Nav/Nav.js";
import "./Home.css";
import "../../App.css";
import me from "./nat-orange.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
    let spiel1 = " I graduated from the University of Notre Dame in May with a B.S. in Computer Science " 
    + "and soon after had my job offer rescinded from my post-grad company during a large layoff. "
    + "So I spent my summer road-tripping and camping across the US, traveling to different countries on a budget using Hopper for cheap flights, and playing around with this website. ";
    let spiel2 = " But now I'm back! And fully re-invested into Software Engineering. "
    + "Whether at home, the library, or my dad's office, I spend my days"
    let spiel_list_1 = "Strengthening my programming skills by practicing LeetCode";
    let spiel_list_2 = "Learning new skills like SQL";
    let spiel_list_3 = "Building my network with LinkedIn, through personal connections, and by attending conferences, receptions, and other tech events.";
    let spiel3 = " I am actively seeking full-time roles in Full-Stack Development / Engineering entry level positions.";
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
                        <b>Where I've been:</b>{spiel1}
                    </div>
                    <div className="spiel" >
                        <b>Where I am:</b>{spiel2}
                        <ul className="currList">
                            <li>{spiel_list_1}</li>
                            <li>{spiel_list_2}</li>
                            <li>{spiel_list_3}</li>
                        </ul>
                    </div>
                    <div className="spiel" >
                        <b>Where I'm headed:</b>{spiel3}
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