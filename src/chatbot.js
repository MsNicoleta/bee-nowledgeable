import Bee1 from './img/Bee1.png';
import Flowers1 from './img/Flowers1.png';
import AiIcon from './img/AI-Icon.svg';
import './chatbot.css';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';


const Chatbot = () => {
  const [index, setIndex] = useState(0);
  const messages = ['Hello', 'How are you?', 'Hey there, curious minds! 🌼🐝', 'Have you ever wondered about the tiny creatures buzzing around flowers, collecting sweet nectar?', 'Well, those little superheroes are none other than bees! 🐝 ', 'Let\'s embark on a buzzing adventure to discover why these tiny creatures are so important.', 'Bees are not just cute and fuzzy insects; they play a crucial role in our world.', 'You see, bees are fantastic pollinators.', 'Bees help plants make seeds by carrying pollen from one flower to another, helping them grow and reproduce.', 'Nice to meet you!', 'In fact, one out of every three bites of food you eat is thanks to a bee!', 'video playing', 'But bees aren\'t just busy at work; they\'re also part of a big team.', 'Honeybees, for example, live in colonies and work together to build hives, gather food, and take care of their queen. ', '',]; // Add your prepared messages here

  const handleClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % messages.length);
  };

  let navigate = useNavigate();

  return (
    <div className="chatbot-page">
      <img src={Bee1} className="Bee-1" alt="bee" />
      <h3 onClick={() => navigate('/landing')} className="chatbot-title">
        Bee Knowledgeable
      </h3>
      <img src={Flowers1} className="Flowers1" alt="Flowers-background" />
      <div className="chatbot-container">

        <img src={AiIcon} className="AiIcon" alt="AiIcon" />
        <p className='chatbot-message'>{messages[index]}</p>
      </div>
      <button className='next-message-button' onClick={handleClick}>Next Message</button>
    </div >
  );
}

export default Chatbot;
