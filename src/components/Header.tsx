import React from 'react';
import Toolbar from './common/Toolbar';

const Header:React.FC<{ slugs?: string[] }> = ({ slugs }) => {

  return (
    <header>
      <div className="hero-title">HYTTARADAR</div>
      <Toolbar />
    </header>
)}; 

export default Header;