// // Import necessary dependencies and styles
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import ReactPlayer from 'react-player';
// import Bee1 from './img/Bee1.png';
// import Flowers1 from './img/Flowers1.png';
// import AiIcon from './img/AI-Icon.svg';
// import beeFarm from './Video/bee_farm.mp4'
// import beePollinating from './Video/bee_pollinating.mp4'
// import Dots from './img/dot.svg';
// import './chatbot.css';

// // Define the main Chatbot component
// const Chatbot = () => {
//   // State variables to manage the chatbot's state
//   const [index, setIndex] = useState(3); // Track the index of the current message in the array
//   const [message, setMessage] = useState(''); // Track the currently typed message
//   const [isTyping, setIsTyping] = useState(true); // Flag to indicate if the chatbot is currently typing
//   const [charIndex, setCharIndex] = useState(0); // Index of the character being typed
//   const [messageList, setMessageList] = useState([]); // List of messages displayed in the chat
//   const [isVideoPlaying, setIsVideoPlaying] = React.useState(false) // Flag to indicate if a video is currently playing
//   const [messageCount, setMessageCount] = useState(0); // Counter for messages

//   // Messages array containing text and video messages
//   const messages = [
//     'Hey there, curious minds! Lets dive into the world of Bees 🌼🐝🌻',
//     'Have you ever wondered about the tiny creatures buzzing around flowers, collecting sweet nectar?',
//     beePollinating,
//     'Well, those little superheroes are none other than bees! 🐝 ',
//     'Let\'s embark on a buzzing adventure to discover why these tiny creatures are so important.',
//     'Bees are not just cute and fuzzy insects; they play a crucial role in our world.',
//     'You see, bees are fantastic pollinators.',
//     'Bees help plants make seeds by carrying pollen from one flower to another, helping them grow and reproduce.',
//     'Nice to meet you!',
//     'In fact, one out of every three bites of food you eat is thanks to a bee!',
//     beeFarm,
//     'But bees aren\'t just busy at work; they\'re also part of a big team.',
//     'Honeybees, for example, live in colonies and work together to build hives, gather food, and take care of their queen. ',
//     'Teamwork makes the dream work, right?',
//     'So, next time you see a bee buzzing by, remember to say a little thank you!',
//     'They might be small, but they sure do a big job in keeping our planet blooming and delicious. 🌸🍯',
//     'Keep on buzzing with curiosity, and let\'s continue learning about the amazing world of bees! 🐝✨'
//   ];

//   // Event handlers for video play and pause
//   const handleVideoPlay = () => {
//     setIsVideoPlaying(true);
//     console.log('The video started playing');
//   };

//   const handleVideoPause = () => {
//     console.log('The video was paused');
//     setIsVideoPlaying(false);
//   };

//   // React Router hook for navigation
//   const navigate = useNavigate();

//   // useEffect hook to handle scrolling
//   useEffect(() => {
//     const messageContainer = document.querySelector('.messages-display-container');
//     messageContainer.addEventListener('scroll', handleScroll);
//     return () => {
//       messageContainer.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   // useEffect hook for typing messages
//   useEffect(() => {
//     const typeMessageWrapper = async () => {
//       await typeMessage();
//     };
//     typeMessageWrapper();
//   }, [isTyping, index, charIndex, messages, messageCount]);

//   // useEffect hook to scroll to the last message


//   // useEffect hook for initial setup
//   useEffect(() => {
//     setIndex(0);
//     setMessageCount((prevCount) => prevCount + 4);
//     typeMessage();
//   }, []);


//   useEffect(() => {
//     const messageContainer = document.querySelector('.messages-display-container');
//     messageContainer.addEventListener('scroll', handleScroll);
//     return () => {
//       messageContainer.removeEventListener('scroll', handleScroll);
//     };
//   }, [messageList]);

//   // Filter video messages from the messages array
//   let videoArray = messages.filter(item => item.endsWith('.mp4'));


//   console.log(videoArray);
//   // Scroll event handler to control opacity of messages and focus on typing message
//   const handleScroll = () => {
//     const messageContainer = document.querySelector('.messages-display-container');

//     // Check if the container is scrolled to the top
//     if (messageContainer.scrollTop === 0) {
//       // If it is, set the scroll behavior to auto (normal scrolling)
//       messageContainer.style.scrollBehavior = 'auto';
//     } else {
//       // If it's not at the top, set the scroll behavior to smooth (inverted scrolling)
//       messageContainer.style.scrollBehavior = 'smooth';
//     }
//   };

//   // Utility function for delaying execution
//   const delay = (ms) => new Promise(res => setTimeout(res, ms));

