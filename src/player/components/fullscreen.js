import React from 'react';
import FullscreenIcon from '../../icons/components/full-screen';
import './full-screen.css';

const Fullscreen = props => (
  <div className="FullScreen" onClick={props.handleFullscreenClick}>
    <FullscreenIcon color="white" size="25" />
  </div>
);

export default Fullscreen;
