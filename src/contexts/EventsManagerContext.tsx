import { CustomEventHub } from '../tools/EventsManager';
import { createContext, useContext } from 'react';

export interface EventsManagerContextInterface {
    eventsManager: CustomEventHub | null;
}

const EventsManagerContext = createContext<EventsManagerContextInterface>({
    eventsManager: null
});

export const useEchoEventHub = () => {
    return useContext(EventsManagerContext);
};

export default EventsManagerContext;
