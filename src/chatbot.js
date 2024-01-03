import Bee1 from './img/Bee1.png';
import Flowers1 from './img/Flowers1.png';
import AiIcon from './img/AI-Icon.svg';
import './chatbot.css';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';


const Chatbot = () => {
  const [index, setIndex] = useState(0);
  const messages = ['Hello', 'How are you?', 'Nice to meet you!', 'Goodbye']; // Add your prepared messages here

  const handleClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % messages.length);
  };

  let navigate = useNavigate();

  return (
    <div className="Chatbot">
      <header className="chatbot-page">
        <img src={Bee1} className="Bee-1" alt="bee" />
        <h3 onClick={() => navigate('/landing')} className="chatbot-title">
          Bee Knowledgeable
        </h3>
        <img src={AiIcon} className="AiIcon" alt="AiIcon" />
        <img src={Flowers1} className="Flowers1" alt="Flowers-background" />

        <p>{messages[index]}</p>
        <button className='button' onClick={handleClick}>Next Message</button>
      </header >
    </div>
  );
}

export default Chatbot;
