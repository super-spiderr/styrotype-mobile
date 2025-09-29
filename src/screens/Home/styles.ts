import { StyleSheet } from "react-native";
import { Theme } from "../../theme";

export const getHomeScreenStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
    },
    button: {
      height: 50,
      width: "100%",
      backgroundColor: theme.colors.colors.error,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      bottom: 10,
    },
  });
