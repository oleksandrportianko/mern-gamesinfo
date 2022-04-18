import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddlware from 'redux-thunk';
import postsReducer from './reducers/postsReducer'
import authReducer from './reducers/authReducer'

let reducers = combineReducers({
   posts: postsReducer,
   auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddlware));

window.store = store;

export default store;
