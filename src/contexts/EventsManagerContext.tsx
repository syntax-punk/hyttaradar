import { CustomEventHub, CustomEvents } from '../services/EventsManager';
import { createContext, useContext, useEffect } from 'react';

export interface EventsManagerContextInterface {
  eventsManager: CustomEventHub | null;
}

const EventsManagerContext = createContext<EventsManagerContextInterface>({
  eventsManager: null
});

export const useEventsManager = (): EventsManagerContextInterface => {
  return useContext(EventsManagerContext);
};

export function useEventSubscriber<T>(
  keys: Array<string | CustomEvents>,
  handler: (message: T) => void
): CustomEventHub | null {
  const { eventsManager } = useEventsManager();

  useEffect(() => {
    return eventsManager?.subscribe<T>(keys, handler);
  }, [keys, handler, eventsManager]);

  return eventsManager;
}

export default EventsManagerContext;
