import React, { useState, useEffect, useCallback } from 'react';
import { useEventsManager } from '../../contexts/EventsManagerContext';

const eventKeys = ['warning', 'info', 'danger'];

const GlobalToaster: React.FC = () => {
  const [toaster, setToasterData] = useState<{
    display: boolean;
    message: string;
  }>({
    display: false,
    message: ''
  });
  const { eventsManager } = useEventsManager();

  const handleEvent = useCallback(
    (message: string) => {
      console.log('-----> ', message);
      setToasterData({
        display: true,
        message
      });

      setTimeout(() => {
        setToasterData({
          display: false,
          message: ''
        });
      }, 1000);
    },
    [setToasterData]
  );

  useEffect(() => {
    return eventsManager?.subscribe<string>(eventKeys, handleEvent);
  }, [eventsManager, handleEvent]);

  return toaster.display ? <article className="global-toast">{toaster.message}</article> : null;
};

export default GlobalToaster;
