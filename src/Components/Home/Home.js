import Nav from "../Nav/Nav.js";
import "./Home.css";

const Home = () => {
    return (
        <div>
            <Nav />
            <div className="home">
                <h2> About Me</h2>
                <div className="description-box">
                    <span className="description">my name is natalie whalen, & this is my personal website / portfolio / showcase.
                    <br/> yo yo yo
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Home;