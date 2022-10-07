import React from "react";
import { CaretRightOutlined } from "@ant-design/icons";
import "./playlist.css";

const Playlist = (props) => {
  function addZero(number) {
    if (number >= 0 && number <= 9) return `0${number}`;
    return number;
  }
  return (
    <div>
      <ul>
        {props.songs.map((song, index) => (
          <li
            // className={props.currentSongIndex ? styles.item : styles.item}
            className={
              props.currentSongIndex === index ? "item active" : "item"
            }
            key={index}
            onClick={() => props.setCurrentSongIndex(index)}
            // className={`songContainer ${currentSongIndex === index ? 'selected' : ''}`}
          >
            {/* <div className={styles.item__number}> */}
            <div className="item__number">{addZero(index + 1)}</div>
            <img src={song.avatar} />
            {/* <span className={styles.item__icon}> */}
            <span className="item__icon">
              <CaretRightOutlined />
            </span>
            <div>
              {/* <div className={styles.item__title}>{song.title}</div>
              <div className={styles.item__artist}>{song.artist}</div> */}
              <div className="item__title">{song.title}</div>
              <div className="item__artist">{song.artist}</div>
            </div>
            {/* <span className="item__time">{fmtMSS(props.duration}</span> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
