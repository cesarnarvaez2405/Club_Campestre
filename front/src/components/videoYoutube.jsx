import React, { useRef } from "react";
import YouTube from "react-youtube";

export const VideoYoutube = ({ videoId, width, height }) => {
  const playerRef = useRef(null);

  const opts = {
    height: height,
    width: width,
    playerVars: {
      autoplay: 1,
      controls: 0,
      mute: 1,
    },
  };

  const handleVideoEnd = (event) => {
    playerRef.current.internalPlayer.playVideo(); // Reiniciar el video
  };

  return (
    <div className=" brightness-75" style={{ width: width, height: height }}>
      <YouTube
        videoId={videoId}
        opts={opts}
        onEnd={handleVideoEnd}
        ref={playerRef}
      />
    </div>
  );
};
