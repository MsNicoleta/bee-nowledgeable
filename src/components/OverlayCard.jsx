import React from 'react';
import OverlayCardStyle from '../Styles/OverlayCardStyles.css';
// Assuming you have a corresponding CSS file for styles

const OverlayCard = ({ isOpen, closeOverlay, overlayBeeDetails }) => {
  if (!isOpen) return null;

  return (
    <div className="overlay">
      <div className="overlay-card">
        <button className="close-button" onClick={closeOverlay}>X</button>
        <div className="overlay-content">
          <div className="card-image">
            <img src={overlayBeeDetails.img} alt={overlayBeeDetails.title} />
          </div>
          <h3 className="title">{overlayBeeDetails.title}</h3>
          <p className="description">{overlayBeeDetails.description}</p>
          {/* Additional content */}
        </div>
      </div>
    </div>
  );
};
export default OverlayCard;



// const CardComponent = (props) => {
//   return (
//     <>
//       <div className='card-container'>
//         {props.details ? (
//           props.details.map((value, index) => (
//             <div className="the-card" key={index} onClick={() => props.onClick(index)}>
//               <div className="card-image">
//                 <img src={value.img} alt={value.title} />
//               </div>
//               <div className="body-card">
//                 <h3 className="title-card">{value.title}</h3>
//                 <p className="description">{value.description}</p>
//                 {/* Additional content based on your needs */}
//                 <div className="button-card">
//                   <div href={value.detailsLink} className="more-button">
//                     More
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : null}
//       </div>
//     </>

//   );
// };

// export default CardComponent;



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