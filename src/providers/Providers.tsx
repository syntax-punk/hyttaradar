import React from 'react';
import RestServiceProvider from './RestServiceProvider';
import ModalProvider from './ModalProvider';

const Providers: React.FC = ({ children }) => {
  return (
    <RestServiceProvider>
      <ModalProvider>
        {children}
      </ModalProvider>
    </RestServiceProvider>
  );
};

export default Providers;
