'use client';

import { useState, useRef, useEffect } from 'react';
import { HeadphoneOff, Headphones } from 'lucide-react';

interface AudioPlayerProps {
  src: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const handleUserInteraction = () => {
      if (audioRef.current) {
        audioRef.current.muted = false;
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => setIsPlaying(true))
            .catch(() => setIsPlaying(false));
        }
      }
      document.removeEventListener('pointerdown', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };

    document.addEventListener('pointerdown', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);
    return () => {
      document.removeEventListener('pointerdown', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };
  }, []);

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    }
  };

  return (
    <div className="flex items-center">
      <button onClick={togglePlayPause} className="p-2 text-gray-500">
        {isPlaying ? (
          <HeadphoneOff className="w-4 md:w-8 text-black hover:transition hover:scale-125 hover:text-pink-600" />
        ) : (
          <Headphones className="w-4 md:w-8 text-black hover:transition hover:scale-125 hover:text-pink-600" />
        )}
      </button>
      <audio ref={audioRef} src={src} loop muted />
    </div>
  );
};

export default AudioPlayer;
