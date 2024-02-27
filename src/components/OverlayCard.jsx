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
            <p className="overlay-description">{description}</p>
            {/* Additional content */}
          </div>
          <button className="close-button" onClick={closeOverlay}>❌</button>
        </div>
      </div>
    </div>
  );
};

export default BeeOverlayCard;
