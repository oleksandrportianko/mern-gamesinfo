import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.css';
import AddPostForm from './components/AddPostForm';
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
               <Route path="/login" element={<AddPostForm />}></Route>
            </Routes>
         </div>
      </div>
  )
}

export default App;
