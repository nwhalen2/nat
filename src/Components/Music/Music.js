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
    //prevArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></button>,
    //nextArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></button>
    prevArrow: <span className="arrow">&#8249;</span>,
    nextArrow: <span className="arrow">&#8250;</span>
    //nextArrow: <FontAwesomeIcon className="arrow" icon="chevron-right"></FontAwesomeIcon>,

   //prevArrow: <span>&#x2190;</span>,
    //nextArrow: <span>&#x2192;</span>
}


const Music = () => {

    const musicStory1 = " when my Uncle Mike's bandmate Tony offered " + 
    "to give me lessons. After a few months of Tony coming over once a week to teach me a song, like ";
    const musicStory2 = " I began teaching myself songs online and have continued that way since. " + 
    "Soon after picking up the guitar, I played around with vocals. I fell in love with the combo. "; 
    const musicStory3 = "In 2017, I landed by first gig at ";
    const musicStory4 = ", a monthly art show hosted in an old factory space in Harvard, IL. 4th Fridays celebrates art ranging from (besides music, of course) " + 
     "paintings to photography to clothing to anything artisan and local. 4th Fridays is home to a number of studios, where artists " + 
     "stand with their masterpieces and even work on them during the show. After a few years, 4th Fridays split into " + 
     "two separate celebrations of art, an additional location emerging at ";
     const musicStory5 = " in Crystal Lake, IL. I remain loyal to both organizations and play at one of each of their shows once a year. ";
     const musicStory6 = "Now, I have played live at a handful of other venues, such as ";
     const musicStory7 = " at their Lake Geneva and La Grange locations in Wisconsin and ";
     const musicStory8 = ", a weekly showcase of students' musical talents at the University of Notre Dame.";
     const musicStory9 = "I love to jam with ";
     const musicStory10 = " on the drums, me on the guitar, and both of us on vocals. I am far from the professional musician " + 
     "that he is, and I am constantly learning from his passion and expertise. Check out a recording during one of our jam sessions on the right!";


    
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
                            {musicStory1} <b>Banana Pancakes</b> by Jack Johnson and <b>Smoke on the Water</b> by Deep Purple,
                            {musicStory2} 
                            <FontAwesomeIcon icon="guitar"> </FontAwesomeIcon>
                            &nbsp;Now it's a pair deal&nbsp;
                            <FontAwesomeIcon icon="microphone"></FontAwesomeIcon> 
                        </span>
                    </div>
                    <br/><br/>
                    {musicStory3} <a href="https://starlinefactory.com/4th-fridays/" target="_blank" rel="noreferrer"><u>4th Fridays</u></a> 
                    {musicStory4} <a href="https://nancymerkling.com/4th-fridays/4th-fridays-at-the-dole/" target="_blank" rel="noreferrer"><u>The Dole</u></a>
                    {musicStory5}
                    {musicStory6} <a href="https://www.avantcyclecafe.com/articles/coffee-shop-pg211.htm" target="_blank" rel="noreferrer"><u>Avant Cycle Cafe</u></a>
                    {musicStory7} <a href="https://www.sub.nd.edu/acousticaf" target="_blank" rel="noreferrer"><u>Acousticaf&eacute;</u></a>
                    {musicStory8}
                    <br/><br/>
                    <div className="music-spiel">
                        <span className="left-text">
                            {musicStory9} <a href="https://michaelwhalenmusician.com" target="_blank" rel="noreferrer"><u>Michael Whalen</u></a>
                            {musicStory10}
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