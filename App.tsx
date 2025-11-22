import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Planning from './components/Planning';
import Hobbies from './components/Hobbies';
import Values from './components/Values';
import MouseTrailer from './components/MouseTrailer';
import AudioPlayer from './components/AudioPlayer';
import WelcomeOverlay from './components/WelcomeOverlay';

const App: React.FC = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleStart = () => {
    setHasStarted(true);
    setIsPlaying(true);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-red-900 selection:text-white">
      {!hasStarted ? (
        <WelcomeOverlay onStart={handleStart} />
      ) : (
        <>
          <MouseTrailer />
          <Navbar />
          <main className="relative z-10">
            <Hero />
            <div className="relative">
                {/* Global background elements to tie sections together */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[100px] pointer-events-none"></div>
                <Timeline />
                <Skills />
                <Hobbies />
                <Planning />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-900/10 rounded-full blur-[120px] pointer-events-none"></div>
                <Values />
            </div>
          </main>
          
          <AudioPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
          
          <footer className="bg-zinc-950 py-12 border-t border-zinc-900 text-center relative overflow-hidden">
             <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
             <div className="max-w-7xl mx-auto px-4 relative z-10">
                <p className="text-zinc-500 text-sm uppercase tracking-widest mb-2">
                    致两千年后的你
                </p>
                <p className="text-zinc-600 text-xs">
                    © {new Date().getFullYear()} 调查兵团开发分队 | 献出心脏
                </p>
             </div>
          </footer>
        </>
      )}
    </div>
  );
};

export default App;
