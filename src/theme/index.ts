import { lightColors, darkColors } from "./colors";
import { spacing } from "./spacing";
import { typography } from "./typography";

export type Theme = {
  colors: typeof lightColors;
  spacing: typeof spacing;
  typography: typeof typography;
};

export const lightTheme: Theme = {
  colors: lightColors,
  spacing,
  typography,
};

export const darkTheme: Theme = {
  colors: darkColors,
  spacing,
  typography,
};
