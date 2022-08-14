import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path={"sign-in"} element={<SignIn />}/>
      </Routes>
    </BrowserRouter>
  // </React.StrictMode>
);
  
  // ReactDOM.render(
  //   // <React.StrictMode>
  //     <BrowserRouter>
  //       <Routes>
  //         <Route index element={<Home/>}/>
  //         <Route path={"sign-in"} element={<SignIn/>}/>
  //       </Routes>
  //     </BrowserRouter>,
  //   // </React.StrictMode>
  //   document.getElementById('root')
  // );
