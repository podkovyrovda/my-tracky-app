import React from 'react';
import {Route} from 'react-router-dom';

import Header from './components/Header/Header';
import DashboardContainer from './components/Dashboard/DashboardContainer';
import Footer from './components/Footer/Footer';
import UsersContainer from './components/Users/UsersContainer';
import Profile from './components/Profile/Profile';

import './App.css';
import Settings from './components/Settings/Settings';

const App = () => {
  return (
      <div className='layout'>
          <Header />
          <div className='content'>
            <Route path='/users' render={()=><UsersContainer />} />
            <Route exact path='/' render={()=><DashboardContainer />} />
            <Route path='/profile' render={()=><Profile/>} />
            <Route path='/settings' render={()=><Settings/>} />
          </div>
          <Footer />
      </div>
  );
};

export default App;
