import 'bootstrap/dist/css/bootstrap.min.css';
import CardComponentStyle from '../Styles/CardComponentStyle.css';
import OverlayBeeDetails from './large-cardData.jsx';
import { useState } from "react";
import { motion } from "framer-motion";
import React from "./OverlayCard.jsx";
import BeeOverlayCard from "./OverlayCard.jsx";

const variants = {
  expanded: {
    height: "100%",
    width: "100%",
    borderRadius: 0,
    boxShadow: "0px 0px 5px 5px rgba(0,0,0,0.2)",
    transition: {
      duration: 0.5,
      type: "tween",
    },
  },
  collapsed: {
    height: "fit-content",
    width: "200px",
    borderRadius: "10px",
    boxShadow: "none",
    transition: {
      duration: 0.5,
      type: "tween",
    },
  },
};

const CardComponent = (props) => {
  const { details, onClick, onDetailsClick } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const selectedBee = details[0]; // Replace this with the actual selection logic for the overlay bee details

  // Convert the description to an array of sentences
  const descriptionArray = selectedBee.description.split(". ");

  const handleCloseOverlay = () => {
    setIsExpanded(false);
  };

  return (
    <>
      <motion.div className='card-wrapper'>
        {details ? (
          details.map((value, index) => (
            <motion.div className="the-card" key={index}>
              <motion.div className="card-image">
                <img src={value.img} alt={value.title} />
              </motion.div>
              <motion.div className="body-card" variants={variants} initial="collapsed" animate={isExpanded ? "expanded" : "collapsed"} onClick={() => onClick(index)}>
                <motion.h3 className="title-card">{value.title}</motion.h3>
                <p className="description">{value.description}</p>
                {/* Additional content */}
                <motion.div className="button-card-div" variants={variants}>
                  <motion.div className="more-button" onClick={() => {
                    onDetailsClick(OverlayBeeDetails[index]);
                    setIsExpanded(true);
                  }}>
                    More
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))
        ) : null}
      </motion.div>
      {isExpanded && (
        <BeeOverlayCard closeOverlay={handleCloseOverlay} isExpanded={isExpanded} setIsExpanded={setIsExpanded} overlayBeeDetails={selectedBee} description={descriptionArray} />
      )}
    </>
  );
};

export default CardComponent;
