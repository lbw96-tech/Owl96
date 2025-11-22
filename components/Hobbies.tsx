import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HOBBIES_DATA } from '../constants';

const Hobbies: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="hobbies" className="py-24 bg-zinc-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16">
            <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 titans-font uppercase">
                    <span className="text-red-600">日常</span> 记录
                </h2>
                <p className="text-zinc-400">
                    战斗之外的记忆碎片。
                </p>
            </div>
            <div className="hidden md:block h-[1px] flex-1 bg-zinc-800 mx-8 mb-4"></div>
            <div className="text-right text-zinc-600 font-mono text-sm hidden md:block">
                ARCHIVE_ID: 845-854
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {HOBBIES_DATA.map((hobby, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    onHoverStart={() => setHoveredIndex(index)}
                    onHoverEnd={() => setHoveredIndex(null)}
                    className="relative group h-80 rounded-xl overflow-hidden cursor-pointer border border-zinc-800"
                >
                    {/* Background Image */}
                    <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                        style={{ backgroundImage: `url(${hobby.image})` }}
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-300" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 w-full p-6">
                        <div className="flex items-center gap-3 mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <div className="p-2 bg-red-600 text-white rounded-lg">
                                <hobby.icon size={20} />
                            </div>
                            <h3 className="text-xl font-bold text-white">{hobby.name}</h3>
                        </div>
                        <div className="overflow-hidden max-h-0 group-hover:max-h-20 transition-all duration-500">
                            <p className="text-zinc-300 text-sm mt-2 border-l-2 border-red-500 pl-3">
                                {hobby.desc}
                            </p>
                        </div>
                    </div>

                    {/* Tech Overlay Lines */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500/20 transition-colors rounded-xl pointer-events-none"></div>
                    {hoveredIndex === index && (
                         <motion.div 
                            layoutId="scanline"
                            className="absolute top-0 left-0 w-full h-1 bg-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.5)]"
                            initial={{ top: "0%" }}
                            animate={{ top: "100%" }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                         />
                    )}
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
