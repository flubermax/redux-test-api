import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { usersReducer } from './usersReducer'
import { postsReducer } from './postsReducer'

const rootReducer = combineReducers({
  usersReducer, postsReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))