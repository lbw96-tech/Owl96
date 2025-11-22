import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

interface WelcomeOverlayProps {
  onStart: () => void;
}

const WelcomeOverlay: React.FC<WelcomeOverlayProps> = ({ onStart }) => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-zinc-950 flex flex-col items-center justify-center overflow-hidden"
    >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519608487953-e999c86e7455?q=80&w=2070&auto=format&fit=crop')] opacity-20 bg-cover bg-center filter grayscale contrast-125 mix-blend-overlay"></div>
        
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10 flex flex-col items-center text-center p-8"
        >
            <Shield className="w-24 h-24 text-zinc-300 mb-8 animate-pulse" />
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 titans-font tracking-tighter">
                进击的 <span className="text-red-600">履历</span>
            </h1>
            <p className="text-zinc-400 mb-12 max-w-md text-lg scout-font tracking-widest">
                致两千年后的你... <br/> 准备好加入调查兵团了吗？
            </p>

            <button
                onClick={onStart}
                className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-sm border border-zinc-600 hover:border-red-600 transition-all duration-300"
            >
                <div className="absolute inset-0 w-3 bg-red-600 transition-all duration-[250ms] ease-out group-hover:w-full opacity-10 group-hover:opacity-100"></div>
                <span className="relative text-zinc-100 group-hover:text-white font-bold tracking-[0.3em] uppercase">
                    开始壁外调查
                </span>
            </button>
        </motion.div>

        <div className="absolute bottom-10 text-zinc-600 text-xs tracking-widest animate-pulse">
            正在启动立体机动装置...
        </div>
    </motion.div>
  );
};

export default WelcomeOverlay;