import { create } from 'zustand';

interface StoreState {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const useStore = create<StoreState>((set) => ({
  isDarkMode: false,
  toggleTheme: () => set((state) => {
    const newMode = !state.isDarkMode;
    document.documentElement.classList.toggle('dark', newMode);
    return { isDarkMode: newMode };
  }),
}));
