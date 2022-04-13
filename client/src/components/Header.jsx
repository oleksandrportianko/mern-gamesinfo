import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <div className='header'>
      <Link to='/' className='link-styles'>
         <div className='ms-2'>
            Games Information
         </div>
      </Link>
      <Link to='/login' className='link-styles me-2'>
         Login
      </Link>
   </div>
  )
}

export default Header