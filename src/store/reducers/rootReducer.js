
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import carsReducer from './cars';
import carVoteReducer from './carVote';
import userReducer from './user';

export default combineReducers({
  routing: routerReducer,
  cars: carsReducer,
  carVote: carVoteReducer,
  user: userReducer
});