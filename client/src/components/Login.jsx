import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

const Login = () => {
   const schema = yup.object({
      firstName: yup.string().required(),
      age: yup.number().positive().integer().required(),
    }).required();

   const { register, handleSubmit, watch, formState: { errors } } = useForm({
      resolver: yupResolver(schema)};
   const [selectedPage, setSelectedPage] = React.useState('login');
   const onSubmit = data => console.log(data);
 
  return (
   <div className='login-wrapper'>
      <Link to='/' className='d-flex align-items-center back-to-main-link'>
         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 left-arrow-svg me-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
         <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
         </svg>Back to main page
      </Link>
      <div className='selected-login-reg'>
         <div className={selectedPage === 'login' ? 'navigation-log-reg selected-nav' : 'navigation-log-reg' } onClick={() => setSelectedPage('login')}>
            Login
         </div>
         <div className={selectedPage === 'reg' ? 'navigation-log-reg selected-nav' : 'navigation-log-reg' } onClick={() => setSelectedPage('reg')}>
            Register
         </div>
      </div>
      {selectedPage === 'login' ? 
      <form onSubmit={handleSubmit(onSubmit)} className="login-form" >
         <input type='email' placeholder='Email adress' {...register("email", {required: true}, {pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/})} className="form-field"/>
         {errors.email && <span className='form-error'>Please enter the correct email adress</span>}
         <input type="password" placeholder='Password' {...register("password", { required: true }, {min: 6}, {max: 50})} className="form-field"/>
         {errors.password && <span className='form-error' >This field is required</span>}
         <input type="submit" className='button-form' />
      </form> : 
      <form onSubmit={handleSubmit(onSubmit)} className="reg-form" >
         <input type='text' placeholder='Your nickname' {...register("nickname", {required: true})} className="form-field"/>
         {errors.nickname && <span className='form-error'>This field is required</span>}
         <input type='text' placeholder='Email adress' {...register("email", {required: true}, {pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/})} className="form-field"/>
         {errors.email && <span className='form-error'>Please enter the correct email adress</span>}
         <input type="password" placeholder='Password' {...register("password", { required: true }, {min: 6}, {max: 50})} className="form-field"/>
         {errors.password && <span className='form-error' >This field is required</span>}
         <input type="submit" className='button-form' />
      </form>
     }
     
     
   </div>
  )
}

export default Login