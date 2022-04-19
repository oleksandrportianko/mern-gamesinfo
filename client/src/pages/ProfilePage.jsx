import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
   const isAuth = useSelector((state) => state.auth.isAuth);
   const userData = useSelector((state) => state.auth.userData)
   let navigate = useNavigate();

   useEffect(() => {
      console.log('in useEffect')
      if (!isAuth) {
         navigate('/login')
      }
   }, [isAuth, navigate])


  return (
    <div>
      <h1>Profile Page</h1>
      { userData.map((data) => {
         return (
            <div key={data._id}>
               <div>nickname: {data.nickname}</div>
               <div>email: {data.email}</div>
            </div>
         )
      }) }
    </div>
  )
}

export default ProfilePage