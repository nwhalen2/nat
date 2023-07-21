import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <div className="nav">
      <div className="tab-row">
        <div className="tab" id="tab1">me</div>
        <div className="tab" id="tab2">projects</div>
        <div className="tab" id="tab3">music</div>
        <div className="tab" id="tab4">art</div>
      </div>
    </div>
  )
}

export default Nav;