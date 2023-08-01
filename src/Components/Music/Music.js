import "./Music.css";
import Nav from "./../Nav/Nav.js";
import "../../App.css";
import dole from "../../images/dole.jpeg";
import dole2 from "../../images/dole2.png";
import avant from "../../images/avant.jpg";
import avant2 from "../../images/avant2.png";
import dancers from "../../images/dancers.jpg";
import acousticafe from "../../images/acousticafe.jpg";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
/*
const musicImages = [
    {
        url: "../../images/dole.jpeg",
        caption: "4th Fridays at the Dole"
    },
    {
        url: "../../images/avant.jpg",
        caption: "Avant Cycle Cafe"
    },
    {
        url: "../../images/dancers.jpg",
        caption: "4th Fridays at Starline Gallery"
    },
    {
        url: "../../images/acousticafe.jpg",
        caption: "Acousticafe at Notre Dame"
    }

]*/

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
                <h2>LIVE MUSIC</h2>
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
                <div className="music-box">
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