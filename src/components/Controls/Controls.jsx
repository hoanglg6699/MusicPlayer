import React from 'react'
import './controls.css'
import {
  PauseCircleOutlined,
  PlayCircleOutlined,
  RetweetOutlined,
  StepBackwardOutlined,
  StepForwardOutlined,
} from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShuffle,
  faVolumeXmark,
  faVolumeLow,
  faVolumeHigh,
} from '@fortawesome/free-solid-svg-icons';

const Controls = (props) => {
  return (
    <div className="controllers">
      <div className="volume">
        <div className="volume-icon">
          {props.volume === 0 && <FontAwesomeIcon icon={faVolumeXmark} />}
          {props.volume > 0 && props.volume <= 0.5 && <FontAwesomeIcon icon={faVolumeLow} />}
          {props.volume > 0.5 && <FontAwesomeIcon icon={faVolumeHigh} />}
        </div>
        <input
          value={Math.round(props.volume * 100)}
          type="range"
          name="volBar"
          id="volBar"
          onChange={(e) => props.handleVolume(e.target.value / 100)}
        />
      </div>
      <button
        className={props.isRandom ? 'random_btn active' : 'random_btn'}
        onClick={() => props.setIsRandom(!props.isRandom)}
      >
        <FontAwesomeIcon icon={faShuffle} />
      </button>
      <button className="skip_btn" onClick={() => props.SkipSong(false)}>
        <StepBackwardOutlined />
      </button>
      <button className="play_btn" onClick={() => props.setIsPlaying(!props.isPlaying)}>
        {props.isPlaying ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
      </button>
      <button className="skip_btn" onClick={() => props.SkipSong()}>
        <StepForwardOutlined />
      </button>
      <button
        className={props.isLooping ? 'loop_btn active' : 'loop_btn'}
        onClick={() => props.setIsLooping(!props.isLooping)}
      >
        <RetweetOutlined />
      </button>
    </div>
  )
}

export default Controls