import React from 'react';
import './timer.css';

function leftPad (number) {
  const pad = '00';
  return pad.substring (0, pad.length - number.length) + number;
}

function Timer (props) {
  function formattedTime (secs) {
    let minutes = parseInt (secs / 60, 10);
    let seconds = parseInt (secs % 60, 10);
    return `${leftPad (minutes.toString ())}:${leftPad (seconds.toString ())}`;
  }

  return (
    <div className="Timer">
      <p>
        <span>
          {formattedTime (props.currentTime)} / {formattedTime (props.duration)}
        </span>
      </p>
    </div>
  );
}

export default Timer;
