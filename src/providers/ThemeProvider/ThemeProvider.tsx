import React, { createContext, useContext, ReactNode } from "react";
import { useColorScheme } from "react-native";
import { darkTheme, lightTheme, Theme } from "../../theme";

const ThemeContext = createContext<Theme>(lightTheme);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? darkTheme : lightTheme;

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
