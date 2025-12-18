import { create } from 'zustand';
import { ThemeState } from '../types';

// Get initial theme from localStorage or default to light mode
const getInitialTheme = (): boolean => {
  if (typeof window === 'undefined') return false;
  const stored = localStorage.getItem('theme');
  return stored === 'dark';
};

export const useStore = create<ThemeState>((set) => ({
  isDarkMode: getInitialTheme(),
  toggleTheme: () => set((state) => {
    const newMode = !state.isDarkMode;
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', newMode);
    }
    return { isDarkMode: newMode };
  }),
}));
