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
    musicDark: "#7979fa",
    projLight: "#59d5e8",
    projDark: "#01b7d3"
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
  let projIconColor = {
    color: iconColors.projLight
  };

  // determine which icon should be highlighted
  let path = useLocation().pathname;
  switch(path) {
    case "/cs":
      natIconColor.color = iconColors.natLight;
      csIconColor.color = iconColors.csDark;
      musicIconColor.color = iconColors.musicLight;
      projIconColor.color = iconColors.projLight;
      break;
    case "/music":
      natIconColor.color = iconColors.natLight;
      csIconColor.color = iconColors.csLight;
      musicIconColor.color = iconColors.musicDark;
      projIconColor.color = iconColors.projLight;
      break;
    case "/projects":
      natIconColor.color = iconColors.natLight;
      csIconColor.color = iconColors.csLight;
      musicIconColor.color = iconColors.musicLight;
      projIconColor.color = iconColors.projDark;
      break;
    default:
      // default * or /nat
      natIconColor.color = iconColors.natDark;
      csIconColor.color = iconColors.csLight;
      musicIconColor.color = iconColors.musicLight;
      projIconColor.color = iconColors.projLight;
  }

  return (
    <div className="nav" >
      <nav>
        <ul className="tab-row">
            <li>
                <Link to="/nat" className="tab" id="tab1" style={natIconColor}>
                  <FontAwesomeIcon icon="hand"/>
                  <span className="long-nav">&nbsp;intro</span>
                </Link>
            </li>
            <li>
                <Link to="/cs" className="tab" id="tab2" style={csIconColor}>
                  <FontAwesomeIcon icon="computer"/>
                  <span className="long-nav" >&nbsp;resume</span>
                </Link>
            </li>
            <li>
                <Link to="/music" className="tab" id="tab3" style={musicIconColor}>
                  <FontAwesomeIcon icon="microphone"/>
                  <span className="long-nav">&nbsp;stage</span>
                </Link>
            </li>
            <li>
                <Link to="/projects" className="tab" id="tab4" style={projIconColor}>
                  <FontAwesomeIcon icon="hippo" />
                  <span className="long-nav">&nbsp;projects</span>
                </Link>
            </li>
        </ul>
      </nav>
    </div>
    
  )
}

export default Nav;