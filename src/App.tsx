// import Community from 'pages/Community';
// import Settings from 'pages/Settings';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from 'pages/Auth';
import Home from 'pages/Auth/Home';
import Login from 'pages/Auth/Login';
import Register from 'pages/Auth/Register';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
        {/* <Route path='/' element={<Settings />} />
        <Route path='community' element={<Community />} /> */}
        {/* <Route path='*' element={<Community />} /> */}
        <Route element={<Auth />} >
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
        </Route>
      </Routes>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
