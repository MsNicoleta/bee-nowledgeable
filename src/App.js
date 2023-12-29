import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Landing from './landing';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/landing' element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
