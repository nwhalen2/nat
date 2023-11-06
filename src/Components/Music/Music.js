import "./Music.css";
import Nav from "./../Nav/Nav.js";
import "../../App.css";
import dole from "../../images/dole.jpeg";
import dole2 from "../../images/dole2.png";
import avant from "../../images/avant.jpg";
import avant2 from "../../images/avant2.png";
import dancers from "../../images/dancers.jpg";
import acousticafe from "../../images/acousticafe.jpg";
//import bottleshop from "../../images/bottle-shop.jpg";
import backer from "../../images/backer.jpeg";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MusicStory from "./Music.json"

/*
    {
        url: bottleshop,
        title: "The Bottle Shop (2023)",
        caption: "Got to jam with Telstar in Lake Geneva, WI"
    },
*/

const musicImages = [
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
    prevArrow: <span className="arrow">&#8249;</span>,
    nextArrow: <span className="arrow">&#8250;</span>
}


const Music = () => {
    
    return (
        <div className="musicBody">

            <Nav />

            <div className="music">
                <h1>STAGE & STUDIO</h1>
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
                <h2>LIVE MUSIC</h2>
                <div className="music-box">
                    <div className="music-spiel">
                        <img className="left-media" src="https://drive.google.com/uc?export=view&id=19oOO4KTTwy6tQEntedcXMJaihBUkiGs4" alt="me & tony"/>
                        <span className="right-text">
                            <span className="begin-spiel">I started playing guitar in high school</span>
                            {MusicStory["musicStory1"]} <b>Banana Pancakes</b> by Jack Johnson and <b>Smoke on the Water</b> by Deep Purple,
                            {MusicStory["musicStory2"]} 
                            <FontAwesomeIcon icon="guitar"> </FontAwesomeIcon>
                            &nbsp;Now it's a pair deal&nbsp;
                            <FontAwesomeIcon icon="microphone"></FontAwesomeIcon> 
                        </span>
                    </div>
                    <br/><br/>
                    {MusicStory["musicStory3"]} <a href="https://starlinefactory.com/4th-fridays/" target="_blank" rel="noreferrer"><u>4th Fridays</u></a> 
                    {MusicStory["musicStory4"]} <a href="https://nancymerkling.com/4th-fridays/4th-fridays-at-the-dole/" target="_blank" rel="noreferrer"><u>The Dole</u></a>
                    {MusicStory["musicStory5"]}
                    {MusicStory["musicStory6"]} <a href="https://www.avantcyclecafe.com/articles/coffee-shop-pg211.htm" target="_blank" rel="noreferrer"><u>Avant Cycle Cafe</u></a>
                    {MusicStory["musicStory7"]} <a href="https://www.sub.nd.edu/acousticaf" target="_blank" rel="noreferrer"><u>Acousticaf&eacute;</u></a>
                    {MusicStory["musicStory8"]}
                    <br/><br/>
                    <div className="music-spiel">
                        <span className="left-text">
                            {MusicStory["musicStory9"]} <a href="https://michaelwhalenmusician.com" target="_blank" rel="noreferrer"><u>Michael Whalen</u></a>
                            {MusicStory["musicStory10"]}
                        </span>
                        <video className="right-media" src="https://drive.google.com/uc?id=1gcjJKL-DX55hD0fQlCBAvCUZ00-WYiEx" controls></video>
                    </div>
                    
                </div>
                <h2>ORIGINAL RECORDINGS</h2>
                <div className="music-box">
                    <div className="music-spiel reverse">
                        <span className="left-text"><b>Voicemails: </b>I sampled old voicemail recordings, came up with a guitar riff, layered some AI drums on it with GarageBand along with some other funky effects, and boom! Take a listen.</span>
                        <audio controls className="right-media" id="player" src="https://docs.google.com/uc?export=download&id=1Ypekz7VQo86lyGwcA1Os-ohESaDlcQKZ"/>
                    </div>
                    <br/>
                    <div className="music-spiel">
                        <audio controls className="left-media" id="player" src="https://docs.google.com/uc?export=download&id=1-_zu7ggSmuwFDiGhoX-nLfOW7AYupFA3"/>
                        <span className="right-text"><b>Gray: </b>I wrote this song about that feeling of, well, the lack of feeling and the knowledge certain things happen whether within your control or not. I took my guitar, chords, and lyrics over to my friend Jack's basement, and we added some layers to produce what you can hear here.</span>
                    </div>
                </div>
                <h2>STAND UP</h2>
                <div className="music-box standup-box">
                    <div>I also do stand up comedy! I joined Student Standups at the University of Notre Dame and performed at several shows on and off campus. Life is funny, so let's laugh about it!</div>
                    <br/>
                    <img className="standup-photo" src={backer} alt="I did standup at the LineBacker Lounge in South Bend, IN"></img>
                    <br/><br/>
                    <div>This is me performing a standup set at the <b> LineBacker Lounge </b> in South Bend, IN.</div>
                </div>
                <h2>&#128011;</h2>
            </div>
        </div>
    )
}

export default Music;