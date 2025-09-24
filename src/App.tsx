import React from "react";
import { StyleSheet } from "react-native";
import { ThemeProvider, useTheme } from "./providers/ThemeProvider";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "./components/core/ThemedText/ThemedText";

const HomeScreen = () => {
  const theme = useTheme();
 return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]} edges={["top", "left", "right"]}>
      <ThemedText variant="h2" color={theme.colors.primary}>Styrotype</ThemedText>
      <ThemedText variant="caption" color={theme.colors.text}>Step into Styrotype, your ultimate destination for style, tech, and lifestyle essentials. Enjoy seamless shopping, lightning-fast delivery, and deals you can’t resist.</ThemedText>
    </SafeAreaView>
  );
};

export default function App() {
  return (
     <SafeAreaProvider>
      <ThemeProvider>
        <HomeScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    //alignItems: "center",
    paddingHorizontal: 16,
  },
});
