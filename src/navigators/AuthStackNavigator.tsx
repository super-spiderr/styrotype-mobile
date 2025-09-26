import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen, RegisterScreen } from "../screens/Auth";
import { useTheme } from "../providers/ThemeProvider/ThemeProvider";
import { AuthStackParamList } from "./types";
import { Navigations } from "../constants/navigation";

const Stack = createNativeStackNavigator<AuthStackParamList>();


const AuthStackNavigator = () => {
  const theme = useTheme();

  const screenOptions = {
    headerShown: false,
    contentStyle: { backgroundColor: theme.colors.colors.background }
  };

  return (
    <Stack.Navigator screenOptions={screenOptions} initialRouteName="Login">
      <Stack.Screen name={Navigations.LoginScreen}component={LoginScreen} />
      <Stack.Screen name={Navigations.RegisterScreen} component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;