import React from 'react';
import OverlayCardStyle from '../Styles/OverlayCardStyles.css';


const BeeOverlayCard = ({ overlayBeeDetails, closeOverlay, overlayBeeDetailsArray }) => {
  if (!overlayBeeDetails) return null;

  const { img, title, description } = overlayBeeDetails;

  return (
    <div className="overlay">
      <div className="overlay-card">
        <button className="close-button" onClick={closeOverlay}>❌</button>
        <div className="overlay-content">
          <div className="card-image">
            <img src={img} alt={title} />
          </div>
          <h3 className="title">{title}</h3>
          <p className="description">{description}</p>
          {/* Additional content */}
        </div>
      </div>
    </div>
  );
};

export default BeeOverlayCard;
