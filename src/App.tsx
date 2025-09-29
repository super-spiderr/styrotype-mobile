import React from "react";
import { ThemeProvider } from "./providers/ThemeProvider/ThemeProvider";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { NavigationContainer } from "@react-navigation/native";
import RootStackNavigator from "./navigators/RootStackNavigator";
import { AuthProvider } from "./providers/AuthProvider/AuthProvider";

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AuthProvider>
          <NavigationContainer>
            <RootStackNavigator />
          </NavigationContainer>
        </AuthProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
