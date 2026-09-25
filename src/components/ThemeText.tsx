import { StyleSheet, Text } from 'react-native'
import { Colors } from '../constants/Colors'

interface ThemeTextProps {
    text: string,
    rest?: any
    variant?: 'operationNumbers' | 'result'
}

const ThemeText = ({text, variant, ...rest} : ThemeTextProps) => {
  return (
    <Text style={[{ fontFamily: 'Raleway' }, variant === 'operationNumbers' ? styles.operationNumbers : styles.result]} {...rest}>{text}</Text>
  )
}

const styles = StyleSheet.create({
  operationNumbers: {
    color: Colors.textPrimary,
    fontSize: 70,
    textAlign: 'right',
    fontWeight: '400'
  },
  result: {
    color: Colors.textSecondary,
    fontSize: 40,
    textAlign: 'right',
    fontWeight: '300'
  }
})

export default ThemeText