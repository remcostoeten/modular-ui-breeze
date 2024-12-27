import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface WorkspaceStore {
  currentWorkspace: string;
  setCurrentWorkspace: (workspace: string) => void;
}

export const useWorkspaceStore = create<WorkspaceStore>()(
  persist(
    (set) => ({
      currentWorkspace: "remcostoeten's Org",
      setCurrentWorkspace: (workspace) => set({ currentWorkspace: workspace }),
    }),
    {
      name: 'workspace-storage',
    }
  )
);