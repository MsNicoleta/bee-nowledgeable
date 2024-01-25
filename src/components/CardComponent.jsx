import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardComponentStyle from '../Styles/CardComponentStyle.css';
import Bee from "../img/bee-lavander.jpg";

const CardComponent = () => {
  return (
    <div className="the-card">
      <div className=" card-image" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}>
        <img src={Bee} alt='...' />
      </div>
      <div className="body-card">
        <h5 className="title-card">Card title</h5>
        <p className="text-card">
          Some quick example text to build on the card title and make up the bulk of the card's content.
          Some quick example text to build on the card title and make up the bulk of the card's content.
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <a href="#" className="more-button">Button</a>
      </div>
    </div>
  );
}

export default CardComponent;
