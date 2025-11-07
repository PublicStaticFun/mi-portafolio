import { create } from 'zustand'

const useStore = create((set) => ({
    projects: [
        { id: 1, title: 'Proyecto 1', description: 'Descripcion breve.' },
        { id: 2, title: 'Proyecto 2', description: 'Otra descripción.' },
        { id: 3, title: 'Proyecto 3', description: 'Otra otra descripción' },
    ],
    addProject: (project) => set((state) => ({ projects: [...state.projects, project] })),
}));

export default useStore;
