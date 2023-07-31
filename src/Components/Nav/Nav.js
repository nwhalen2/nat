import React from 'react';
import { Link } from "react-router-dom";
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Nav = () => {
  return (
    <div className="nav">
      <nav>
        <ul className="tab-row">
            <li>
                <Link to="/nat" className="tab" id="tab1">
                  <FontAwesomeIcon icon="hand" />
                </Link>
            </li>
            <li>
                <Link to="/cs" className="tab" id="tab2">
                  <FontAwesomeIcon icon="computer" />
                </Link>
            </li>
            <li>
                <Link to="/music" className="tab" id="tab3">
                  <FontAwesomeIcon icon="music" />
                </Link>
            </li>
            <li>
                <Link to="/comedy" className="tab" id="tab4">
                  <FontAwesomeIcon icon="masks-theater" />
                </Link>
            </li>
        </ul>
      </nav>
    </div>
    
  )
}

export default Nav;