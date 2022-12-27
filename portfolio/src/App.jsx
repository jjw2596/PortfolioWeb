import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Intro from './components/blink/Intro';
import Overview from './components/overview/Overview';

function App() {
  return (
    <>
    <div className='title'>Jongwon's Portfolio</div>
    <Router>
      <Routes>
        <Route exact path="/" element={<Intro />} />
        <Route exact path="/overview" element={<Overview/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
