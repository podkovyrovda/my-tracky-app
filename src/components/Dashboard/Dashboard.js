import React from 'react';
import s from './Dashboard.module.css';
import UserAva from '../UserAva/UserAva';
import Days from './Days/Days';
import Day from './Days/Day/Day'

const Dashboard = (props) => {
  let daysElements = props.dashboardPage.days
    .map(d => <Day day={d.day} date={d.date} tracks={d.tracks} newTrack={props.dashboardPage.newTrack} dispatch={props.dispatch} />);
  
  return ( 
      <div className='container'>
        <UserAva />
        <p className={s.welcomeText}>Hello, {props.dashboardPage.user.name}.</p>
        <p className={s.streakText}>You have a nice streak <br></br>in {props.dashboardPage.user.streak.value} days of <a href='#'><i>{props.dashboardPage.user.streak.name}</i></a> with {props.dashboardPage.user.streak.service}.</p>
        <Days arr={daysElements}/>
      </div>
  )
}

export default Dashboard;