import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages';
import WebDev from './pages/webdev';
import MachineLearning from './pages/machinelearning';
import Cpp from './pages/cpp';
import Python from './pages/python'
import DeepLearning from './pages/deeplearning';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/webdev" element={<WebDev/>} />
        <Route path="/machinelearning" element={<MachineLearning/>}/>
        <Route path="/cpp" element={<Cpp/>}/>
        <Route path="/python" element={<Python/>}/>
        <Route path="/deeplearning" element={<DeepLearning/>}/>
      </Routes>
    </Router>
  );
}

export default App;