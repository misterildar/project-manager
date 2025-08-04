export interface Project {
  id: number;
  title: string;
  description: string;
  status: "active" | "completed" | "paused";
  team: string[];
  teamLeader: string;
  teamLeaderBack?: string;
  startDate: string;
  endDate?: string;
  progressFront: number;
  progressBackend: number;
  details: string;
  repository?: string;
  figmaUrl?: string;
  chat: string;
  boards: string;
  backLanguage?: string;
  projectManager?: string;
  productManager?: string;
  meetingTime?: string;
  meetingUrl?: string;
}

export const statusLabels = {
  active: "Активный",
  completed: "Завершен",
  paused: "Приостановлен",
} as const;

export const statusVariants = {
  active: "success",
  completed: "info",
  paused: "warning",
} as const;
