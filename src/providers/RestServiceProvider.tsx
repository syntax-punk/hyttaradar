import React, { useMemo } from 'react';
import RestServiceContext from '../contexts/RestServiceContext';
import RestService from '../services/RestService';

const ApiServiceProvider: React.FC = ({ children }) => {
  const restService = useMemo(() => new RestService(), []);

  return (
    <RestServiceContext.Provider value={{ restService }}>{children}</RestServiceContext.Provider>
  );
};

export default ApiServiceProvider;
