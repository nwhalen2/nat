import "./Resume.css";
import "../../App.css";
import Nav from "../Nav/Nav.js";

const Resume = () => {
    return (
        <div className="resume-body">
            <Nav />
            <div className="resume">
                <h2>EDUCATION</h2>
                <div className="resume-box">
                    <div className="double-sided">
                        <span className="left"><b>University of Notre Dame</b></span>
                        <span className="right">Notre Dame, IN</span>
                    </div>
                    <div className="double-sided">
                        <span className="left">College of Engineering, Computer Science</span>
                        <span className="right">May 2023</span>
                    </div>
                    <div className="single-sided">
                        <span>3.87 GPA</span>
                    </div>
                    <hr />
                    <div className="double-sided">
                        <span className="left"><b>Saint Ignatius College Prep</b></span>
                        <span className="right">Chicago, IL</span>
                    </div>
                    <div className="single-sided">
                        <span>4.2 GPA&ensp;34 ACT</span>
                    </div>
                </div>
                <h2>TECHNICAL SKILLS</h2>
                <div className="resume-box">
                    <div className="double-sided">
                        <span className="left">Coding Languages</span>
                        <span className="right">HTML&ensp;CSS&ensp;JavaScript&ensp;Node&ensp;Python&ensp;C&ensp;C++&ensp;Arduino&ensp;Java</span>
                    </div>
                    <hr/>
                    <div className="double-sided">
                        <span className="left">Creative Platforms</span>
                        <span className="right">Adobe Audition&ensp;GarageBand&ensp;Maya&ensp;Houdini&ensp;DaVinci Resolve&ensp;Figma</span>
                    </div>
                    <hr/>
                    <div className="double-sided">
                        <span className="left">Frameworks</span>
                        <span className="right">React&ensp;Vuetify&ensp;Angular</span>
                    </div>
                    <hr />
                    <div className="double-sided">
                        <span className="left">Database / Cloud</span>
                        <span className="right">Docker&ensp;AWS&ensp;SQL&ensp;Firebase&ensp;Back4App</span>
                    </div>
                </div>
                <h2>EMPLOYMENT</h2>
                <div className="resume-box">
                    <div className="double-sided">
                        <span className="left"><b>TrueFire Studios</b></span>
                        <span className="right">St. Petersburg, FL (remote)</span>
                    </div>
                    <div className="double-sided">
                        <span className="left"><i>Front End Developer</i></span>
                        <span className="right">Dec 2023 - Present</span>
                    </div>
                    <div className="single-sided">
                        <li> Work closely with marketing team to understand and fulfill promotional requirements</li>
                        <li>Develop new user-facing features using Vue.js</li>
                        <li>Build reusable code and libraries for future use</li>
                        <li>Ensure technical feasibility of UI and UX designs</li>
                    </div>
                    <hr />
                    <div className="double-sided">
                        <span className="left"><b>Remotasks</b></span>
                        <span className="right">San Francisco, CA (remote)</span>
                    </div>
                    <div className="double-sided">
                        <span className="left"><i>Platinum Coder</i></span>
                        <span className="right">Dec 2023 - Present</span>
                    </div>
                    <div className="single-sided">
                        <li>Train Large Language Models by
                            <ul>
                                <li>Coding out and writing clear explanations to algorithmic or language-specific programming questions, primarily in Python and JavaScript</li>
                                <li>Creatively prompting AI with complex coding-related requests in order to engage coherent conversations</li>
                                <li>Evaluating AI responses based on knowledge, sentience, and critical research</li>
                            </ul>
                        </li>
                    </div>
                    <hr />
                    <div className="double-sided">
                        <span className="left"><b>Juke</b></span>
                        <span className="right">Nashville, TN (remote)</span>
                    </div>
                    <div className="double-sided">
                        <span className="left"><i>Full-Stack Developer</i></span>
                        <span className="right">Jan 2022 - August 2022</span>
                    </div>
                    <div className="single-sided">
                        <li>Continued development of <a className="resume-link" href="https://juke.band" target="_blank" rel="noopener noreferrer">juke.band</a> that allows audiences to request songs and tip performers at shows</li>
                        <li>Code stack in Vue, Node, HTML/CSS, hosted on AWS Firebase</li>
                        <li>Promptly completed debugging, database, and design related tasks to constantly improve UI/UX, i.e.
                        <ul>
                            <li>Converted Figma design mockups to code</li>
                            <li>Animated home button to indicate when shows are live</li>
                            <li>Monitored gig success by timing a cronjob to deliver daily Slack messages revealing important statistics calculated through SQL statements</li>
                            <li>Built a script to identify and eliminate all unused lines of CSS</li>
                        </ul>
                        </li>
                    </div>
                    <hr />
                    <div className="double-sided">
                        <span className="left"><b>The Sound of Notre Dame, </b><a className="resume-link" href="https://wsnd.nd.edu" target="_blank" rel="noopener noreferrer">WSND FM 88.9</a></span>
                        <span className="right">Notre Dame, IN</span>
                    </div>
                    <div className="double-sided">
                        <span className="left"><i>Station Manager</i></span>
                        <span className="right">July 2022 - May 2023</span>
                    </div>
                    <div className="single-sided">
                        <li>Directed student radio by promoting shows, hosting engagement events, and fostering student community</li>
                        <li>Managed team and expanded roles of six board members under the oversight of Broadcast Media Coordinator, Peter Farrough</li>
                        <li>Set and achieved semester and weekly goals, planned agenda for weekly meetings, and delegated to proper parties</li>
                    </div>
                    <div className="double-sided">
                        <span className="left"><i>Chief Announcer</i></span>
                        <span className="right">April 2020 - Dec 2021</span>
                    </div>
                    <div className="single-sided">
                        <li>Scheduled all shows to align best with station’s genre schedule and announcer preferences</li>
                        <li>Trained new announcers with station equipment and radio etiquette per FCC guidelines</li>
                        <li>Participated as an active board member</li>
                    </div>
                    <hr/>
                    <div className="double-sided">
                        <span className="left"><b>University of Notre Dame</b></span>
                        <span className="right">Notre Dame, IN</span>
                    </div>
                    <div className="double-sided">
                        <span className="left"><i>Research Assistant</i></span>
                        <span className="right">Feb 2021 - Jan 2023</span>
                    </div>
                    <div className="single-sided">
                        <li>
                            Head Developer of Decision Sheet ReDesign Project
                            <ul>
                                <li>Investigated ways to holistically reinvent the decision process by redesigning the visualization of a prospective student’s application data for reviewers</li>
                                <li>Coded HTML, CSS, JavaScript webpage based on research evaluation in the design process</li>
                                <li>Optimized codebase by parsing student data in JSON</li>
                            </ul>
                        </li>
                        <li>Read and critiqued research papers of graduate students</li>
                        <li>Organized data in excel sheets</li>
                        <li>Studied d3.js library in order to improve data visualizations for the GameRecapper project, which presents interactive visuals to writers in order to improve sports coverage</li>
                    </div>
                    <div className="double-sided">
                        <span className="left"><i>Lead Teaching Assistant</i></span>
                        <span className="right">Fall 2021</span>
                    </div>
                    <div className="single-sided">
                        <li>Managed grading schedule for three other TAs in Dr. Shreya Kumar's Principles of Computing course</li>
                        <li>Graded in-class responses, comments, participation code, and homework assignments</li>
                        <li>Mentored students through weekly office hours to help elucidate basic computing in Python, JavaScript, HTML, and CSS</li>
                    </div>
                    <hr/>
                    <div className="double-sided">
                        <span className="left"><b>Marmon Group</b></span>
                        <span className="right">Chicago, IL (remote)</span>
                    </div>
                    <div className="double-sided">
                        <span className="left"><i>Innovation Intern</i></span>
                        <span className="right">Dec 2020 - Jan 2021</span>
                    </div>
                    <div className="single-sided">
                        <li>Project managed team of six interns on innovation team to collectively create an app for custom-sized gloves</li>
                        <li>Optimized image processing algorithm in Python to measure hand dimensions using photo from user</li>
                        <li>Implemented a Progressive Web App UI using the Angular framework, hosted on an Amazon EC2 Instance</li>
                    </div>
                </div>
                <h2>INTERESTS</h2>
                <div className="resume-box">
                    <div>
                        <span><a className="resume-link" href="https://open.spotify.com/user/1251793928?si=822c654623e94d18" target="_blank" rel="noreferrer">Classic Rock</a>&ensp;&ensp;Sustainability&ensp;&ensp;Travel&ensp;&ensp;Camping&ensp;&ensp;Hiking&ensp;&ensp;Running&ensp;&ensp;Playing sports (with sub-par talent)&ensp;&ensp;Critically acclaimed movies&ensp;&ensp;Community events&ensp;&ensp;"3-Buck Chuck"&ensp;&ensp;Animals</span>
                    </div>
                </div>
                <h2>&#128011;</h2>
            </div>
        </div>
    )
}

export default Resume;