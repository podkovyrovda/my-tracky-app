import React from 'react';
import Track from './Track/Track';
import s from './Day.module.css';

const Day = (props) => {  
  let trackElements = props.tracks
      .map(t => <Track name={t.name} />);

  // let newTrack = React.createRef();

  // let addTrack = () => {
  //   debugger
  //   props.addTrack();
  // }

  // let updateTrack = () => {
  //   let name = newTrack.current.value;
  //   props.updateTrack(name);
  // }
  
  return ( 
          <div className={s.day}>
            <p className={s.day__date}>
              <span>{props.day}: </span>{props.date}
            </p>
            <div className={s.day__card}>
              <div>
                {trackElements}
              </div>
              {/* <div className={s.addTrackGroup}>
                <input className={s.addTrackInput}
                        type="text"  
                        onChange={updateTrack} 
                        ref={newTrack} 
                        value={props.newTrack} />
                <button onClick={addTrack}>Add</button>
              </div> */}
            </div>
          </div>
  )
}

export default Day;