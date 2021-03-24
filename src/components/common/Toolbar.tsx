import React from 'react';
import Searchbar from './Searchbar';
import Countbar from './Countbadge';

const Toolbar: React.FC = () => {
  return(
    <section className="header-toolbar">
      <Searchbar />
      <Countbar />
    </section>
  )
}

export default Toolbar;