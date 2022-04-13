import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddlware from 'redux-thunk';
import postsReducer from './reducers/postsReducer'

let reducers = combineReducers({
   posts: postsReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddlware));

window.store = store;

export default store;
