/**
 * @file theme.store.ts
 * @description Zustand store for managing theme state and switching
 */

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { themes, ThemeType, Theme } from "@/config/theme";

interface ThemeState {
  currentTheme: ThemeType;
  theme: Theme;
  setTheme: (theme: ThemeType) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      currentTheme: "dark",
      theme: themes.dark,
      setTheme: (newTheme) => {
        // Update CSS variables
        const root = document.documentElement;
        const theme = themes[newTheme];

        // Update background colors
        root.style.setProperty(
          "--theme-background-dark",
          theme.colors.background.dark
        );
        root.style.setProperty(
          "--theme-background-darker",
          theme.colors.background.darker
        );

        // Update text colors
        root.style.setProperty(
          "--theme-text-primary",
          theme.colors.text.primary
        );
        root.style.setProperty(
          "--theme-text-secondary",
          theme.colors.text.secondary
        );

        // Update hover and active states
        root.style.setProperty(
          "--theme-hover-background",
          theme.colors.hover.background
        );
        root.style.setProperty(
          "--theme-active-background",
          theme.colors.active.background
        );

        // Update primary color
        root.style.setProperty("--theme-primary", theme.colors.primary);

        set({ currentTheme: newTheme, theme });
      },
    }),
    {
      name: "theme-storage",
      // Only store the theme name, not the entire theme object
      partialize: (state) => ({ currentTheme: state.currentTheme }),
    }
  )
);
