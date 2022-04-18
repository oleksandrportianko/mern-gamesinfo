import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';
import LoginPage from './pages/LoginPage.jsx'
import Posts from './components/Posts';
import { Route, Routes } from "react-router-dom";
import Header from './components/Header';

function App() {
  return (
      <div className="wrapper">
         <Header />
         <div className='main-content'>
            <Routes>
               <Route path="/" element={<Posts />}></Route>
               <Route path="/login" element={<LoginPage />}></Route>
            </Routes>
         </div>
      </div>
  )
}

export default App;
