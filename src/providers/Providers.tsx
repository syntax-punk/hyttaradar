import React from 'react';
import RestServiceProvider from './RestServiceProvider';
import ModalProvider from './ModalProvider';
import EventsManagerProvider from './EventsManagerProvider';

const Providers: React.FC = ({ children }) => {
  return (
    <EventsManagerProvider>
      <RestServiceProvider>
        <ModalProvider>
          {children}
        </ModalProvider>
      </RestServiceProvider>
    </EventsManagerProvider>
  );
};

export default Providers;
