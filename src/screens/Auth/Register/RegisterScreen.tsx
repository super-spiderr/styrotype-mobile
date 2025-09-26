import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { getLoginScreenStyles } from '../Login/styles';
import { useStyles } from '../../../hooks/useStyles';
import { useNavigation } from '@react-navigation/native';
import { AuthScreenNavigation } from '../../../navigators/types';
import { useTheme } from '../../../providers/ThemeProvider/ThemeProvider';
import { ThemedText } from '../../../components/core/ThemedText/ThemedText';

const RegisterScreen = () => {
    const styles = useStyles(getLoginScreenStyles);
    const navigation = useNavigation<AuthScreenNavigation<'Register'>>();
     const theme = useTheme();
  return (
    <View style={styles.container}>
       <ThemedText variant='h3' color={theme.colors.colors.textPrimary}>Register</ThemedText>
       <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go to Register</Text>
      </TouchableOpacity>
    </View>
  )
}

export default RegisterScreen