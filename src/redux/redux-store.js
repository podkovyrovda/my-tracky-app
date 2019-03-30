import {createStore, combineReducers} from 'redux';
import dashboardReducer from './dashboardReducer';
import userReducer from './userReducer';

let reducers = combineReducers({
  dashboardPage: dashboardReducer,
  usersPage: userReducer
});

let store = createStore(reducers);

export default store;