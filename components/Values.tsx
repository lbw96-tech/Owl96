import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bird, Zap, Heart } from 'lucide-react';
import { VALUES_DATA, PERSONAL_INFO } from '../constants';
import { EasterEggState } from '../types';

const Values: React.FC = () => {
  const [easterEgg, setEasterEgg] = useState<EasterEggState>({ triggered: false, message: "" });

  const triggerEasterEgg = () => {
    setEasterEgg({ triggered: true, message: "塔塔开！(战斗！)" });
    // Reset after a delay
    setTimeout(() => setEasterEgg({ triggered: false, message: "" }), 3000);
  };

  return (
    <section id="values" className="py-32 bg-zinc-950 relative flex flex-col items-center justify-center">
      {/* Easter Egg Modal */}
      {easterEgg.triggered && (
        <motion.div 
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }} 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
        >
            <h1 className="text-6xl md:text-9xl font-black text-red-600 animate-pulse titans-font uppercase tracking-widest text-center px-4">{easterEgg.message}</h1>
        </motion.div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="inline-block cursor-pointer mb-12 p-4 rounded-full border-2 border-zinc-700 hover:border-white transition-colors group"
            onClick={triggerEasterEgg}
        >
            <Bird size={48} className="text-zinc-300 group-hover:text-white transition-colors" />
        </motion.div>
        
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 titans-font uppercase">
          <span className="text-sky-500">自由</span> 之路
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {VALUES_DATA.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-zinc-900/30 backdrop-blur-md p-8 rounded-xl border border-zinc-800 hover:border-zinc-600 transition-all duration-300 text-left relative group overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-${value.color.split('-')[1]}-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              
              <h3 className={`text-2xl font-bold mb-4 ${value.color} font-serif`}>{value.title}</h3>
              <p className="text-zinc-400 leading-relaxed">
                {value.desc}
              </p>
              
              <div className="mt-6 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {index === 0 ? <Bird size={20} className="text-zinc-500" /> : 
                   index === 1 ? <Heart size={20} className="text-zinc-500" /> : 
                   <Zap size={20} className="text-zinc-500" />}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 pt-12 border-t border-zinc-900"
        >
          <p className="text-2xl md:text-4xl font-serif italic text-zinc-500">
            "{PERSONAL_INFO.quote}"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Values;