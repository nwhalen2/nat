import "./Music.css";
import Nav from "./../Nav/Nav.js";
import "../../App.css";

const Music = () => {
    return (
        <div className="musicBody">
            <Nav />
            <div className="music">
                <h2>WORK IN PROGRESS</h2>
                <div className="description-box">
                    <span className="description">this page will display my music endeavors.</span>
                    <ul>
                        <li>
                            i sing & play the guitar at art shows & coffee shops
                        </li>
                        <li>
                            at notre dame, i hosted a weekly classic rock radio show through WSND-FM 88.9
                        </li>
                        <li>
                            i also like to write/record music on my own
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Music;