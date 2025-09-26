import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useStyles } from '../../../hooks/index'
import { getLoginScreenStyles } from './styles'
import { useNavigation } from '@react-navigation/native'
import { AuthScreenNavigation } from '../../../navigators/types'
import { ThemedText } from '../../../components/core/ThemedText/ThemedText'
import { useTheme } from '../../../providers/ThemeProvider/ThemeProvider'



const LoginScreen = () => {
  const styles = useStyles(getLoginScreenStyles);
  const navigation = useNavigation<AuthScreenNavigation<'Login'>>();
  const theme = useTheme();

  return (
    <View style={styles.container}>
    <ThemedText variant='h3' color={theme.colors.colors.textPrimary}>Login</ThemedText>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <ThemedText variant='body' color={theme.colors.colors.textPrimary}>Go to Register</ThemedText>
      </TouchableOpacity>
    </View>
  )
}

export default LoginScreen