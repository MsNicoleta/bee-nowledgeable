
import 'bootstrap/dist/css/bootstrap.min.css';
import CardComponentStyle from '../Styles/CardComponentStyle.css';
import OverlayBeeDetails from './large-cardData.jsx';
import { useState } from "react";



import React from 'react';

const CardComponent = (props) => {
  const { details, onClick, onDetailsClick } = props;

  return (
    <>
      <div className='card-container'>
        {details ? (
          details.map((value, index) => (
            <div className="the-card" key={index}>
              <div className="card-image">
                <img src={value.img} alt={value.title} />
              </div>
              <div className="body-card" onClick={() => onClick(index)}>
                <h3 className="title-card">{value.title}</h3>
                <p className="description">{value.description}</p>
                {/* Additional content based on your needs */}
                <div className="button-card-div">
                  <div className="more-button" onClick={() => onDetailsClick(OverlayBeeDetails[index])}>
                    More
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : null}
      </div>
    </>
  );
};

export default CardComponent;
