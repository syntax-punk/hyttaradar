import { CustomEventHub } from '../services/EventsManager';
import { createContext, useContext } from 'react';

export interface EventsManagerContextInterface {
    eventsManager: CustomEventHub | null;
}

const EventsManagerContext = createContext<EventsManagerContextInterface>({
    eventsManager: null
});

export const useEventsManager = () => {
    return useContext(EventsManagerContext);
};

export default EventsManagerContext;
