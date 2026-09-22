'use client';

import React, { createContext, useContext, useEffect, useSyncExternalStore } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = 'nikhar_theme';

const themeListeners = new Set<() => void>();

function notifyThemeListeners() {
  for (const listener of themeListeners) {
    listener();
  }
}

function subscribeToTheme(listener: () => void) {
  themeListeners.add(listener);
  window.addEventListener('storage', listener);
  return () => {
    themeListeners.delete(listener);
    window.removeEventListener('storage', listener);
  };
}

function getThemeSnapshot(): Theme {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'dark' || saved === 'light') {
      return saved;
    }
  } catch {}
  return 'light';
}

function getServerThemeSnapshot(): Theme {
  return 'light';
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot
  );

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [theme]);

  const setTheme = React.useCallback((newTheme: Theme) => {
    try {
      localStorage.setItem(STORAGE_KEY, newTheme);
    } catch {}
    notifyThemeListeners();
  }, []);

  const toggleTheme = React.useCallback(() => {
    const current = getThemeSnapshot();
    const next = current === 'light' ? 'dark' : 'light';
    setTheme(next);
  }, [setTheme]);

  const contextValue = React.useMemo(() => ({
    theme,
    toggleTheme,
    setTheme,
  }), [theme, toggleTheme, setTheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
