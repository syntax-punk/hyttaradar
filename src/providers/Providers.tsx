import React from 'react';
import RestServiceProvider from './RestServiceProvider';

const Providers: React.FC = ({ children }) => {
  return (<RestServiceProvider>{children}</RestServiceProvider>);
};

export default Providers;
