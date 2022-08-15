import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import { AuthProvider } from './auth';
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './pages/Profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path={"sign-in"} element={<SignIn />}/>
        <Route path={"profile"} element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
      </Routes>
    </BrowserRouter>
  </AuthProvider>
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
