import eventsManager from '../services/EventsManager'
import React, { useMemo } from 'react';
import EventsManagerContext from '../contexts/EventsManagerContext';

const EventsManagerProvider: React.FC = ({ children }) => {
    const manager = useMemo(() => ({ eventsManager }), []);

    return <EventsManagerContext.Provider value={manager}>{children}</EventsManagerContext.Provider>;
};

export default EventsManagerProvider;
