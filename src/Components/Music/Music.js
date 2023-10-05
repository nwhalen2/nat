import "./Music.css";
import Nav from "./../Nav/Nav.js";
import "../../App.css";
import dole from "../../media/dole.jpeg";
import dole2 from "../../media/dole2.png";
import avant from "../../media/avant.jpg";
import avant2 from "../../media/avant2.png";
import dancers from "../../media/dancers.jpg";
import acousticafe from "../../media/acousticafe.jpg";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const musicImages = [
    {
        url: dole,
        caption: "4th Fridays at the Dole (2023)"
    },
    {
        url: avant,
        caption: "Avant Cycle Cafe (2021)"
    },
    {
        url: dancers,
        caption: "4th Fridays at Starline Gallery (2022)"
    },
    {
        url: acousticafe,
        caption: "Acousticafe at Notre Dame (2020)"
    },
    {
        url: dole2,
        caption: "4th Fridays at the Dole (2019)"
    },
    {
        url: avant2,
        caption: "Avant Cycle Cafe (2019)"
    },
]

const Music = () => {
    return (
        <div className="musicBody">
            <Nav />
            <div className="music">
                <h3>-- UNDER CONSTRUCTION --</h3>
                <h2>LIVE MUSIC & COMEDY</h2>
                <div className="music-slideshow-container">
                    <Slide>
                        {musicImages.map((musicImage, index)=> (
                        <div key={index} className="music-photo-container">
                            <img className="music-photo" src={musicImage.url} alt='yo'/>
                            <br/>
                            <span>{musicImage.caption}</span>
                        </div>
                        ))} 
                    </Slide>
                </div>
                <h2>this page will display my music endeavors.</h2>
                <div className="small-box">
                    <br/>
                        <li className="mus">
                            i sing & play the guitar at art shows & coffee shops
                        </li>
                        <li className="mus">
                            at Notre Dame, i hosted a weekly Classic Rock radio show through <a className="wsnd-link" href="https://wsnd.nd.edu">WSND-FM 88.9</a>
                        </li>
                        <li className="mus">
                            i also like to write/record music on my own
                        </li>
                </div>
                <h2>&#128011;</h2>
            </div>
        </div>
    )
}

export default Music;