import { create } from 'zustand';

type Project = {
  id: number;
  created_at: string;
  name: string;
  description: string;
  logo: string;
  slug: string;
  project_id_revenuecat: string;
  revenuecat_api_key: string;
};

interface ProjectState {
  projects: Project[];
  setProjects: (projects: Project[]) => void;
  getProjectBySlug: (slug: string) => Project | undefined;
}

export const useProjectStore = create<ProjectState>((set, get) => ({
  projects: [],
  setProjects: (projects) => set({ projects }),
  getProjectBySlug: (slug) => get().projects.find((p) => p.slug === slug),
}));
