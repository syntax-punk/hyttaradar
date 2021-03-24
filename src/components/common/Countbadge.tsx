import React from 'react';
import { useSelector } from 'react-redux';
import { GeneralStore } from '../../redux/reducers/hyttaReducer';

const Countbadge: React.FC = () => {
  const store = useSelector((store: GeneralStore) => store);

  return(
    <span className="count-badge">
      {store.count }
    </span>
  )
}

export default Countbadge;