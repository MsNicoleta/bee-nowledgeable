import React from 'react';
import Bee1 from './img/Bee1.png';
import Flowers1 from './img/Flowers1.png';
import './chatbot.css';

import { useNavigate } from 'react-router-dom';

const Chatbot = () => {
  let navigate = useNavigate();


  return (
    <div className="Chatbot">
      <header className="chatbot-page">

        <img src={Bee1} className="Bee-1" alt="bee" />
        <h3 onClick={() => navigate('/landing')} className="chatbot-title">
          Bee Knowledgeable
        </h3>

        <img src={Flowers1} className="Flowers1" alt="Flowers-background" />
      </header>
    </div>
  );
}

export default Chatbot;
