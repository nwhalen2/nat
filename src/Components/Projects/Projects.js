import "./Projects.css";
import "../../App.css";
import Nav from "./../Nav/Nav.js";

const Projects = () => {
    return (
        <div>
            <Nav />
            <div className="projects">
                <h2>WORK IN PROGRESS</h2>
                <div className="description-box">
                    <span className="description">my resume will be shown here, including:</span>
                    <ul>
                        <li>
                            my job experience
                        </li>
                        <li>
                            skills & software
                        </li>
                        <li>
                            project examples
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Projects;