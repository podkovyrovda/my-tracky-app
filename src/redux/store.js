import {createStore, combineReducers} from 'redux';
import dashboardReducer from './dashboardReducer';
import usersReducer from './usersReducer';

let reducers = combineReducers({
  dashboardPage: dashboardReducer,
  usersPage: usersReducer
});

let store = createStore(reducers);

export default store;