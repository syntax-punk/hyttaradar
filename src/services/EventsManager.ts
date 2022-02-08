export interface CustomEventHub {
  emit<T>(key: string, message: T): void;
  subscribe<T>(keys: Array<string | CustomEvents>, handler: (message: T) => void): () => void;
}

export enum CustomEvents {
  Warning = 'WARNING'
}

class EventsManager implements CustomEventHub {
  emit<T>(key: string | CustomEvents, message: T): void {
    const event = new CustomEvent(key, { detail: message });
    window.dispatchEvent(event);
  }

  subscribe<T>(keys: Array<string | CustomEvents>, handler: (message: T) => void): () => void {
    const eventHandler = (e: Event): void => {
      const customEvent = e as CustomEvent;
      const message = customEvent.detail as T;
      handler(message);
    };
    for (const key of keys) {
      window.addEventListener(key, eventHandler);
    }
    return () => {
      for (const key of keys) {
        window.removeEventListener(key, eventHandler, false);
      }
    };
  }
}
const eventsManager = new EventsManager();

export default eventsManager;
