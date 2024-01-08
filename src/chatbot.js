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

  const messages = [
    'Bees 🌼🐝',
    'Hey there, curious minds! Lets dive into the world of Bees 🌼🐝',
    'Have you ever wondered about the tiny creatures buzzing around flowers, collecting sweet nectar?',
    'Well, those little superheroes are none other than bees! 🐝 ',
    'Let\'s embark on a buzzing adventure to discover why these tiny creatures are so important.',
    'Bees are not just cute and fuzzy insects; they play a crucial role in our world.',
    'You see, bees are fantastic pollinators.',
    'Bees help plants make seeds by carrying pollen from one flower to another, helping them grow and reproduce.',
    'Nice to meet you!',
    'In fact, one out of every three bites of food you eat is thanks to a bee!',
    'video playing',
    'But bees aren\'t just busy at work; they\'re also part of a big team.',
    'Honeybees, for example, live in colonies and work together to build hives, gather food, and take care of their queen. ',
    'Teamwork makes the dream work, right?',
    'So, next time you see a bee buzzing by, remember to say a little thank you!',
    'They might be small, but they sure do a big job in keeping our planet blooming and delicious. 🌸🍯',
    'Keep on buzzing with curiosity, and let\'s continue learning about the amazing world of bees! 🐝✨'

  ];
  console.log(messages);
  console.log(messageList);
  // Initialize messageCount in state
  const [messageCount, setMessageCount] = useState(0);

  const navigate = useNavigate();
  // Effect hook to handle typing animation and message rendering
  useEffect(() => {
    // Asynchronous function to simulate typing each character of a message
    const typeMessage = async () => {
      // Check if the typing animation is active
      if (isTyping) {
        // Check if there are more characters to type in the current message
        if (charIndex < messages[index].length) {
          // Introduce a delay of 30 milliseconds before typing the next character
          await delay(15);
          // Update the message with the next character
          setMessage((prevMessage) => prevMessage + messages[index][charIndex]);
          // Move to the next character index
          setCharIndex((prevCharIndex) => prevCharIndex + 1);
        } else {
          // Typing animation is complete for the current message
          setIsTyping(false);

          // Check if the message is not empty and add it to the list of displayed messages
          if (messages[index].trim() !== '') {
            setMessageList((prevMessageList) => [...prevMessageList, messages[index]]);
          }

          // Reset the message state
          setMessage('');

          // Check if there are more messages to display
          if (index < messageCount - 1) {
            // Move to the next message, re-enable typing animation, and reset character index
            setIndex((prevIndex) => prevIndex + 1);
            setIsTyping(true);
            setCharIndex(0);
          } else {
            // No more messages to display, disable typing animation
            setIsTyping(false);
          }
        }
      }
    };

    // Call the typing animation function
    typeMessage();
  }, [isTyping, index, charIndex, messages, messageCount]);


  // Function to introduce a delay using Promises
  // const delay = (duration) => new Promise((resolve) => setTimeout(resolve, duration));
  const delay = ms => new Promise(res => setTimeout(res, ms));


  // Function to handle "Next Message" button click
  const handleClick = async () => {
    if (index + 1 < messages.length) {
      setIsTyping(true);
      setIndex((prevIndex) => prevIndex + 1);
      setCharIndex(0);
      setMessage('');

      // Increment messageCount for every click
      setMessageCount(prevMessageCount => prevMessageCount + 4);

      await delay(3000);

    } else {
      // Handle end of messages
      console.log('End of messages');
    }
  };



  // Use useEffect to display the second message (index 1)
  useEffect(() => {
    setIndex(0); // Start from index 1
    setMessageCount(+1); // Set the total number of messages to 4
    handleClick();
  }, []); // Empty dependency array means this effect runs once on mount


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
        {/* {isTyping ? <img src={Dots} className="dots" alt="Dots" /> : null} */}
        {messageList.map((msg, idx) => (
          <div key={idx} className="message-container" style={{ maxWidth: `${msg.length * 10}px` }}>
            <p className="chatbot-message">{msg}</p>
          </div>
        ))}
        {message.trim() !== '' && (
          <div className="message-container" style={{ maxWidth: `${message.length * 10}px` }}>

            <p className="chatbot-message">{message}</p>
          </div>
        )}
        <button className="next-message-button" onClick={handleClick}>
          Next Message
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
