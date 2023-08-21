import Nav from "../Nav/Nav.js";
import "./Home.css";
import "../../App.css";
import me from "./nat-orange.png";

const Home = () => {
    return (
        <div className="home-body" >
            <Nav />
            <div className="home">
                <h2>WORK IN PROGRESS</h2>
                <div className="home-box">
                    <span className="description">my name is natalie whalen, & this is my personal website. it is very much so still a work in progress. 
                    <br/>
                    </span>
                    <span className="description">everything you see here has been coded in <b>react</b> and is hosted on <b><a href="https://github.com/nwhalen2" target="_blank" rel="noreferrer">github</a></b>
                    <br/>
                    </span>
                    <br/>
                    <img src={me} alt="none" style={{width:"40%"}}/>
                    <br/>
                    <br/>
                    <span className="description">i am currently traveling and am hence not actively updating the site. steps forward will be to showcase more coding projects and aspects of my layperson life by making the site more clean and interative. feel free to browse through my current tabs and learn a bit about me!
                    <br/>
                    </span>
                    <br/>
                    <b>last updated: 22 August 2023</b>
                </div>
            </div>
        </div>
    )
}

export default Home;