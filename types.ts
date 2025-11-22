export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  wall: "Maria" | "Rose" | "Sina" | "Outside";
  icon: "sword" | "shield" | "book" | "feather";
}

export interface Skill {
  name: string;
  level: number; // 1-100
  category: "Combat" | "Strategy" | "Survival";
}

export interface EasterEggState {
  triggered: boolean;
  message: string;
}