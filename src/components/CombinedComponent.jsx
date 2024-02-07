import React from 'react';
import Card from './CardComponent';  // Adjust the path based on your project structure
import Overlay from './OverlayCard';  // Adjust the path based on your project structure
import Chatbot from '../chatbot';

function CombinedComponent() {
  return (
    <>
      <div>
        <Card />
      </div>
      <div>
        <Chatbot />
      </div>
      <div>
        <Overlay />
      </div>
    </>
  );
}

export default CombinedComponent;
