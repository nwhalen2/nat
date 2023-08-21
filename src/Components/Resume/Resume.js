import "./Resume.css";
import "../../App.css";
import Nav from "../Nav/Nav.js";

const Resume = () => {
    return (
        <div className="resumeBody">
            <Nav />
            <div className="resume">
                <h2>EDUCATION</h2>
                <div className="box">
                    <div className="double-sided">
                        <span><b>University of Notre Dame</b></span>
                        <span>Notre Dame, IN</span>
                    </div>
                    <div className="double-sided">
                        <span>College of Engineering, Computer Science</span>
                        <span>May 2023</span>
                    </div>
                    <div className="single-sided">
                        <span>3.87 GPA</span>
                    </div>
                    <hr />
                    <div className="double-sided">
                        <span><b>Saint Ignatius College Prep</b></span>
                        <span>Chicago, IL</span>
                    </div>
                    <div className="single-sided">
                        <span>4.2 GPA&ensp;34 ACT</span>
                    </div>
                </div>
                <h2>TECHNICAL SKILLS</h2>
                <div className="box">
                    <div className="double-sided">
                        <span>Coding Languages</span>
                        <span>HTML&ensp;CSS&ensp;JavaScript&ensp;Node&ensp;Python&ensp;C&ensp;C++&ensp;Arduino&ensp;Java</span>
                    </div>
                    <hr/>
                    <div className="double-sided">
                        <span>Creative Platforms</span>
                        <span>Adobe Audition&ensp;GarageBand&ensp;Maya&ensp;Houdini&ensp;DaVinci Resolve&ensp;Figma</span>
                    </div>
                    <hr/>
                    <div className="double-sided">
                        <span>Frameworks</span>
                        <span>React&ensp;Vuetify&ensp;Angular</span>
                    </div>
                    <hr />
                    <div className="double-sided">
                        <span>Databases</span>
                        <span>SQL&ensp;Firebase&ensp;Back4App</span>
                    </div>
                </div>
                <h2>EMPLOYMENT</h2>
                <div className="box">
                    <div className="double-sided">
                        <span><b>Juke</b></span>
                        <span>Nashville, TN (remote)</span>
                    </div>
                    <div className="double-sided">
                        <span><i>Web Development Intern</i></span>
                        <span>Jan 2022 - August 2022</span>
                    </div>
                    <div className="single-sided">
                        <li>Continued development of <a href="https://juke.band" target="_blank" rel="noopener noreferrer">juke.band</a> that allows audiences to request songs and tip performers at shows</li>
                        <li>Code stack in Vuetify, JavaScript, Node.js, HTML/CSS, hosted on AWS Firebase</li>
                        <li>Promptly completed debugging, database, and design related tasks to constantly improve UI/UX
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
                        <span><b>The Sound of Notre Dame, </b><a href="https://wsnd.nd.edu" target="_blank" rel="noopener noreferrer">WSND FM 88.9</a></span>
                        <span>Notre Dame, IN</span>
                    </div>
                    <div className="double-sided">
                        <span><i>Station Manager</i></span>
                        <span>July 2022 - May 2023</span>
                    </div>
                    <div className="single-sided">
                        <li>Directed student radio by promoting shows, hosting engagement events, and fostering student community</li>
                        <li>Managed team and expanded roles of six board members under the oversight of Broadcast Media Coordinator, Peter Farrough</li>
                        <li>Set and achieved semester and weekly goals, planned agenda for weekly meetings, and delegated to proper parties</li>
                    </div>
                    <div className="double-sided">
                        <span><i>Chief Announcer</i></span>
                        <span>April 2020 - Dec 2021</span>
                    </div>
                    <div className="single-sided">
                        <li>Scheduled all shows to align best with station’s genre schedule and announcer preferences</li>
                        <li>Trained new announcers with station equipment and radio etiquette per FCC guidelines</li>
                        <li>Participated as an active board member</li>
                    </div>
                    <hr/>
                    <div className="double-sided">
                        <span><b>University of Notre Dame</b></span>
                        <span>Notre Dame, IN</span>
                    </div>
                    <div className="double-sided">
                        <span><i>Research Assistant</i></span>
                        <span>Feb 2021 - Jan 2023</span>
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
                        <span><i>Lead Teaching Assistant</i></span>
                        <span>Fall 2021</span>
                    </div>
                    <div className="single-sided">
                        <li>Managed grading schedule for three other TAs in Dr. Shreya Kumar's Principles of Computing course</li>
                        <li>Graded in-class responses, comments, participation code, and homework assignments</li>
                        <li>Mentored students through weekly office hours to help elucidate basic computing in Python, JavaScript, HTML, and CSS</li>
                    </div>
                    <hr/>
                    <div className="double-sided">
                        <span><b>Marmon Group</b></span>
                        <span>Chicago, IL (remote)</span>
                    </div>
                    <div className="double-sided">
                        <span><i>Innovation Intern</i></span>
                        <span>Dec 2020 - Jan 2021</span>
                    </div>
                    <div className="single-sided">
                        <li>Project managed team of six interns on innovation team to collectively create an app for custom-sized gloves</li>
                        <li>Optimized image processing algorithm in Python to measure hand dimensions using photo from user</li>
                        <li>Implemented a Progressive Web App UI using the Angular framework, hosted on an Amazon EC2 Instance</li>
                    </div>
                </div>
                <h2>INTERESTS</h2>
                <div className="box last">
                    <div className="single-sided">
                        <span><a href="https://open.spotify.com/user/1251793928?si=822c654623e94d18" target="_blank" rel="noreferrer">Classic Rock</a>&ensp;&ensp;Sustainability&ensp;&ensp;Travel&ensp;&ensp;Camping&ensp;&ensp;Hiking&ensp;&ensp;Running&ensp;&ensp;Playing sports (with sub-par talent)&ensp;&ensp;Critically acclaimed movies&ensp;&ensp;Community events&ensp;&ensp;3-Buck Chuck&ensp;&ensp;Animals</span>
                    </div>
                </div>
                <h2>&#128011;</h2>
            </div>
        </div>
    )
}

export default Resume;