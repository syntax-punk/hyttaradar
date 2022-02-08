import React from 'react';
import Slug from './common/Slug';

const Header: React.FC<{ slugs?: string[] }> = ({ slugs }) => {
  return (
    <header>
      <div className="hero-title">HYTTARADAR</div>
      {slugs && slugs.length > 0 && (
        <ul className="hero-slugs">
          {slugs.map((slug) => (
            <Slug key={slug} title={slug} path={slug} />
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
