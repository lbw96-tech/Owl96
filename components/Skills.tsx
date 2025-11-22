import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS_DATA } from '../constants';

const CATEGORY_NAMES: Record<string, string> = {
  Combat: "战斗技能",
  Strategy: "战术指挥",
  Survival: "生存本能"
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-zinc-900 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          {/* Text Info */}
          <div className="w-full md:w-1/3">
            <motion.h2 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-6 titans-font uppercase"
            >
              战斗 <br/><span className="text-red-600">能力评估</span>
            </motion.h2>
            <p className="text-zinc-400 mb-8">
              正如立体机动装置需要完美的平衡和对瓦斯消耗的掌控，现代开发需要对技术栈的深度理解。以下是我的战斗数值。
            </p>
            <div className="p-6 bg-zinc-950 border border-zinc-800 rounded-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-transparent"></div>
                <h3 className="text-zinc-100 font-bold mb-2 uppercase tracking-wider text-sm">当前目标</h3>
                <p className="text-zinc-500 text-sm italic">"将所有Bug... 一个不留地驱逐出去！"</p>
            </div>
          </div>

          {/* Stats Bars */}
          <div className="w-full md:w-2/3 grid gap-6">
            {SKILLS_DATA.map((skill, index) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-zinc-950/50 p-4 rounded border border-zinc-800 hover:border-zinc-600 transition-colors"
              >
                <div className="flex justify-between mb-2">
                  <span className="text-zinc-200 font-bold flex items-center gap-2">
                    {skill.name}
                    <span className="text-xs px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 font-mono">
                        {CATEGORY_NAMES[skill.category] || skill.category}
                    </span>
                  </span>
                  <span className="text-red-500 font-mono">{skill.level}%</span>
                </div>
                
                <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-red-900 via-red-600 to-white relative"
                  >
                     {/* Shine effect */}
                     <div className="absolute top-0 right-0 bottom-0 w-2 bg-white/50 blur-[2px]"></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;