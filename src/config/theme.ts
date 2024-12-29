/**
 * @file theme.ts
 * @description Theme configuration and types for the application
 */

export interface Theme {
  colors: {
    background: {
      dark: string;
      darker: string;
    };
    text: {
      primary: string;
      secondary: string;
    };
    hover: {
      background: string;
    };
    active: {
      background: string;
    };
    primary: string;
  };
}

export type ThemeType = "dark" | "catppuccin";

const darkTheme: Theme = {
  colors: {
    background: {
      dark: "#1C1C1C",
      darker: "#181818",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#A1A1A1",
    },
    hover: {
      background: "#2A2A2A",
    },
    active: {
      background: "#333333",
    },
    primary: "#007AFF",
  },
};

const catppuccinTheme: Theme = {
  colors: {
    background: {
      dark: "#1E1E2E",
      darker: "#181825",
    },
    text: {
      primary: "#CDD6F4",
      secondary: "#BAC2DE",
    },
    hover: {
      background: "#313244",
    },
    active: {
      background: "#45475A",
    },
    primary: "#89B4FA",
  },
};

export const themes: Record<ThemeType, Theme> = {
  dark: darkTheme,
  catppuccin: catppuccinTheme,
};
