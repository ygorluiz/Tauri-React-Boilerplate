import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AppState {
	isInitialized: boolean;
	setInitialized: (val: boolean) => void;
	// Adicione outras propriedades globais aqui
}

export const useAppStore = create<AppState>()(
	persist(
		(set) => ({
			isInitialized: false,
			setInitialized: (val) => set({ isInitialized: val }),
		}),
		{
			name: 'app-storage',
		},
	),
);
