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
  componentDidMount () {
    this.setState ({
      pause: !this.props.autoPlay,
    });
  }
  render () {
    return (
      <VideoPlayerLayout>
        <Title title="HOLALA" />
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
        </Controls>
        <Spinner active={this.state.loading} />
        <Video
          autoPlay={this.props.autoPlay}
          pause={this.state.pause}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
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
