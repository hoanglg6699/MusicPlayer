import React, { useEffect, useState } from "react";
import songs from "../songs";
import Player from "./Player/Player";
import Playlist from "./Playlist/Playlist";
import '../index.css'

const MusicPlayer = () => {
  const [songlist] = useState(songs);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songlist.length - 1) {
        return 0;
      }
      return currentSongIndex + 1;
    });
  }, [currentSongIndex, songlist.length]);

  return (
    <main>
      <div id="playing">
        <Player
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
          nextSongIndex={nextSongIndex}
          songs={songlist}
        />
      </div>
      <div id="playlist">
        <Playlist
          songs={songlist}
          setCurrentSongIndex={setCurrentSongIndex}
          currentSongIndex={currentSongIndex}
        />
      </div>
    </main>
  );
};

export default MusicPlayer;
