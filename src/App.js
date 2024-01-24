import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './landing';
import Chatbot from './chatbot';
import CombinedComponent from './components/CombinedComponent';

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
