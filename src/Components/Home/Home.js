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
                    <span className="description">my name is natalie whalen, & this will be my personal website / portfolio / showcase.
                    <br/>
                    </span>
                    <br/>
                    <img src={me} alt="none" style={{width:"40%"}}/>
                    <br/>
                    <b>last updated: 1 August 2023</b>
                </div>
            </div>
        </div>
    )
}

export default Home;