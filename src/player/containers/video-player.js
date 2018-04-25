import React, {Component} from 'react';
import VideoPlayerLayout from '../components/VideoPlayerLayout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import Controls from '../components/video-player-controls';
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';
import Volume from '../components/Volume';
import Fullscreen from '../components/Fullscreen';

class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: 0,
    currentTime: 0,
    loading: false,
  };
  tooglePlay = event => {
    this.setState ({
      pause: !this.state.pause,
    });
  };
  handleLoadedMetadata = event => {
    //Lo primero, quien disparo el evento? El (elemento) video!
    this.video = event.target;
    //Ahora se asigna la duracion desde las metadata
    this.setState ({
      duration: this.video.duration,
    });
  };
  handleTimeUpdate = event => {
    this.setState ({
      currentTime: this.video.currentTime,
    });
  };
  handleProgressChange = event => {
    this.video.currentTime = event.target.value;
  };
  handleSeeking = event => {
    this.setState ({
      loading: true,
    });
  };
  handleSeeked = event => {
    this.setState ({
      loading: false,
    });
  };
  handleVolumeChange = event => {
    this.video.volume = event.target.value;
  };
  handleFullscreenClick = event => {
    if (!document.webkitIsFullScreen) {
      this.player.webkitRequestFullscreen (); // mando a full screen
    } else {
      document.webkitExitFullscreen (); // salgo del full screen
    }
  };
  setPlayerRef = element => {
    this.player = element;
    //Se está creando en this un elemento llamado player que ahora contiene la refencia
  };
  componentDidMount () {
    this.setState ({
      pause: !this.props.autoPlay,
    });
  }
  render () {
    return (
      <VideoPlayerLayout setRef={this.setPlayerRef}>
        <Title title={this.props.title} />
        <Controls>
          <PlayPause handleClick={this.tooglePlay} pause={this.state.pause} />
          <Timer
            currentTime={this.state.currentTime}
            duration={this.state.duration}
          />
          <ProgressBar
            duration={this.state.duration}
            value={this.state.currentTime}
            handleProgressChange={this.handleProgressChange}
          />
          <Volume handleVolumeChange={this.handleVolumeChange} />
          <Fullscreen handleFullscreenClick={this.handleFullscreenClick} />
        </Controls>
        <Spinner active={this.state.loading} />
        <Video
          autoPlay={this.props.autoPlay}
          pause={this.state.pause}
          src={this.props.src}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
        />
      </VideoPlayerLayout>
    );
  }
}

export default VideoPlayer;
