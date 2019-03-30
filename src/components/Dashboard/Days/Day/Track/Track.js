import React from 'react';
import s from './Track.module.css';

const Track = (props) => {
    return ( 
          <label className={s.label}>
            <input type="checkbox" name="track" value={props.name} />
            {props.name}
          </label>
  )
}

export default Track;