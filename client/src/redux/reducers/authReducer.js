import { ApiService } from '../../api/api';

const SET_LOGIN_USER_DATA = 'SET-LOGIN-USER-DATA';

let initialState = {
  isAuth: false,
};

let postsReducer = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export const setLoginUserData = (userData) => ({ type: SET_LOGIN_USER_DATA, userData });

export const loginUserGetData = (email, password) => async (dispatch) => {
   try {
      const data = await ApiService.loginUser(email, password);
      console.log(data)
      dispatch(setLoginUserData(data));
   }
   catch (error) {
      console.log(error.message);
   }
 };

export const registrationUserGetData = (nickname, email, password) => async (dispatch) => {
   try {
      const data = await ApiService.registerUser(nickname, email, password);
      console.log(data)
      dispatch(setLoginUserData(data));
   }
   catch (error) {
      console.log(error.message);
   }
 };

export default postsReducer;
