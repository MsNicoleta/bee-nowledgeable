import Bee1 from './img/Bee1.png';
import Flowers1 from './img/Flowers1.png';
import AiIcon from './img/AI-Icon.svg';
import Dots from './img/dot.svg';
import './chatbot.css';
import { useNavigate } from 'react-router-dom';
// Import necessary libraries and components
import React, { useState, useEffect } from 'react';

const Chatbot = () => {
  // Define state variables
  const [index, setIndex] = useState(0); // Current index in the messages array
  const [message, setMessage] = useState(''); // Current message being typed
  const [isTyping, setIsTyping] = useState(true); // Whether the chatbot is currently typing
  const [charIndex, setCharIndex] = useState(0); // Current character index in the message
  const [messageList, setMessageList] = useState([]); // List of all messages that have been displayed

  // Array of messages to be displayed
  const messages = ['Hello', 'How are you?', 'Hey there, curious minds! 🌼🐝', 'Have you ever wondered about the tiny creatures buzzing around flowers, collecting sweet nectar?', 'Well, those little superheroes are none other than bees! 🐝 ', 'Let\'s embark on a buzzing adventure to discover why these tiny creatures are so important.', 'Bees are not just cute and fuzzy insects; they play a crucial role in our world.', 'You see, bees are fantastic pollinators.', 'Bees help plants make seeds by carrying pollen from one flower to another, helping them grow and reproduce.', 'Nice to meet you!', 'In fact, one out of every three bites of food you eat is thanks to a bee!', 'video playing', 'But bees aren\'t just busy at work; they\'re also part of a big team.', 'Honeybees, for example, live in colonies and work together to build hives, gather food, and take care of their queen. ', 'Teamwork makes the dream work, right?', 'So, next time you see a bee buzzing by, remember to say a little thank you!', 'They might be small, but they sure do a big job in keeping our planet blooming and delicious. 🌸🍯', 'Keep on buzzing with curiosity, and let\'s continue learning about the amazing world of bees! 🐝✨'];

  // Function to handle button click
  const handleClick = () => {
    setIsTyping(true); // Start typing the next message
    setIndex((prevIndex) => (prevIndex + 1) % messages.length); // Move to the next message in the array
    setCharIndex(0); // Reset character index
    setMessage(''); // Clear the current message
  };

  // Effect hook to handle typing animation
  useEffect(() => {
    if (isTyping) { // If the chatbot is currently typing
      if (charIndex < messages[index].length) { // If there are still characters left in the message
        setTimeout(() => { // Wait for a short delay
          setMessage(prevMessage => prevMessage + messages[index][charIndex]); // Add the next character to the message
          setCharIndex(prevCharIndex => prevCharIndex + 1); // Move to the next character
        }, 30); // Adjust the delay as needed
      } else { // If the message is fully typed
        setIsTyping(false); // Stop typing
        setMessageList(prevMessageList => [...prevMessageList, messages[index]]); // Add the message to the list of displayed messages

        // Clear the message after a delay
        setTimeout(() => {
          setMessage(''); // Clear the current message
        }, 10); // Adjust the delay as needed
      }
    }
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
          <div key={idx} className='message-container'>
            <p className='chatbot-message'>{msg}</p>
          </div>
        ))}
        <div className='message-container'>
          <p className='chatbot-message'>
            {message}
          </p>
        </div>
      </div>
      <button className='next-message-button' onClick={handleClick}>Next Message</button>
    </div >
  );
}

export default Chatbot;
