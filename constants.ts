import { TimelineItem, Skill } from './types';
import { Sword, Shield, BookOpen, Feather, Map, Camera, Gamepad2, Coffee } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "艾伦耶格尔", 
  title: "全栈调查兵 | 自由追寻者",
  location: "西甘希纳区 (远程)",
  bio: "就像向往墙外世界的调查兵一样，我带着无尽的好奇心探索新技术的疆域。代码是我的立体机动装置，让我能在这个复杂的数字世界中灵活穿梭，精准解决问题。我渴望创造出震撼人心的数字体验，追寻真正的自由。",
  quote: "不战斗就无法胜利。战斗吧！",
  email: "scout@survey-corps.dev"
};

export const TIMELINE_DATA: TimelineItem[] = [
  {
    year: "2015 - 2018",
    title: "启蒙时刻：那一天",
    description: "旅程始于正规教育的墙壁之内。目睹了行业巨头（巨人）的力量，深刻意识到自己的弱小，为了生存与自由，决心拿起代码作为武器，发誓要将Bug一个不留地驱逐出去。",
    wall: "Maria",
    icon: "book"
  },
  {
    year: "2019 - 2021",
    title: "磨砺：第104期训练兵团",
    description: "高强度的基础训练期。掌握了HTML, CSS, JS（立体机动装置基础）。经历了无数次失败（摔倒），终于掌握了在代码世界生存所需的重心平衡与机械原理，并在解构算法中寻找斩杀巨人的后颈。",
    wall: "Rose",
    icon: "sword"
  },
  {
    year: "2022 - 至今",
    title: "出征：玛利亚夺还战",
    description: "走出舒适区（墙壁），构建复杂的全栈应用。带领团队探索无服务器架构和AI集成的未知领域。为了探寻地下室的真相（技术的本质），不断向墙外进发。",
    wall: "Outside",
    icon: "feather"
  }
];

export const SKILLS_DATA: Skill[] = [
  { name: "React / Next.js (立体机动)", level: 95, category: "Combat" },
  { name: "TypeScript (硬质化能力)", level: 90, category: "Combat" },
  { name: "系统架构 (战术指挥)", level: 85, category: "Strategy" },
  { name: "UI/UX 设计 (信号弹)", level: 80, category: "Strategy" },
  { name: "调试 Debugging (阿克曼直觉)", level: 98, category: "Survival" },
];

export const PLANNING_DATA = [
  {
    phase: "短期目标",
    title: "夺回托洛斯特区",
    desc: "精通Rust与WebAssembly，强化单兵作战能力。在开源社区贡献代码，修补城墙漏洞。",
    icon: Shield
  },
  {
    phase: "中期目标",
    title: "抵达地下室",
    desc: "深入研究分布式系统与AI大模型，探寻技术的本源。带领团队完成大型项目架构重构。",
    icon: Map
  },
  {
    phase: "终极愿景",
    title: "海的那边",
    desc: "创造属于自己的数字产品，打破技术壁垒，实现真正的财务与创作自由。将视野扩展到世界每一个角落。",
    icon: Feather
  }
];

export const HOBBIES_DATA = [
  {
    name: "历史研读",
    desc: "研究古老的文献，试图解开世界的真相。",
    icon: BookOpen,
    image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?q=80&w=2074&auto=format&fit=crop"
  },
  {
    name: "战术模拟",
    desc: "在策略游戏中推演战局，锻炼指挥能力。",
    icon: Gamepad2,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "壁外摄影",
    desc: "记录墙外的风景，捕捉瞬间的永恒。",
    icon: Camera,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop"
  },
  {
    name: "体能训练",
    desc: "保持强健的体魄，以适应高强度的立体机动。",
    icon: Coffee, 
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
  }
];

export const VALUES_DATA = [
  {
    title: "自由 (Jiyuu)",
    desc: "代码让我们构建没有边界的世界。我崇尚开源精神和信息的自由流动，不被传统框架所束缚。",
    color: "text-sky-400"
  },
  {
    title: "献出心脏 (Shinzou)",
    desc: "每一个像素，每一个函数，都需要全心投入。为了完美的用户体验，毫无保留地贡献力量。",
    color: "text-red-600"
  },
  {
    title: "无悔的选择 (Sentaku)",
    desc: "学习、转型、重构... 对自己做出的选择无怨无悔，并相信这些决定能通向我们期望的结果。",
    color: "text-emerald-500"
  }
];

// Using a more reliable Archive.org direct link for Apple Seed
export const AUDIO_URL = "https://ia802907.us.archive.org/29/items/attack-on-titan-season-2-ost-apple-seed/Attack%20on%20Titan%20Season%202%20OST%20-%20Apple%20Seed.mp3";