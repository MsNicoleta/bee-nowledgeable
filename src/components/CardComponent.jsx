
import 'bootstrap/dist/css/bootstrap.min.css';
import CardComponentStyle from '../Styles/CardComponentStyle.css';



import React from 'react';

const CardComponent = (props) => {
  return (
    <>
      <div className='card-container'>
        {props.details ? (
          props.details.map((value, index) => (
            <div className="the-card" key={index} onClick={() => props.onClick(index)}>
              <div className="card-image">
                <img src={value.img} alt={value.title} />
              </div>
              <div className="body-card">
                <h3 className="title-card">{value.title}</h3>
                <p className="description">{value.description}</p>
                {/* Additional content based on your needs */}
                <div className="button-card">
                  <div href={value.detailsLink} className="more-button">
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
