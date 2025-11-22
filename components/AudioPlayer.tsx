import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, AlertCircle } from 'lucide-react';
import { AUDIO_URL } from '../constants';

interface AudioPlayerProps {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ isPlaying, setIsPlaying }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [volume, setVolume] = useState(0.3);
  const [isMuted, setIsMuted] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const audio = new Audio(AUDIO_URL);
    audio.loop = true;
    audio.volume = volume;
    
    audio.addEventListener('error', (e) => {
        console.error("Audio Error:", e);
        setHasError(true);
        setIsPlaying(false);
    });
    
    audio.addEventListener('canplay', () => {
        setHasError(false);
    });

    audioRef.current = audio;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio && !hasError) {
      if (isPlaying) {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.warn("Auto-play prevented or failed:", error);
            setIsPlaying(false);
          });
        }
      } else {
        audio.pause();
      }
    }
  }, [isPlaying, hasError, setIsPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  if (hasError) {
      return (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-black/80 backdrop-blur-md p-3 border border-red-900/50 rounded-full">
            <AlertCircle size={20} className="text-red-500" />
            <span className="text-xs text-red-400">音频无法加载</span>
        </div>
      );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-4 bg-black/80 backdrop-blur-md p-3 border border-red-900/50 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.3)] transform hover:scale-105 transition-all duration-300">
      <button 
        onClick={() => setIsPlaying(!isPlaying)} 
        className="text-zinc-300 hover:text-red-500 transition-colors"
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>
      
      <div className="w-24 h-1 bg-zinc-800 rounded-full overflow-hidden cursor-pointer relative group">
        <input 
          type="range" 
          min="0" 
          max="1" 
          step="0.01" 
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="absolute w-full h-full opacity-0 cursor-pointer z-10"
        />
        <div 
          className="h-full bg-gradient-to-r from-red-900 to-red-500 transition-all duration-100"
          style={{ width: `${volume * 100}%` }}
        ></div>
      </div>

      <button 
        onClick={() => setIsMuted(!isMuted)} 
        className="text-zinc-300 hover:text-red-500 transition-colors"
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
      
      {/* Sound Wave Animation */}
      {isPlaying && !isMuted && (
        <div className="flex items-end gap-1 h-4">
           {[1,2,3].map(i => (
             <div key={i} className={`w-1 bg-red-500 animate-pulse`} style={{ height: '100%', animationDuration: `${0.5 + i * 0.2}s` }} />
           ))}
        </div>
      )}
    </div>
  );
};

export default AudioPlayer;