import { ApiService } from '../../api/api';

const SET_ALL_POSTS = 'SET-ALL-POSTS';

let initialState = {
  allPosts: [],
};

let postsReducer = (state = initialState, action) => {
  switch (action.type) {
   case SET_ALL_POSTS: {
      return {
        ...state,
        id: action.id,
        allPosts: action.allPosts,
      };
    }
    default: {
      return state;
    }
  }
};

export const setAllPosts = (allPosts) => ({ type: SET_ALL_POSTS, allPosts });

export const getAllPosts = () => async (dispatch) => {
   try {
      let data = await ApiService.fetchGamesPosts();
      dispatch(setAllPosts(data));
   }
   catch (error) {
      console.log(error.message);
   }
 };

export const addNewPost = (title, description) => async (dispatch) => {
   try {
      await ApiService.addNewGamesPost(title, description);
      let data = await ApiService.fetchGamesPosts();
      dispatch(setAllPosts(data));
   }
   catch (error) {
      console.log(error.message);
   }
} 

export default postsReducer;
