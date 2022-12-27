import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Intro from './components/blink/Intro';
import Overview from './components/overview/Overview';
import List from './components/list/List';

function App() {
  return (
    <>
    <a href='#'><div className='title'>Jongwon's Portfolio</div></a>
    <Router>
      <Routes>
        <Route exact path="/" element={<Intro />} />
        <Route exact path="/overview" element={<Overview/>} />
        <Route exact path="/list" element={<List/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
