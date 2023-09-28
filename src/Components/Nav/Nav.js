import React from 'react';
import { Link, useLocation } from "react-router-dom";
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Nav = () => {

  const iconColors = {
    natLight: "#ffb457",
    natDark: "#f88e0b",
    csLight: "#ff96bd",
    csDark: "#f85792",
    musicLight: "#9999fb",
    musicDark: "#5f5fff",
    comedyLight: "#59d5e8",
    comedyDark: "#01b7d3"
  }
  let natIconColor = {
    color: iconColors.natDark
  };
  let csIconColor = {
    color: iconColors.csLight
  };
  let musicIconColor = {
    color: iconColors.musicLight
  };
  let comedyIconColor = {
    color: iconColors.comedyLight
  };

  // determine which icon should be highlighted
  let path = useLocation().pathname;
  switch(path) {
    case "/cs":
      natIconColor.color = iconColors.natLight;
      csIconColor.color = iconColors.csDark;
      musicIconColor.color = iconColors.musicLight;
      comedyIconColor.color = iconColors.comedyLight;
      break;
    case "/music":
      natIconColor.color = iconColors.natLight;
      csIconColor.color = iconColors.csLight;
      musicIconColor.color = iconColors.musicDark;
      comedyIconColor.color = iconColors.comedyLight;
      break;
    case "/comedy":
      natIconColor.color = iconColors.natLight;
      csIconColor.color = iconColors.csLight;
      musicIconColor.color = iconColors.musicLight;
      comedyIconColor.color = iconColors.comedyDark;
      break;
    default:
      // default * or /nat
      natIconColor.color = iconColors.natDark;
      csIconColor.color = iconColors.csLight;
      musicIconColor.color = iconColors.musicLight;
      comedyIconColor.color = iconColors.comedyLight;
  }

  return (
    <div className="nav" >
      <nav>
        <ul className="tab-row">
            <li>
                <Link to="/nat" className="tab" id="tab1">
                  <FontAwesomeIcon icon="hand" style={natIconColor}/>
                  <span className="long-nav">&nbsp;intro</span>
                </Link>
            </li>
            <li>
                <Link to="/cs" className="tab" id="tab2">
                  <FontAwesomeIcon icon="computer" style={csIconColor}/>
                  <span className="long-nav" >&nbsp;resume</span>
                </Link>
            </li>
            <li>
                <Link to="/music" className="tab" id="tab3">
                  <FontAwesomeIcon icon="microphone" style={musicIconColor}/>
                  <span className="long-nav">&nbsp;stage</span>
                </Link>
            </li>
            <li>
                <Link to="/comedy" className="tab" id="tab4">
                  <FontAwesomeIcon icon="hippo" style={comedyIconColor}/>
                  <span className="long-nav">&nbsp;projects</span>
                </Link>
            </li>
        </ul>
      </nav>
    </div>
    
  )
}

export default Nav;