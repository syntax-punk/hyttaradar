import React from 'react';
import { Link } from 'react-router-dom';

const Header:React.FC<{ slugs?: string[] }> = ({ slugs }) => {

  return (
    <header>
      <div className="hero-title">HYTTARADAR</div>
      {slugs && slugs.length > 0 && 
        <ul className="hero-slugs">
          { slugs.map(slug => <Link to={slug} className="active-slug" key={slug}>{slug}</Link>) }
        </ul>
      }
    </header>
)}; 

export default Header;