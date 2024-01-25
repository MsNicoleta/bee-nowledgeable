import React from 'react';
import CardComponent from './CardComponent';  // Adjust the path based on your project structure
import Chatbot from '../chatbot';

function CombinedComponent() {
  return (
    <div>
      <div>

        <CardComponent />
      </div>

      <Chatbot />
    </div>
  );
}

export default CombinedComponent;
