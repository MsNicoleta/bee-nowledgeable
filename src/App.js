import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Landing from './landing';
import Chatbot from './chatbot';
import CombinedComponent from './components/CombinedComponent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/landing' element={<Landing />} />
        <Route path='/chatbot' element={<Chatbot />} />
        <Route path='/combined' element={<CombinedComponent />} />
        <Route path='*' to='/' />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
