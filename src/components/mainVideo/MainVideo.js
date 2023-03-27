import "./MainVideo.scss";
import soundIcon from "../../assets/icons/volume_up.svg";
import muteIcon from "../../assets/icons/volume_off.svg";
import fullscreenIcon from "../../assets/icons/fullscreen.svg";
import playIcon from "../../assets/icons/play.svg";
import pauseIcon from "../../assets/icons/pause.svg";
import React, { useState, useRef, useEffect } from "react";
import videoSrc from "../../assets/video/BrainStation Sample Video.mp4";

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${remainingSeconds}`;
}

function MainVideo({ currentVideo }) {
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      if (playing) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [playing]);

  const handlePlay = () => {
    setPlaying(true);
  };

  const handlePause = () => {
    setPlaying(false);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(videoRef.current.duration);
  };

  const handleFullscreenClick = () => {
    if (!isFullscreen) {
      if (videoRef.current) {
        videoRef.current.requestFullscreen();
        setIsFullscreen(true);
        videoRef.current.classList.add("video--fullscreen");
      }
    } else {
      if (videoRef.current) {
        document.exitFullscreen();
        setIsFullscreen(false);
        videoRef.current.classList.remove("video--fullscreen");
      }
    }
  };
  const handleSoundClick = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.volume = isMuted ? 1 : 0;
    }
  };

  const progress = (currentTime / duration) * 100;
  const formattedTime = formatTime(currentTime);

  return (
    <div className="video__wrapper">
      {currentVideo && (
        <div className="video__controls">
          <div className="video__controlBar video__playContainer">
            {playing ? (
              <img
                className="video__pauseIcon video__icon"
                src={pauseIcon}
                alt="pause-button"
                onClick={handlePause}
              />
            ) : (
              <img
                className="video__playIcon video__icon"
                src={playIcon}
                alt="play-button"
                onClick={handlePlay}
              />
            )}
          </div>
          <div className="video__controlBar video__progress">
            <div className="video__defaultProgress">
              <div
                className="video__progressBar"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="video__duration">
              <p className="video__time">{formattedTime}</p>
              <p className="video__time">/</p>
              <p className="video__time">{currentVideo.duration}</p>
            </div>
          </div>
          <div className="video__controlBar video__features">
            <img
              className="video__fullscreenIcon video__icon"
              src={fullscreenIcon}
              onClick={handleFullscreenClick}
              alt={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
            />
            <img
              className="video__soundIcon video__icon"
              src={isMuted ? muteIcon : soundIcon}
              onClick={handleSoundClick}
              alt="sound icon"
            />
          </div>
        </div>
      )}
      {currentVideo && !playing && (
        <img src={currentVideo.image} alt="Default" className="video__main" />
      )}
      {currentVideo && playing && (
        <video
          className={`video__video`}
          autoPlay
          onClick={handlePlay}
          onPause={handlePause}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          ref={videoRef}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}

export default MainVideo;
