import React from 'react';
import Track from './Track/Track';
import s from './Day.module.css';
import {addTrackActionCreator, updateTrackActionCreator} from '../../../../redux/dashboardReducer';

const Day = (props) => {  
  let trackElements = props.tracks
      .map(t => <Track name={t.name} />);

  let newTrack = React.createRef();

  let addTrack = () => {
    props.dispatch(addTrackActionCreator());
  }

  let updateTrack = () => {
    let name = newTrack.current.value;
    props.dispatch(updateTrackActionCreator(name));
  }
  
  return ( 
          <div className={s.day}>
            <p className={s.day__date}>
              <span>{props.day}: </span>{props.date}
            </p>
            <div className={s.day__card}>
              <div>
                {trackElements}
              </div>
              <div className={s.addTrackGroup}>
                <input className={s.addTrackInput} onChange={updateTrack} ref={newTrack} type="text" value={props.newTrack} />
                <button onClick={addTrack}>Add</button>
              </div>
            </div>
          </div>
  )
}

export default Day;