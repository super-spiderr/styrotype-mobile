import { useMemo } from "react";
import { Theme } from "../theme/index";
import { useTheme } from "../providers/ThemeProvider/ThemeProvider"



export const useStyles = <T>(getStylesFn: (theme: Theme) => T): T => {
  const theme = useTheme();
  return useMemo(() => getStylesFn(theme), [theme, getStylesFn]);
};
