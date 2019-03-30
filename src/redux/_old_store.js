import dashboardReducer from './dashboardReducer';
import userReducer from './userReducer';

let store = {
  _state: {

  },
  _callSuscriber () {
    console.log('State changed')
  },

  getState () {
    return this._state;
  },
  subscribe (observer) {
    this._callSuscriber = observer
  },

  dispatch (action) {
    this._state.dashboardPage = dashboardReducer(this._state.dashboardPage, action);
    
    this._callSuscriber(this._state);
    }
};


export default store;