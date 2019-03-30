import React from 'react';
import s from './Dashboard.module.css';
import UserAva from '../UserAva/UserAva';
import Days from './Days/Days';
import Day from './Days/Day/Day'

const Dashboard = (props) => {
  let state = props.dashboardPage;
  let daysElements = state.days
    .map(d => <Day day={d.day} 
                  date={d.date} 
                  tracks={d.tracks} 
                  newTrack={state.newTrack} 
                  addTrack={props.addTrack}
                  updateTrack={props.updateTrack}/>);
  
  return ( 
      <div className='container'>
        <UserAva />
        <p className={s.welcomeText}>Hello, {state.user.name}.</p>
        <p className={s.streakText}>You have a nice streak 
          <br></br>in {state.user.streak.value} days of 
          <a href='#'><i>{state.user.streak.name} </i></a> with {state.user.streak.service}.</p>
        <Days arr={daysElements}/>
      </div>
  )
}

export default Dashboard;