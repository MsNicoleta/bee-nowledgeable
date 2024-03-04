import React from 'react';
import OverlayCardStyle from '../Styles/OverlayCardStyles.css';
const BeeOverlayCard = ({ overlayBeeDetails, closeOverlay, overlayBeeDetailsArray }) => {
  if (!overlayBeeDetails) return null;

  const { img, title, description } = overlayBeeDetails;

  return (
    <div className="overlay">
      <div className="overlay-card">
        <div className="overlay-content">
          <div className="overlay-image">
            <img src={img} alt={title} />
          </div>
          <div className='overlay-details'>
            <h3 className="overlay-title">{title}</h3>
            <div className="overlay-description"> {description.map((sentence, index) => (
              <p key={index}>{sentence}</p>
            ))}
            </div>
          </div>
          <button className="close-button" onClick={closeOverlay}>❌</button>
        </div>
      </div>
    </div>
  );
};

export default BeeOverlayCard;




// import React, { useState } from 'react';
// import OverlayCardStyle from '../Styles/OverlayCardStyles.css';
// import { motion } from "framer-motion";

// const BeeOverlayCard = ({ overlayBeeDetails, closeOverlay, isExpanded, setIsExpanded, overlayBeeDetailsArray }) => {
//   const { img, title, description } = overlayBeeDetails;

//   return (
//     <motion.div className="overlay" /* animate={isExpanded ? "expanded" : "collapsed"} initial="collapsed" exit="collapsed" */>
//       <motion.div className="overlay-card">
//         <motion.div className="overlay-content" animate="expanded">
//           <motion.div className="overlay-image">
//             <img src={img} alt={title} />
//           </motion.div>
//           <motion.div className='overlay-details'>
//             <h3 className="overlay-title">{title}</h3>
//             <motion.div className="overlay-description">
//               {description.map((sentence, index) => (
//                 <p key={index}>{sentence}</p>
//               ))}
//             </motion.div>
//           </motion.div>
//           <button className="close-button" onClick={closeOverlay}>❌</button>
//         </motion.div>
//       </motion.div>

//     </motion.div>
//   );
// };

// export default BeeOverlayCard;




// import React, { useState } from 'react';
// import OverlayCardStyle from '../Styles/OverlayCardStyles.css';
// import { motion } from "framer-motion";

// const BeeOverlayCard = ({ overlayBeeDetails, closeOverlay, isExpanded, setIsExpanded, overlayBeeDetailsArray }) => {
//   if (!overlayBeeDetails) return null;

//   const { img, title, description } = overlayBeeDetails;

//   const handleExpand = () => {
//     setIsExpanded(!isExpanded);
//   };

//   const overlayVariants = {
//     expanded: { opacity: 1, scale: 1 },
//     collapsed: { opacity: 0, scale: 0.9 },
//   };

//   const descriptionVariants = {
//     expanded: { opacity: 1, y: 0 },
//     collapsed: { opacity: 0, y: -50 },
//   };

//   return (
//     <motion.div className="overlay" animate={isExpanded ? "expanded" : "collapsed"} initial="collapsed" exit="collapsed">
//       <motion.div className="overlay-card">
//         <motion.div className="overlay-content" variants={overlayVariants} animate={isExpanded ? "expanded" : "collapsed"}>
//           <motion.div className="overlay-image">
//             <img src={img} alt={title} />
//           </motion.div>
//           <motion.div className='overlay-details'>
//             <h3 className="overlay-title">{title}</h3>
//             <motion.div className="overlay-description" variants={descriptionVariants} animate={isExpanded ? "expanded" : "collapsed"}>
//               {description.map((sentence, index) => (
//                 <p key={index}>{sentence}</p>
//               ))}
//             </motion.div>
//           </motion.div>
//           <button className="close-button" onClick={closeOverlay}>❌</button>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default BeeOverlayCard;
