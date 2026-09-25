import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import CalculatorButton from '../components/CalculatorButton'
import ThemeText from '../components/ThemeText'
import { Colors } from '../constants/Colors'
import { Operations, calculate } from '../constants/Operations'

const Index = () => {

  const [display, setDisplay] = useState('0')
  const [previousValue, setPreviousValue] = useState<string | null>(null)
  const [operation, setOperation] = useState<string | null>(null)
  const [resetDisplay, setResetDisplay] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  const [lastExpression, setLastExpression] = useState<string | null>(null)

  const clearResult = () => {
    setResult(null)
    setLastExpression(null)
  }

  const handleNumberPress = (num: string) => {
    clearResult()

    if (resetDisplay) {
      setDisplay(num === '.' ? '0.' : num)
      setResetDisplay(false)
      return
    }

    if (num === '.' && display.includes('.')) return

    setDisplay(display === '0' && num !== '.' ? num : display + num)
  }

  const handleOperationPress = (op: string) => {
    clearResult()

    if (previousValue !== null && operation && !resetDisplay) {
      const result = calculate[operation](Number(previousValue), Number(display))
      setPreviousValue(String(result))
      setDisplay(String(result))
    } else {
      setPreviousValue(display)
    }

    setOperation(op)
    setResetDisplay(true)
  }

  const handleEqualsPress = () => {
    if (previousValue === null || !operation) return

    const computed = calculate[operation](Number(previousValue), Number(display))
    setLastExpression(`${previousValue} ${operation} ${display}`)
    setResult(String(computed))
    setDisplay(String(computed))
    setPreviousValue(null)
    setOperation(null)
    setResetDisplay(true)
  }

  const handleClear = () => {
    clearResult()
    setDisplay('0')
    setPreviousValue(null)
    setOperation(null)
    setResetDisplay(false)
  }

  const handleToggleSign = () => {
    clearResult()
    setDisplay(display.startsWith('-') ? display.slice(1) : '-' + display)
  }

  const handleDelete = () => {
    clearResult()

    if (display.length === 1 || (display.length === 2 && display.startsWith('-'))) {
      setDisplay('0')
      return
    }
    setDisplay(display.slice(0, -1))
  }

  const expression = operation
    ? `${previousValue} ${operation}${resetDisplay ? '' : ` ${display}`}`
    : display

  const mainText = result ?? expression
  const trail = result ? lastExpression ?? ' ' : ' '

  return (
    <View style={styles.calculatorContainer}>

      <View style = {styles.themeContainer}>
        <ThemeText variant='result' text={trail} />

        <ThemeText variant='operationNumbers' text={mainText} rest={{ numberOfLines: 1, adjustsFontSizeToFit: true }} />
      </View>

      <View style={styles.row}>
        <CalculatorButton blackText value="C" color={Colors.lightGray} onPress={handleClear} />
        <CalculatorButton blackText value="+/-" color={Colors.lightGray} onPress={handleToggleSign} />
        <CalculatorButton blackText value="del" color={Colors.lightGray} onPress={handleDelete} />
        <CalculatorButton value={Operations.divide} color={Colors.orange} onPress={() => handleOperationPress(Operations.divide)} />
      </View>

      <View style={styles.row}>
        <CalculatorButton value="7" onPress={() => handleNumberPress('7')} />
        <CalculatorButton value="8" onPress={() => handleNumberPress('8')} />
        <CalculatorButton value="9" onPress={() => handleNumberPress('9')} />
        <CalculatorButton value={Operations.multiply} color={Colors.orange} onPress={() => handleOperationPress(Operations.multiply)} />
      </View>

      <View style={styles.row}>
        <CalculatorButton value="4" onPress={() => handleNumberPress('4')} />
        <CalculatorButton value="5" onPress={() => handleNumberPress('5')} />
        <CalculatorButton value="6" onPress={() => handleNumberPress('6')} />
        <CalculatorButton value={Operations.subtract} color={Colors.orange} onPress={() => handleOperationPress(Operations.subtract)} />
      </View>

      <View style={styles.row}>
        <CalculatorButton value="1" onPress={() => handleNumberPress('1')} />
        <CalculatorButton value="2" onPress={() => handleNumberPress('2')} />
        <CalculatorButton value="3" onPress={() => handleNumberPress('3')} />
        <CalculatorButton value={Operations.add} color={Colors.orange} onPress={() => handleOperationPress(Operations.add)} />
      </View>

      <View style={styles.row}>
        <CalculatorButton value="0" isZero onPress={() => handleNumberPress('0')} />
        <CalculatorButton value="." onPress={() => handleNumberPress('.')} />
        <CalculatorButton value="=" onPress={handleEqualsPress} />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  themeContainer: {
    paddingHorizontal: 25,
    paddingBottom: 25
  },
  calculatorContainer: {
    flex: 1,
    justifyContent: 'flex-end', //esto hace que el contenido se muestre en la parte inferior
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10
  }
})

export default Index