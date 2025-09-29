import { Theme } from "../../../theme/index";
import { StyleSheet } from "react-native";

export const getRegisterScreenStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.colors.primaryDark,
    },
    button: {
      height: 50,
      width: "100%",
      backgroundColor: theme.colors.colors.primaryDark,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      bottom: 10,
    },
  });
