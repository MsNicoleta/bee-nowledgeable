import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './landing';
import Chatbot from './chatbot';
import CardComponent from './components/card';  // Replace with the actual path to your CardComponent

function CombinedComponent() {
  return (
    <div>
      <CardComponent />
      <Chatbot />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/landing' element={<Landing />} />
        <Route path='/chatbot' element={<Chatbot />} />
        <Route path='/combined' element={<CombinedComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
