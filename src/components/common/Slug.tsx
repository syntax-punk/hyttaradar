import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface SlugProps {
  title: string;
  path: string;
}

const Slug: React.FC<SlugProps> = ({ title, path }) => {
  const location = useLocation();

  return (
    <Link to={path} className={location.pathname === path ? 'active-slug' : ''}>
      {title}
    </Link>
  );
};

export default Slug;
