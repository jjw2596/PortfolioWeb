import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Intro from './components/blink/Intro';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Intro />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
