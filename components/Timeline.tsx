import React from 'react';
import { motion } from 'framer-motion';
import { Sword, Shield, Book, Feather, Lock } from 'lucide-react';
import { TIMELINE_DATA } from '../constants';

const WALL_NAMES: Record<string, string> = {
  Maria: "玛利亚之墙",
  Rose: "罗塞之墙",
  Sina: "希娜之墙",
  Outside: "壁外区域"
};

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Wall Texture Background */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-950 to-zinc-950"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 titans-font uppercase">
            <span className="text-red-600">壁外</span> 调查记录
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            关于战斗、破墙与求知的编年史。
          </p>
        </motion.div>

        <div className="relative">
          {/* The Path Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-zinc-800" />

          {TIMELINE_DATA.map((item, index) => {
            const isEven = index % 2 === 0;
            const Icon = item.icon === 'sword' ? Sword : item.icon === 'shield' ? Shield : item.icon === 'feather' ? Feather : Book;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center justify-between mb-16 ${
                  isEven ? 'flex-row-reverse' : ''
                }`}
              >
                {/* Empty Space */}
                <div className="w-5/12 hidden md:block" />

                {/* Icon Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                   <div className="relative">
                        <div className="w-12 h-12 rounded-full bg-zinc-900 border-2 border-red-800 flex items-center justify-center shadow-[0_0_20px_rgba(153,27,27,0.5)]">
                            <Icon size={20} className="text-zinc-200" />
                        </div>
                        {/* Pulse ring */}
                        <div className="absolute inset-0 rounded-full border border-red-500/30 animate-ping"></div>
                   </div>
                </div>

                {/* Content Card */}
                <div className="w-full md:w-5/12 px-4">
                  <div className="group bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 p-6 rounded-lg hover:border-red-900/60 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative overflow-hidden">
                    {/* Card Decoration */}
                    <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                       <Lock size={64} />
                    </div>
                    
                    <span className="inline-block px-3 py-1 bg-red-900/20 text-red-500 text-xs font-bold rounded-full mb-3 border border-red-900/30">
                        {WALL_NAMES[item.wall] || item.wall}
                    </span>
                    <span className="block text-zinc-500 text-sm mb-1 font-mono">{item.year}</span>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">{item.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;