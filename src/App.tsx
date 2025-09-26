import React from "react";
import { ThemeProvider } from "./providers/ThemeProvider/ThemeProvider";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { NavigationContainer } from "@react-navigation/native";
import RootStackNavigator from "./navigators/RootStackNavigator";




export default function App() {
  return (
     <SafeAreaProvider>
      <ThemeProvider>
        <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}


