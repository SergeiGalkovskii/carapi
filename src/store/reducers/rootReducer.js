
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import carsReducer from './cars';

export default combineReducers({
  routing: routerReducer,
  cars: carsReducer
});