//   // Variable to track if "Next Message" button is clicked
//   let nextMessageButtonClicked = false;
//   // Function to simulate typing messages
//   // This is an async function that types a message character by character
//   const typeMessage = async () => {
//     // Check if the isTyping flag is true
//     if (isTyping) {
//       // Check if the charIndex is less than the length of the current message
//       if (charIndex < messages[index].length) {
//         // Wait for 30 milliseconds
//         await delay(30);
//         // Append the current character to the message state
//         setMessage((prevMessage) => prevMessage + messages[index][charIndex]);
//         // Increment the charIndex state
//         setCharIndex((prevCharIndex) => prevCharIndex + 1);
//       } else {
//         // Set the isTyping flag to false
//         setIsTyping(false);

//         // Check if the current message is not empty
//         if (messages[index].trim() !== '') {
//           // Add the current message to the messageList state
//           setMessageList((prevMessageList) => [...prevMessageList, messages[index]]);
//         }

//         // Clear the message state
//         setMessage('');

//         // Check if the current index is less than messageCount + 3 and the number of displayed items is less than 4
//         if (index < messageCount + 3 && messageList.length % 4 !== 3) {
//           // If it is, wait for 3 seconds
//           await delay(3000);
//           // Increment the index state
//           setIndex((prevIndex) => prevIndex + 1);
//           // Set the isTyping flag to true
//           setIsTyping(true);
//           // Reset the charIndex state
//           setCharIndex(0);

//           // Check if the current message is a video
//           if (messages[index].endsWith('.mp4')) {
//             // Set the isVideoPlaying flag to true
//             setIsVideoPlaying(true);
//             // Wait for 5 seconds or the duration of the video
//             await delay(5000); // Adjust the delay as needed based on the video length
//             // Set the isVideoPlaying flag to false
//             setIsVideoPlaying(false);
//           }
//           // Get the last message element inside the container
//           const lastMessage = document.querySelector('.new-message-container:last-child');
//           // Scroll the container to the last message
//           lastMessage.scrollIntoView({ behavior: 'smooth', block: 'end' }); // Scroll to the bottom
//         } else {
//           // If it's not, stop typing until the button is clicked
//           setIsTyping(false);
//         }
//       }
//     }
//   };




//   const handleClick = async () => {
//     if (index + 3 < messages.length) {
//       setIsTyping(true);
//       setIndex((prevIndex) => prevIndex + 1);
//       setCharIndex(0);
//       setMessage('');

//       // If the next message is a video, wait for it to finish playing before moving to the next
//       if (messages[index + 1].endsWith('.mp4')) {
//         setIsVideoPlaying(true);
//         await delay(3000); // Adjust the delay based on the video length
//         setIsVideoPlaying(false);
//       }

//       // Get the messages display container
//       const messageContainer = document.querySelector('.messages-display-container');
//       // Scroll up the messages currently shown in the container
//       messageContainer.scrollTop -= 30;

//       // Wait for a short delay before starting to type the new set of messages
//       await delay(500);

//       // Scroll to the top to show the most recent 4 messages
//       messageContainer.scrollTop = 0;
//     } else {
//       console.log('End of messages');
//     }
//   };


//   // Return the JSX for rendering the Chatbot component
//   return (
//     <div className="chatbot-page">
//       <img src={Bee1} className="Bee-1" alt="bee" />
//       <h3 onClick={() => navigate('/landing')} className="chatbot-title">
//         Bee Knowledgeable
//       </h3>
//       <img src={Flowers1} className="chatbot-page-Flowers2" alt="Flowers-background" />
//       <div className='chatbot'>
//         <img src={AiIcon} className="AiIcon" alt="AiIcon" />
//         {isTyping ? <img src={Dots} className="dots" alt="Dots" /> : null}

//         <div className="messages-display-container" style={{ overflowY: 'scroll' }}>
//           {/* Render each message in the messageList array */}
//           {messageList.map((item, index) => {
//             if (item.endsWith('.mp4')) {
//               // If the message is a video, render the ReactPlayer component
//               return (
//                 <div key={index} className="video-display-container">
//                   <ReactPlayer
//                     key={`video-${index}`}
//                     url={item}
//                     controls
//                     width="320"
//                     height="240"
//                     playing={isVideoPlaying}
//                     onPlay={handleVideoPlay}
//                     onPause={handleVideoPause}
//                   />
//                 </div>

//               );
//             } else {
//               // If the message is text, render a div with the text message
//               return (
//                 <div key={index} className="new-message-container message-container" style={{ maxWidth: `${item.length * 10.5}px` }}>
//                   <p className="chatbot-message">{item}</p>
//                 </div>
//               );
//             }
//           })}
//           {/* Render the current typing message */}
//           {message.trim() !== '' && (
//             <div className="new-message-container" style={{ maxWidth: `${message.length * 12}px` }}>
//               <p className="chatbot-message">{message}</p>
//             </div>
//           )}
//         </div>

//         <div>
//           {/* Show "Next Message" button when a video is not playing */}
//           {isVideoPlaying ? (
//             <p></p>
//           ) : (
//             <button className="next-message-button" onClick={handleClick}>
//               Next Message
//             </button>
//           )}
//         </div>
//       </div>
//     </div >
//   );
// };

// // Export the Chatbot component
// export default Chatbot;
