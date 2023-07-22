import React from 'react';
import { Link } from "react-router-dom";
import './Nav.css';

const Nav = () => {
  return (
    <div className="nav">
      <nav>
        <ul className="tab-row">
            <li>
                <Link to="/home" className="tab" id="tab1">me</Link>
            </li>
            <li>
                <Link to="/projects" className="tab" id="tab2">projects</Link>
            </li>
            <li>
                <Link to="/music" className="tab" id="tab3">music</Link>
            </li>
            <li>
                <Link to="/art" className="tab" id="tab4">art</Link>
            </li>
        </ul>
      </nav>
    </div>
    
  )
}

export default Nav;