import React from 'react';
import Bee1 from './img/Bee1.png';
import Bee2 from './img/Bee2.png';
import Flowers1 from './img/Flowers1.png';
import Flowers2 from './img/Flowers2.png';
import './landing.css';

import { useNavigate } from 'react-router-dom';

const Landing = () => {
  let navigate = useNavigate();


  return (
    <div className="landing-page">

      <img src={Bee2} className="Bee-2" alt="bee" />
      <img src={Bee1} className="Bee-1" alt="bee" />
      <div className="landing-title">
        Bee Knowledgeable
      </div>
      <h3 className="landing-intro">Step into the world of bees.
        <br />Learn all about these beautiful workers that help life flourish.</h3>
      <div onClick={() => navigate('/chatbot')} className='button'>Learn more</div>
      <img src={Flowers1} className="landing-page-Flowers1" alt="Flowers-background" />
      <img src={Flowers2} className="landing-page-Flowers2" alt="Flowers-background" />
    </div>

  );
}

export default Landing;
