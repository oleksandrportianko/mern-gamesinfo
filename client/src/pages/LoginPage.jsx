import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import Login from '../components/Login'
import Registration from '../components/Registration';
import  { useNavigate } from 'react-router-dom'

const LoginPage = () => {
   const [selectedPage, setSelectedPage] = React.useState('login');
   const isAuth = useSelector((state) => state.auth.isAuth);
   let navigate = useNavigate();

   useEffect(() => {
      if (isAuth) {
         navigate('/profile')
      }
   }, [isAuth, navigate])
   return (
      <div className='login-wrapper'>
         <Link to='/' className='d-flex align-items-center back-to-main-link'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 left-arrow-svg me-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
               <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>Back to main page
         </Link>
         <div className='selected-login-reg'>
            <div className={selectedPage === 'login' ? 'navigation-log-reg selected-nav' : 'navigation-log-reg'} onClick={() => setSelectedPage('login')}>
               Login
            </div>
            <div className={selectedPage === 'reg' ? 'navigation-log-reg selected-nav' : 'navigation-log-reg'} onClick={() => setSelectedPage('reg')}>
               Register
            </div>
         </div>
         {selectedPage === 'login' ?
            <Login /> :
            <Registration />
         }
      </div>
   )
}

export default LoginPage