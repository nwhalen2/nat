import Nav from "../Nav/Nav.js";
import "./Home.css";
import "../../App.css";

const Home = () => {
    /*const myBackground = {
        backgroundColor: "#ffb457"
    }
    inline style={myBackgound}*/
    return (
        <div className="homeBody" >
            <Nav />
            <div className="home">
                <h2>WORK IN PROGRESS</h2>
                <div className="description-box">
                    <span className="description">my name is natalie whalen, & this will be my personal website / portfolio / showcase.
                    <br/><b>last updated: 1 August 2023</b>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Home;