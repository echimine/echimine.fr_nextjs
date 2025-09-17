'use client';

import { useEffect } from 'react';
import { useProjectStore } from '@/app/stores/call-api-sell-events';

export function HydrateProjects({ projects }: { projects: any[] }) {
  const setProjects = useProjectStore((s) => s.setProjects);

  useEffect(() => {
    setProjects(projects);
  }, [projects, setProjects]);

  return null; // sert juste à hydrater Zustand
}
