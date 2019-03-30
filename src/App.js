import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import Users from './components/Users/Users';
import Profile from './components/Profile/Profile';

const App = (props) => {
  return (
      <div className='layout'>
          <Header />
          <div className='content'>
            <Route path='/users' render={()=><Users state={props.state.usersPage.users}/>} />
            <Route exact path='/' render={()=><Dashboard dashboardPage={props.state.dashboardPage} dispatch={props.dispatch} />} />
            <Route path='/profile' render={()=><Profile/>} />
          </div>
          <Footer />
      </div>
  );
}

export default App;
