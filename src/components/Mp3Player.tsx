import React, { useEffect, useRef, useState } from "react";
import API from "../services/api";
import Lyrics from './Lyrics'; 
import "../assets/scss/ControlPlayer.scss";

interface Lyric {
  time: number;
  text: string;
}
const parseLrc = (lrcText: string): Lyric[] => {
  const lines = lrcText.split("\n");
  return lines
    .map((line) => {
      const match = line.match(/\[(\d{2}):(\d{2})\.(\d{2})\](.*)/);
      if (match) {
        const minutes = parseInt(match[1], 10);
        const seconds = parseInt(match[2], 10);
        const milliseconds = parseInt(match[3], 10);
        const time = minutes * 60 + seconds + milliseconds / 1000;
        const text = match[4].trim();
        return { time, text };
      }
      return null; 
    })
    .filter((item): item is Lyric => item !== null); 
};
const AudioPlayer = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [lyrics, setLyrics] = useState<Lyric[]>([]);
  const [currentLyricIndex, setCurrentLyricIndex] = useState<number | null>(
    null
  );
  const [seekTime, setSeekTime] = useState<number | null>(null); // Store seek time while user is sliding
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [seekValue, setSeekValue] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [audioUrl, setAudioUrl] = useState("");

  useEffect(() => {
    const fetchAudioData = async () => {
      try {
        const response = await API.get("/audio");
        const data = response.data;
        setAudioUrl(data.audioUrl);
        fetchLrcData(data.lyrics);
      } catch (error) {
        console.error("Error fetching audio data:", error);
      }
    };
    fetchAudioData();
  }, []);

  const fetchLrcData = async (lyricsUrl: string) => {
    try {
      const response = await fetch(lyricsUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const lrcText = await response.text();
      const parsedLyrics = parseLrc(lrcText);
      setLyrics(parsedLyrics); // Cập nhật state lyrics
    } catch (error) {
      console.error("Error fetching LRC data:", error);
    }
  };

  useEffect(() => {
    const current = lyrics
      .filter((lyric) => lyric && (seekTime ?? currentTime) >= lyric.time) 
      .pop();
    if (current) {
      const index = lyrics.indexOf(current);
      setCurrentLyricIndex(index);
    }
  }, [currentTime, seekTime, lyrics]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const { currentTime, duration } = audioRef.current;
      if (duration) {
        setCurrentTime(currentTime);
        if (isDragging == false) {
          const seekTime = (currentTime / duration) * 100;
          setSeekValue(seekTime);
        }
      }
    }
  };
  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };
  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };
  const handleLyricClick = (lyric: Lyric) => {
    if (audioRef.current) {
      audioRef.current.currentTime = lyric.time; // Seek to the clicked lyric's time
      setCurrentTime(lyric.time);
    }
  };

  const handleSeekChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.currentTarget.value);
    setIsDragging(true);
    setSeekValue(newValue);
  };

  const handleSeekCommit = (
    event:
      | React.MouseEvent<HTMLInputElement>
      | React.TouchEvent<HTMLInputElement>
  ) => {
    const newValue = parseFloat((event.target as HTMLInputElement).value);
    setSeekValue(newValue);
    setIsDragging(false);
    const seekTime = (audioRef.current?.duration || 0) * (newValue / 100);
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
      setCurrentTime(seekTime);
    }
  };

  return (
    <div>
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} src={audioUrl} />
      <Lyrics
        lyrics={lyrics}
        currentLyricIndex={currentLyricIndex}
        onLyricClick={handleLyricClick}
      />
      
      <div id='control-player' className="ms-play-control-container">
        <div className="ms-play-control-container-bg"></div>
        <div className="ms-play-control-wrapper">
          <div className="ms-play-control-info">
            <div className="ms-play-control-img-song">
              <button className="equalizer">
                <span className="eq1"></span>
                <span className="eq2"></span>
                <span className="eq3"></span>
              </button>
              <img 
                src="default-image-url.jpg" 
                alt="Album Art" 
                className="play-control-img-song" 
              />
            </div>
            <div className="ms-control-info-song">
              <div className="name-song">Song Name</div>
              <div className="creator">Artist Name</div>
            </div>
          </div>

          <div className="ms-play-control-player">
            <div className="ms-control-player-button-control">
              <i className="fas fa-step-backward btn-prev"></i>
              <button className="play-button" onClick={handlePlay}>
                <i className="fas fa-play btn-play"></i>
              </button>
              <i className="fas fa-step-forward btn-next"></i>
            </div>
            <div className="ms-player-progress-bar">
              <div className="wrapper-progress-bar">
                <div className="time current-time">00:00</div>
                <input
                  className="progress-bar"
                  type="range"
                  min="0"
                  max="100"
                  step="0.1"
                  value={seekValue} 
                  onChange={handleSeekChange}
                  onMouseUp={handleSeekCommit}
                  onTouchEnd={handleSeekCommit}
                />
                <div className="time duration-time">--:--</div>
              </div>
            </div>
          </div>
          <div className="ms-play-control-right">
            <div className="ms-play-control-random">
              <span className="material-icons-outlined btn-random">shuffle</span>
            </div>
            <div className="ms-play-control-loop">
              <span className="material-icons-outlined btn-loop">loop</span>
            </div>
            <div className="ms-play-control-add-play-list">
              <span className="play-lyrics material-icons-outlined">mic_none</span>
            </div>
            <div className="ms-play-control-volume">
              <i className="fas fa-volume-up btn-volume"></i>
              <input className="volume" type="range"  min="0" max="100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
