import Community from 'pages/Community';
import Settings from 'pages/Settings';
import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Settings />} />
        <Route path='community' element={<Community />} />
        <Route path='*' element={<Community />} />
      </Routes>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
