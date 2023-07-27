import React from 'react';
import { Link } from "react-router-dom";
import './Nav.css';

const Nav = () => {
  return (
    <div className="nav">
      <nav>
        <ul className="tab-row">
            <li>
                <Link to="/nat" className="tab" id="tab1">nat</Link>
            </li>
            <li>
                <Link to="/cs" className="tab" id="tab2">CS</Link>
            </li>
            <li>
                <Link to="/music" className="tab" id="tab3">music</Link>
            </li>
            <li>
                <Link to="/comedy" className="tab" id="tab4">comedy</Link>
            </li>
        </ul>
      </nav>
    </div>
    
  )
}

export default Nav;