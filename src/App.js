import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Landing from './landing';
import Chatbot from './chatbot';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/landing' element={<Landing />} />
        <Route path='/chatbot' element={<Chatbot />} />
      </Routes>
    </Router>
  );
}

export default App;
