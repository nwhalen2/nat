import "./Projects.css";
import "../../App.css";
import Nav from "../Nav/Nav.js";
import dog3selfie from "../../media/projects/DOG3_selfie.jpeg";
import dog3work from "../../media/projects/DOG3_work.jpeg";
import hungerShot from "../../media/projects/hunger-shot.png";
import descriptions from "./Projects.json";

// <a href="https://github.com/nwhalen2" target="_blank" rel="noreferrer"><u>SmallChicago</u></a>

const Comedy = () => {
    return (
        <div className="projects-body">
            <Nav />
            <div className="projects">
                <div className="projects-box">
                    <div className="projects-description">Current Project - <b>Live Music in Chicago</b></div>
                    <br/>
                    <div className="left projects-description">
                        <b>Initial Thoughts</b>{descriptions["sc-init-thoughts"]}
                        <br/><br/>
                        <b>Problem Statement</b>{descriptions["sc-problem-statement"]}
                        <br/><br/>
                        <b>Solution</b>{descriptions["sc-proposal-1"]}
                        this platform
                        {descriptions["sc-proposal-2"]}
                        <br/><br/>
                        <b>Next Steps:</b> Ask me! (or stalk my GitHub)
                        <ol className='left new-project-list'>
                            <li>Init GitHub repository</li>
                            <li>Web Scraping tutorials</li>
                            <li>Build python script to grab event data from single site, such as <a href="https://lh-st.com/">Lincoln Hall / Schubas</a></li>
                            <li>Automate script</li>
                            <li>Explore if script can be cross-compatible across different venue websites</li>
                            <li>Expand script to work for many venues</li>
                        </ol>
                    </div>
                </div>
                <h1>TECHNICAL & CREATIVE ACCOMPLISHMENTS</h1>
                <h2>EMBEDDED SYSTEMS</h2>
                <div className="projects-box">
                    <div className="projects-description">Arduino Droid - <b>DOG3</b></div>
                    <div className="dog3photos">
                        <img src={dog3selfie} alt="Selfie with DOG3"></img>
                        <img src={dog3work} alt="Working on DOG3"></img>
                    </div>
                    <div className="projects-description">
                        My friend <a href="https://www.linkedin.com/in/hanjing-sylvia-zhu/" target="_blank" rel="noopener noreferrer"><u>Hanjing Zhu</u></a>{descriptions["droid-description-1"]}
                        <ul className="droid-list left">
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
                <h2>FULL STACK DEVELOPMENT</h2>
                <div className="projects-box">
                    <div className="projects-description">Silicon Valley Startup - <b>Juke</b></div>
                    <br/>
                    <div className="projects-description">
                        {descriptions["juke-1"]}
                        <a href="https://juke.band" target="_blank" rel="noreferrer"><u>Juke, a jukebox for live music</u> </a>
                        {descriptions["juke-2"]}
                    </div>
                    <div className="juke-container">
                        <span className="left-text"> 
                            {descriptions["juke-3"]}
                            <b>Vue.js</b> with <b>Node.js </b> on the backend, <b>SQL </b>for database querying, and <b>AWS Firebase </b>for hosting and database storage.
                            {descriptions["juke-4"]}
                        </span>
                        <img className="right-media" src="https://drive.google.com/uc?export=view&id=15J5l34xHMzmKpdpsl3F0nOP4T30SqeMW" alt="juke logo"/>
                    </div>
                    <div className="juke-list">
                        <div className="juke-list-empty"></div>
                        <div className="juke-list-full">
                            <b>Frontend</b>
                            <ul className="juke-list-box">
                                <li>{descriptions["juke-frontend-1"]}</li>
                                <li>{descriptions["juke-frontend-2"]}</li>
                                <li>{descriptions["juke-frontend-3"]}</li>
                                <li>{descriptions["juke-frontend-4"]}</li>
                                <li>{descriptions["juke-frontend-5"]}</li>
                            </ul>
                            <b>Backend</b>
                            <ul className="juke-list-box">
                                <li>{descriptions["juke-backend-1"]}</li>
                                <li>{descriptions["juke-backend-2"]}</li>
                                <li>{descriptions["juke-backend-3"]}</li>
                                <li>{descriptions["juke-backend-4"]}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="projects-box">
                    <div className="projects-description">Marmon Group - <b>Custom Glove App</b></div>
                    <div className="dog3photos">
                        <img src="https://drive.google.com/uc?export=view&id=1HNZUUWqxwddjEln8Sg657N21rRnSsyPk" alt="input hand with scaling object"/>
                        <img src="https://drive.google.com/uc?export=view&id=17wP9JpN4vhh6rCdQ1atzFEAPkiwME4sX" alt="output hand with measurements"/>
                    </div>
                    <div className="projects-description">
                        {descriptions["marmon-1"]}
                        <b>Python algorithm </b>
                        {descriptions["marmon-2"]}
                        <b>AngularJS/HTML/CSS </b>
                        {descriptions["marmon-3"]}
                        <ul className="left">
                            <li>{descriptions["marmon-list-1"]}</li>
                            <li>{descriptions["marmon-list-2"]}</li>
                            <li>{descriptions["marmon-list-3"]}</li>
                        </ul>
                    </div>
                </div>
                <div className="projects-box">
                    <div className="projects-description">Epic Systems - <b>Prescription Translator</b></div>
                    <br/>
                    <div className="projects-description">
                        {descriptions["epic-1"]}
                        <b>Python </b>
                        {descriptions["epic-2"]}
                    </div>
                    <div className="epic-photo">
                        <img src="https://drive.google.com/uc?export=view&id=1XrkB2cm_q2KAuPwhWv2asilkP-6jwEro" alt="prescription translations"/>
                    </div>
                    <div className="projects-description">
                        {descriptions["epic-3"]}
                    </div>
                </div>
                <h2>VISUAL EFFECTS</h2>
                <div className="projects-box">
                    <div className="projects-description">Green Screen - <b>DREAMING</b></div>
                    <video controls className="project-video" src="https://drive.google.com/uc?id=1LuHTY-tBQQkF7KD4dT2rh0xReFyPPYof"/>
                    <div>
                        Using a green screen and <b>DaVinci Resolve, </b>
                        {descriptions['gs-description-1']}
                    </div>
                </div>
                <div className="projects-box">
                    <div className="projects-description">Modeling & Animation - <b>PORTFOLIO</b></div>
                    <video controls className="project-video" src="https://drive.google.com/uc?id=11mtFjyZfdj2j_EKnI3rFsLQ80woCHfeZ"/>
                    <div>
                        Using <b>Autodesk Maya</b> and <b>Houdini</b>, 
                        {descriptions["vfx-description-1"]}
                        <b>{descriptions["vfx-description-2"]}</b>
                        {descriptions["vfx-description-3"]}
                        <b>DaVinci Resolve </b>
                        {descriptions["vfx-description-4"]}
                    </div>
                </div>
                <h2>AUDIO DESIGN</h2>
                <div className="projects-box">
                    <div className="projects-description">Scene Strip & Overlay - <b>HUNGER GAMES</b></div>
                    <a href="https://drive.google.com/file/d/1mVi94brElREKnQvmUXzLc427SkwU0wzk/view?usp=drive_link" target="_blank" rel="noreferrer">
                        <img className="project-video" src={hungerShot} alt="Unable to load"></img>
                    </a>
                    <div>(Click to watch the final product)</div>
                    <br/>
                    <div className="projects-description">
                        <div>
                            {descriptions["audio-description-1"]}
                            <b>{descriptions["audio-description-2"]}</b>
                            {descriptions["audio-description-3"]}
                            <b>Adobe Audition </b>
                            {descriptions["audio-description-3-2"]}
                        </div>
                        <ul className="left">
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