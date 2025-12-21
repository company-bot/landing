import { ReactNode } from 'react';

export interface CapabilityItem {
  id: string;
  title: string;
  description: string;
  keywords: string[];
  icon?: ReactNode;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ThemeState {
  isDarkMode: boolean;
  toggleTheme: () => void;
}
