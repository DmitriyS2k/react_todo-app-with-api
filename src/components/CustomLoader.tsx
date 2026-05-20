import '../styles/customloader.scss';
import bubbleSound from '../media/bubble.mp3';

import loaderMp4 from '../media/full_loader.mp4';
import { useEffect, useRef } from 'react';

export const CustomLoader = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play();
    }
  }, []);

  return (
    <div className="loader1">
      <div className="loader__video-wrapper">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          onLoadedMetadata={() => {
            if (videoRef.current) {
              videoRef.current.currentTime = 0.5;
            }
          }}
        >
          <source src={loaderMp4} type="video/mp4" />
        </video>
      </div>
      <audio ref={audioRef} autoPlay>
        <source src={bubbleSound} type="audio/mp3" />
      </audio>

      <p>Loading...</p>
    </div>
  );
};

export default CustomLoader;
