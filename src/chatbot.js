
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
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [messageCount, setMessageCount] = useState(0);

  const messages = [
    'Hey there, curious minds! Lets dive into the world of Bees 🌼🐝🌻',
    './Video/bee_farm.mp4',
    'Have you ever wondered about the tiny creatures buzzing around flowers, collecting sweet nectar?',
    './Video/bee_pollinating.mp4',
    'Well, those little superheroes are none other than bees! 🐝 ',
    'Let\'s embark on a buzzing adventure to discover why these tiny creatures are so important.',
    'Bees are not just cute and fuzzy insects; they play a crucial role in our world.',
    'You see, bees are fantastic pollinators.',
    'Bees help plants make seeds by carrying pollen from one flower to another, helping them grow and reproduce.',
    'Nice to meet you!',
    'In fact, one out of every three bites of food you eat is thanks to a bee!',
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

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
    console.log('The video started playing');

  };

  const handleVideoPause = () => {
    console.log('The video was paused');

    setIsVideoPlaying(false);
  };
  // console.log(messages);
  console.log(messageList);
  // Initialize messageCount in state

  const navigate = useNavigate();
  useEffect(() => {
    const messageContainer = document.querySelector('.messages-display-container');
    messageContainer.addEventListener('scroll', handleScroll);
    return () => {
      messageContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const typeMessageWrapper = async () => {
      await typeMessage();
    };
    typeMessageWrapper();
  }, [isTyping, index, charIndex, messages, messageCount]);

  useEffect(() => {
    const lastMessageElement = document.querySelector('.new-message-container:last-child');
    lastMessageElement?.scrollIntoView({ behavior: 'smooth' });
  }, [messageList]);

  useEffect(() => {
    setIndex(0);
    setMessageCount((prevCount) => prevCount + 4);
    typeMessage();
  }, []);


  let videoArray = messages.filter(item => item.endsWith('.mp4'));


  console.log(videoArray);
  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    const scrolled = scrollTop / (scrollHeight - clientHeight);
    const messageElements = document.querySelectorAll('.new-message-container');
    messageElements.forEach((el, idx) => {
      el.style.opacity = Math.min(Math.max((idx / messageList.length) - scrolled + 0.5, 0), 1);
    });
  };

  const delay = (ms) => new Promise(res => setTimeout(res, ms));

  const typeMessage = async () => {
    if (isTyping) {
      if (charIndex < messages[index].length) {
        await delay(20);
        setMessage((prevMessage) => prevMessage + messages[index][charIndex]);
        setCharIndex((prevCharIndex) => prevCharIndex + 1);
      } else {
        setIsTyping(false);

        if (messages[index].trim() !== '') {
          setMessageList((prevMessageList) => [...prevMessageList, messages[index]]);
        }

        setMessage('');

        if (index < messageCount - 1) {
          setIndex((prevIndex) => prevIndex + 1);
          setIsTyping(true);
          setCharIndex(0);
        } else {
          // Check if the current message is a video
          if (messages[index].endsWith('.mp4')) {
            // If it's a video, wait for the video to finish playing before moving to the next message
            await delay(3000);
          } else {
            // If it's not a video, set isTyping to false
            setIsTyping(false);
          }
        }
      }
    }
  };



  // if (messageCount < messages.length) {
  //   setIsTyping(true);
  //   setMessageCount((prevCount) => prevCount + 4);
  //   await delay(3000);


  const handleClick = async () => {
    const handleClick = () => {
      if (index < messages.length) {
        setIsTyping(true);
      }
    };
  }

  // UseEffect to initialize the chatbot
  useEffect(() => {
    setIndex(0);
    setMessageCount((prevCount) => prevCount + 4);
    typeMessage();
  }, []);

  return (
    <div className="chatbot-page">
      <img src={Bee1} className="Bee-1" alt="bee" />
      <h3 onClick={() => navigate('/landing')} className="chatbot-title">
        Bee Knowledgeable
      </h3>
      <img src={Flowers1} className="chatbot-page-Flowers2" alt="Flowers-background" />
      <div className='chatbot'>

        <img src={AiIcon} className="AiIcon" alt="AiIcon" />
        {isTyping ? <img src={Dots} className="dots" alt="Dots" /> : null}
        <div className="messages-display-container" style={{ overflowY: 'scroll' }}>
          {messageList.map((item, index) => {
            if (item.endsWith('.mp4')) {
              return (
                <div key={index} className="new-message-container">
                  <video
                    key={`video-${index}`}
                    width="320"
                    height="240"
                    controls
                    autoPlay
                    muted
                    onPlay={handleVideoPlay}
                    onPause={handleVideoPause}
                  >
                    <source src={item} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              );
            } else {
              return (
                <div key={index} className="new-message-container" style={{ maxWidth: `${item.length * 10}px` }}>
                  <p className="chatbot-message">{item}</p>
                </div>
              );
            }
          })}
          {message.trim() !== '' && (
            <div className="new-message-container" style={{ maxWidth: `${message.length * 10}px` }}>
              <p className="chatbot-message">{message}</p>
            </div>
          )}
        </div>
        <div>
          {isVideoPlaying ? (
            <p>Video is playing!</p>
          ) : (
            <button className="next-message-button" onClick={handleClick}>
              Next Message
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
