import { create } from 'zustand';
import { ThemeState } from '../types';

export const useStore = create<ThemeState>((set) => ({
  isDarkMode: true,
  toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));
