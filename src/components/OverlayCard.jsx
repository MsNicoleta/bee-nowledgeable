import React from 'react';
import './OverlayCardStyles.css'; // Assuming you have a corresponding CSS file for styles

const OverlayCard = ({ isOpen, closeOverlay, beeDetail }) => {
  if (!isOpen) return null;

  return (
    <div className="overlay">
      <div className="overlay-card">
        <button className="close-button" onClick={closeOverlay}>X</button>
        <div className="overlay-content">
          <div className="card-image">
            <img src={beeDetail.img} alt={beeDetail.title} />
          </div>
          <h3 className="title">{beeDetail.title}</h3>
          <p className="description">{beeDetail.description}</p>
          {/* Additional content */}
        </div>
      </div>
    </div>
  );
};

export default OverlayCard;

// import React from 'react';

// const OverlayCard = ({ img, title, description, handleOverlay }) => {
//   return (
//     <div className="overlay-card">
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <p>{description}</p>
//       <button onClick={handleOverlay}>Less</button>
//     </div>
//   );
// };

// export default OverlayCard;
