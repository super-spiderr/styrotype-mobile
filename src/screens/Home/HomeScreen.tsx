import StyroLogoIcon from '../../assets/icons/styroLogo';
import { ThemedText } from "../../components/core/ThemedText/ThemedText";
import { ImageBackground, View,TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { getHomeScreenStyles } from "./styles";
import { useStyles } from "../../hooks/useStyles"
import { useTheme } from '../../providers/ThemeProvider/ThemeProvider';

const HomeScreen = () => {
 const theme = useTheme();
 const styles = useStyles(getHomeScreenStyles)

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: theme.colors.colors.primaryDark },
      ]}
      edges={["bottom", "left", "right"]}
    >
      <ImageBackground
        source={require('../../assets/images/background.png')}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 16,
          gap: 20,
        }}
        resizeMode="cover"
      >
      <StyroLogoIcon/>
      <View style={{gap:10,justifyContent:'center', alignItems:'center'}}>
      <ThemedText variant="h1" color={theme.colors.colors.textPrimary}>Styrotype</ThemedText>
      <ThemedText style={{textAlign:'center',lineHeight:27}} variant="body" color={theme.colors.colors.textSecondary}>Step into Styrotype, your ultimate destination for style, tech, and lifestyle essentials. Enjoy seamless shopping, lightning-fast delivery, and deals you can’t resist.</ThemedText>
      </View>
      <TouchableOpacity style={styles.button} activeOpacity={0.8}>
        <ThemedText variant="body"  color={theme.colors.colors.border}>Let's Break the Sterotype !</ThemedText>
      </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
};      

export default HomeScreen;