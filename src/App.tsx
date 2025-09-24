import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { ThemeProvider, useTheme } from "./providers/ThemeProvider";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "./components/core/ThemedText/ThemedText";
import StyroLogoIcon from "./assets/icons/styroLogo";

const HomeScreen = () => {
  const theme = useTheme();
 return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]} edges={["bottom", "left", "right"]}>
      <ImageBackground source={require('./assets/images/background.png')} style={{flex:1, justifyContent:'center', alignItems:'center', paddingHorizontal: 16,}} resizeMode='cover'>
      <StyroLogoIcon/>
      {/* <View>
      <ThemedText variant="h1" color={theme.colors.text}>Styrotype</ThemedText>
      <ThemedText variant="caption" color={theme.colors.text}>Step into Styrotype, your ultimate destination for style, tech, and lifestyle essentials. Enjoy seamless shopping, lightning-fast delivery, and deals you can’t resist.</ThemedText>
      </View> */}
      </ImageBackground>
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
  
  },
});
