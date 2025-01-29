import React, { useEffect, useRef } from 'react';

export default function Dialogcom() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Auto-play the video when component mounts
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <video 
      ref={videoRef}
      className="h-full w-full "
      loop
      muted
      autoPlay
      playsInline
    >
      <source 
        src="src\images\6774633-uhd_3840_2160_30fps.mp4" 
        type="video/mp4" 
      />
      Your browser does not support the video tag.
    </video>
  );
}
