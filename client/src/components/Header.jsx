import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUserData } from '../redux/reducers/authReducer'

const Header = () => {
   const isAuth = useSelector((state) => state.auth.isAuth)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getUserData())
   }, [dispatch])

   return (
      <div className='header'>
         <Link to='/' className='link-styles'>
            <div className='ms-2'>
               Games Information
            </div>
         </Link>
         {isAuth ?
            <Link to='/profile' className='link-styles me-2'>
               Profile
            </Link> :
            <Link to='/login' className='link-styles me-2'>
               Login
            </Link>}
      </div>
   )
}

export default Header