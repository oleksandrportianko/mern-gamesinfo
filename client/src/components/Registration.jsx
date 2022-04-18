import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useDispatch } from 'react-redux';
import { registrationUserGetData } from '../redux/reducers/authReducer';

const Registration = () => {
   const dispatch = useDispatch();
   const schema = yup.object({
      nickname: yup.string()
         .min(6, 'Too Short!')
         .max(50, 'Too Long!')
         .required('This field is required'),
      password: yup.string()
         .min(2, 'Too Short!')
         .max(50, 'Too Long!')
         .required('This field is required'),
      passwordConfirm: yup.string()
         .oneOf([yup.ref('password'), null], 'Passwords must match'),
      email: yup.string().email('Invalid email').required('This field is required'),
   }).required();

   const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(schema),
      mode: 'onBlur'
   });

   const onSubmit = data => {
      dispatch(registrationUserGetData(data.nickname, data.email, data.password));
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)} className="reg-form mt-1" >
         <input type='text' placeholder='Your nickname' {...register("nickname")} className="form-field" />
         <p className='form-error'>{errors.nickname?.message}</p>
         <input type='text' placeholder='Email adress' {...register("email")} className="form-field" />
         <p className='form-error'>{errors.email?.message}</p>
         <input type="password" placeholder='Password' {...register("password")} className="form-field" />
         <p className='form-error'>{errors.password?.message}</p>
         <input type="password" placeholder='Password' {...register("passwordConfirm")} className="form-field" />
         <p className='form-error'>{errors.passwordConfirm?.message}</p>
         <input type="submit" className='button-form' />
      </form>
   )
}

export default Registration