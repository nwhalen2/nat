import "./Music.css";
import Nav from "./../Nav/Nav.js";
import "../../App.css";
import dole from "../../media/gigs/dole.jpeg";
import dole2 from "../../media/gigs/dole2.png";
import avant from "../../media/gigs/avant.jpg";
import avant2 from "../../media/gigs/avant2.png";
import dancers from "../../media/gigs/dancers.jpg";
import acousticafe from "../../media/gigs/acousticafe.jpg";
import bottleshop from "../../media/gigs/bottle-shop.jpeg";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const musicImages = [
    {
        url: bottleshop,
        title: "The Bottle Shop (2023)",
        caption: "Got to jam with Telstar in Lake Geneva, WI"
    },
    {
        url: dole,
        title: "4th Fridays at the Dole (2023)"
    },
    {
        url: avant,
        title: "Avant Cycle Cafe (2021)"
    },
    {
        url: dancers,
        title: "4th Fridays at Starline Gallery (2022)"
    },
    {
        url: acousticafe,
        title: "Acousticafe at Notre Dame (2020)"
    },
    {
        url: dole2,
        title: "4th Fridays at the Dole (2019)"
    },
    {
        url: avant2,
        title: "Avant Cycle Cafe (2019)"
    },
]

const arrows = {
    //prevArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></button>,
    //nextArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></button>
    prevArrow: <FontAwesomeIcon className="arrow" icon="chevron-left"></FontAwesomeIcon>,
    nextArrow: <FontAwesomeIcon className="arrow" icon="chevron-right"></FontAwesomeIcon>,

   //prevArrow: <span>&#x2190;</span>,
    //nextArrow: <span>&#x2192;</span>
}


const Music = () => {
    return (
        <div className="musicBody">

            <Nav />

            <div className="music">
                <h1>STAGE & STUDIO</h1>
                <h2>LIVE MUSIC</h2>
                <div className="music-slideshow-container">
                    <Slide {...arrows}>
                        {musicImages.map((musicImage, index)=> (
                        <div key={index} className="music-photo-container">
                            <img className="music-photo" src={musicImage.url} alt='yo'/>
                            <br/>
                            <b>{musicImage.title}</b>
                            <br />
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