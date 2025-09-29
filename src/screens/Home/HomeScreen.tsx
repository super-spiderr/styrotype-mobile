import StyroLogoIcon from "../../assets/icons/styroLogo";
import { ThemedText } from "../../components/core/ThemedText/ThemedText";
import { View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getHomeScreenStyles } from "./styles";
import { useStyles } from "../../hooks/useStyles";
import { useTheme } from "../../providers/ThemeProvider/ThemeProvider";
import { useAuth } from "../../providers/AuthProvider/AuthProvider";
import { useCallback } from "react";
import { getAuth, signOut } from "@react-native-firebase/auth";

const HomeScreen = () => {
  const theme = useTheme();
  const styles = useStyles(getHomeScreenStyles);
  const { user, setUser } = useAuth();
  const logout = useCallback(async () => {
    try {
      await signOut(getAuth());
      setUser(null);
    } catch (err) {
      console.log("Logout error:", err);
    }
  }, []);
  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: theme.colors.colors.background },
      ]}
      edges={["bottom", "left", "right"]}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 16,
          gap: 10,
        }}
      >
        <StyroLogoIcon color={theme.colors.colors.primary} />
        <View
          style={{ gap: 7, justifyContent: "center", alignItems: "center" }}
        >
          <ThemedText variant="h2" color={theme.colors.colors.textPrimary}>
            Styrotype
          </ThemedText>
          <ThemedText variant="h3" color={theme.colors.colors.textPrimary}>
            Hi {user?.email ?? ""}
          </ThemedText>
          <ThemedText
            style={{ textAlign: "center", lineHeight: 20 }}
            variant="bodySmall"
            color={theme.colors.colors.textPrimary}
          >
            Step into Styrotype, your ultimate destination for style, tech, and
            lifestyle essentials. Enjoy seamless shopping, lightning-fast
            delivery, and deals you can’t resist.
          </ThemedText>
        </View>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={logout}
        >
          <ThemedText variant="body" color={theme.colors.colors.text}>
            Logout
          </ThemedText>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
