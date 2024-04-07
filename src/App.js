import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'; // Import your Home component
import About from './About.js'; // Import your About component

function App({ user }) {
  return ( 
    <Router>
      <Routes>
        {/* Parent route containing child routes */}
        <Route path="/">
          {/* Render Home component by default */}
          <Route path="/" element={<Home />} />
          {/* Additional routes */}
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
