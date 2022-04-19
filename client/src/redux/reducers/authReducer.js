import { ApiService } from '../../api/api';

const SET_LOGIN_USER_DATA = 'SET-LOGIN-USER-DATA';

let initialState = {
  isAuth: false,
  userData: [],
};

let postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_USER_DATA: {
      return {
         ...state,
         isAuth: true,
         userData: [action.userData],
      }
    }
    default: {
      return state;
    }
  }
};

export const setLoginUserData = (userData) => ({ type: SET_LOGIN_USER_DATA, userData });

export const loginUserGetData = (email, password) => async (dispatch) => {
   try {
      await ApiService.loginUser(email, password);
      const data = await ApiService.fetchUserData();
      console.log(data)
      dispatch(setLoginUserData(data));
   }
   catch (error) {
      console.log(error.message);
   }
 };

export const registrationUserGetData = (nickname, email, password) => async (dispatch) => {
   try {
      await ApiService.registerUser(nickname, email, password);
      await ApiService.loginUser(email, password);
      const data = await ApiService.fetchUserData();
      console.log(data)
      dispatch(setLoginUserData(data));
   }
   catch (error) {
      console.log(error.message);
   }
 };

export const getUserData = () => async (dispatch) => {
   try {
      const data = await ApiService.fetchUserData();
      console.log(data)
      dispatch(setLoginUserData(data));
   }
   catch (error) {
      console.log(error.message);
   }
}

export default postsReducer;
