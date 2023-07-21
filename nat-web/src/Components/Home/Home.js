import Nav from "../Nav/Nav.js";
import "./Home.css";

const Home = () => {
    return (
        <container>
            <Nav />
            <h2> About Me</h2>
            <div className="description-box">
                <span className="description">natalie here !</span>
            </div>
        </container>
    )
}

export default Home;