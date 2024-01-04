import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Bee1 from './img/Bee1.png';
import Flowers1 from './img/Flowers1.png';
import AiIcon from './img/AI-Icon.svg';
import Dots from './img/dot.svg';
import './chatbot.css';

const Chatbot = () => {
  const [index, setIndex] = useState(0);
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);
  const [messageList, setMessageList] = useState([]);
  const messages = ['Hey there, curious minds! 🌼🐝', 'Have you ever wondered about the tiny creatures buzzing around flowers, collecting sweet nectar?', 'Well, those little superheroes are none other than bees! 🐝 ', 'Let\'s embark on a buzzing adventure to discover why these tiny creatures are so important.', 'Bees are not just cute and fuzzy insects; they play a crucial role in our world.', 'You see, bees are fantastic pollinators.', 'Bees help plants make seeds by carrying pollen from one flower to another, helping them grow and reproduce.', 'Nice to meet you!', 'In fact, one out of every three bites of food you eat is thanks to a bee!', 'video playing', 'But bees aren\'t just busy at work; they\'re also part of a big team.', 'Honeybees, for example, live in colonies and work together to build hives, gather food, and take care of their queen. ', 'Teamwork makes the dream work, right?', 'So, next time you see a bee buzzing by, remember to say a little thank you!', 'They might be small, but they sure do a big job in keeping our planet blooming and delicious. 🌸🍯', 'Keep on buzzing with curiosity, and let\'s continue learning about the amazing world of bees! 🐝✨'];

  const delay = (duration) => new Promise((resolve) => setTimeout(resolve, duration));

  const handleClick = async () => {
    setIsTyping(true);
    setIndex((prevIndex) => (prevIndex + 1) % messages.length);
    setCharIndex(0);
    setMessage('');


  };



  // Effect hook to handle typing animation
  useEffect(() => {
    const typeMessage = async () => {
      if (isTyping) {
        if (charIndex < messages[index].length) {
          await delay(30); // Adjust the delay between characters (e.g., 30 milliseconds)
          setMessage((prevMessage) => prevMessage + messages[index][charIndex]);
          setCharIndex((prevCharIndex) => prevCharIndex + 1);
        } else {
          setIsTyping(false);

          // Add the message to the list of displayed messages only if it's not an empty string
          if (messages[index].trim() !== '') {
            setMessageList((prevMessageList) => [...prevMessageList, messages[index]]);
          }

          // Reset the message immediately
          setMessage('');
          setIndex((prevIndex) => (prevIndex + 1) % messages.length);
          // Wait for 3 seconds before starting the next message
          await delay(5000); // Add a delay of 3000 milliseconds (3 seconds)
          setIsTyping(true);
          setCharIndex(0);


        }
      }
    };

    typeMessage();
  }, [isTyping, index, charIndex, messages]);




  let navigate = useNavigate();

  return (
    <div className="chatbot-page">
      <img src={Bee1} className="Bee-1" alt="bee" />
      <h3 onClick={() => navigate('/landing')} className="chatbot-title">
        Bee Knowledgeable
      </h3>
      <img src={Flowers1} className="Flowers1" alt="Flowers-background" />
      <img src={AiIcon} className="AiIcon" alt="AiIcon" />
      {isTyping ? <img src={Dots} className="dots" alt="Dots" /> : null}
      <div className="chatbot-container">
        {messageList.map((msg, idx) => (
          <div key={idx} className="message-container">
            <p className="chatbot-message">{msg}</p>
          </div>
        ))}
        {message.trim() !== '' && (
          <div className="message-container">
            <p className="chatbot-message">{message}</p>
          </div>
        )}
      </div>
      {isTyping ? <img src={Dots} className="dots" alt="Dots" /> : null}
      <button className="next-message-button" onClick={handleClick}>
        Next Message
      </button>
    </div>
  );
};

export default Chatbot;
