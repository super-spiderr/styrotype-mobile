import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "../providers/ThemeProvider/ThemeProvider";

import { AppStackParamList } from "./types";
import { HomeScreen } from "../screens/Home";
import { Navigations } from "../constants/navigation";

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStackNavigator = () => {
  const theme = useTheme();

  const screenOptions = {
    headerShown: false,
    contentStyle: { backgroundColor: theme.colors.colors.background }
  };

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={Navigations.HomeScreen} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AppStackNavigator;