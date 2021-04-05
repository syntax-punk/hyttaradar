import React from 'react';
import { useEventsManager } from '../contexts/EventsManagerContext'
import '../styles/common.scss'

const Footer:React.FC = () => {
  const { eventsManager } = useEventsManager();
  const generateEvent = () => {
    eventsManager?.emit("warning", "This is the shit that happened")
  };

  return  <footer>
            {"made with <3"}
            <button onClick={generateEvent}>Alarm</button>
          </footer> 
} 

export default Footer;