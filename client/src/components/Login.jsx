import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { loginUserGetData } from '../redux/reducers/authReducer';
import { useDispatch } from 'react-redux';

const Login = () => {
   const dispatch = useDispatch();
   const schema = yup.object({
      password: yup.string()
         .min(6, 'Too Short!')
         .max(50, 'Too Long!')
         .required('This field is required'),
      email: yup.string().email('Invalid email').required('This field is required'),
   })

   const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(schema),
      mode: 'onBlur'
   });
   const onSubmit = data => {
      dispatch(loginUserGetData(data.email, data.password));
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)} className="login-form mt-1" >
         <input type='text' placeholder='Email adress' {...register("email")} className="form-field" />
         <p className='form-error'>{errors.email?.message}</p>
         <input type="password" placeholder='Password' {...register("password")} className="form-field" />
         <p className='form-error'>{errors.password?.message}</p>
         <input type="submit" className='button-form' />
      </form>
   )
}

export default Login