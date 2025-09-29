import { StyleSheet } from "react-native";
import { Theme } from "src/theme";

export const getInputStyles = (theme: Theme) =>
  StyleSheet.create({
    mainContainer: {
      marginVertical: 4,
      width: "100%",
      alignSelf: "center",
      justifyContent: "center",
    },
    text: {
      left: 54,
      top: 18,
      fontSize: 12,
      position: "absolute",
      zIndex: 2,
      fontFamily: "Cabin-Regular",
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      borderWidth: 0.7,
      borderRadius: 6,
      height: 50,
      paddingHorizontal: 8,
    },
    left: {
      marginRight: 8,
    },
    right: {
      marginLeft: 8,
    },
    textInput: {
      flex: 1,
      fontSize: 14,
      color: "#6b7280",
      paddingVertical: 0,
    },
  });
