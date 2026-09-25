import * as Haptics from 'expo-haptics';
import { Pressable, StyleSheet, Text } from 'react-native';
import { Colors } from '../constants/Colors';

interface CalculatorButtonProps {
    isZero?: boolean
    value: string,
    color?: string,
    blackText?: boolean
    onPress: () => void
}

const CalculatorButton = ({value, color = Colors.darkGray, blackText, isZero = false, onPress} : CalculatorButtonProps) => {
  return (

    <Pressable style={({pressed}) => ({
        ...styles.calculatorButton,
        backgroundColor: color,
        width: isZero ? 180 : 80,
        opacity: pressed ? 0.8 : 1
        })}
        onPress={() => {
          Haptics.selectionAsync()
          onPress()
        }}
    >
        <Text style={{...styles.calculatorButtonText, color: blackText ? 'black' : 'white'}}>{value}</Text>
    </Pressable>

  )
}

const styles = StyleSheet.create({
  calculatorButton: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10
  },
  calculatorButtonText: {
    textAlign: 'center',
    padding: 10,
    color: Colors.textPrimary,
    fontSize: 30,
    fontWeight: '300'
  }
})

export default CalculatorButton