import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "../providers/ThemeProvider/ThemeProvider";
import AuthStackNavigator from "./AuthStackNavigator";
import AppStackNavigator from "./AppStackNavigator";
import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  const theme = useTheme();

  const screenOptions = {
    headerShown: false,
    contentStyle: { backgroundColor: theme.colors.colors.background },
  };

  return (
    <Stack.Navigator screenOptions={screenOptions} initialRouteName="Auth">
      <Stack.Screen name="Auth" component={AuthStackNavigator} />
      <Stack.Screen name="App" component={AppStackNavigator} />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
