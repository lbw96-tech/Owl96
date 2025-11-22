import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Feather } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-zinc-950">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-zinc-950/80 to-zinc-950 z-10" />
      
      {/* Steam/Smoke Background (Simulated with multiple layers) */}
      <motion.div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500491460312-c32fc2dbc751?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 grayscale"
        style={{ y: y1 }}
      />
      
      {/* Content */}
      <div className="relative z-20 text-center px-4 w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 1.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Feather className="w-16 h-16 text-zinc-100 mx-auto mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
        </motion.div>

        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-5xl md:text-8xl font-black text-white mb-4 titans-font tracking-tighter glitch-effect uppercase"
          data-text={PERSONAL_INFO.name}
        >
          {PERSONAL_INFO.name}
        </motion.h1>

        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 1, duration: 1.5 }}
            className="h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mb-8 max-w-2xl"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-zinc-400 text-lg md:text-2xl scout-font tracking-[0.2em] uppercase"
        >
          {PERSONAL_INFO.title}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          className="mt-12"
        >
             <span className="inline-block px-4 py-1 border border-zinc-700 bg-zinc-900/50 text-zinc-500 text-sm rounded-full backdrop-blur-sm">
                当前状态: {PERSONAL_INFO.location}
            </span>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-zinc-500 uppercase tracking-widest">下滑探索</span>
        <ArrowDown className="text-red-600 animate-bounce" />
      </motion.div>
      
      {/* Floating Particles (Cyberpunk overlay) */}
      <div className="absolute inset-0 pointer-events-none z-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjxjaXJjbGUgY3g9IjIiIGN5PSIyIiByPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-50"></div>
    </section>
  );
};

export default Hero;