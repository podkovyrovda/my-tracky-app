import React from 'react';
import s from './Days.module.css';

const Days = (props) => {
  return ( 
        <div className={s.trackRow}>
          {props.arr}
        </div>
  )
}

export default Days;