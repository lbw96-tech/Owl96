import React from 'react';
import { motion } from 'framer-motion';
import { Map, ArrowRight } from 'lucide-react';
import { PLANNING_DATA } from '../constants';

const Planning: React.FC = () => {
  return (
    <section id="planning" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?q=80&w=2031&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 titans-font uppercase">
            作战 <span className="text-red-600">规划</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            从墙内到海的彼端，这是我的行动路线图。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {PLANNING_DATA.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                {/* Connection Line (Desktop only) */}
                {index < PLANNING_DATA.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-zinc-800 z-0">
                    <ArrowRight className="absolute -right-1 -top-2.5 text-zinc-600" size={20}/>
                  </div>
                )}

                <div className="h-full bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 p-8 rounded-lg hover:border-red-800/50 transition-all duration-500 hover:bg-zinc-900/80 group-hover:transform group-hover:-translate-y-2 group-hover:shadow-[0_10px_30px_rgba(185,28,28,0.15)]">
                  
                  <div className="mb-6 inline-block p-4 bg-zinc-950 rounded-full border border-zinc-700 group-hover:border-red-600 group-hover:text-red-600 transition-colors">
                    <Icon size={32} />
                  </div>

                  <h3 className="text-sm font-mono text-red-500 mb-2 tracking-widest uppercase">{plan.phase}</h3>
                  <h4 className="text-2xl font-bold text-zinc-100 mb-4 titans-font">{plan.title}</h4>
                  <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                    {plan.desc}
                  </p>

                  {/* Hover Corner Effect */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-transparent border-r-transparent group-hover:border-r-red-600/20 transition-all duration-300"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* The "Sea" Visual Metaphor */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
        >
            <div className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-800 rounded-full bg-zinc-900/50 backdrop-blur hover:border-sky-500/50 transition-colors cursor-help">
                <Map size={16} className="text-sky-500" />
                <span className="text-zinc-400 text-sm">距离最终目标还有: <span className="text-white font-mono">未知</span> 公里</span>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Planning;
