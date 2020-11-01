import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Sections from './pages/Sections';

function App() {
  return (
    <div className="App">
      <HomePage/>
      <AboutPage/>

      {/* <Sections/> */}
    </div>
  );
}

export default App;
