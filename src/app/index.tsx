import { StyleSheet, View } from 'react-native'
import CalculatorButton from '../components/CalculatorButton'
import ThemeText from '../components/ThemeText'
import { Colors } from '../constants/Colors'

const index = () => {
  return (
    <View style={styles.calculatorContainer}>

      <View style = {styles.themeContainer}>
        <ThemeText variant='operationNumbers' text="50 x 50" rest={{ numberOfLines: 1, adjustsFontSizeToFit: true }} />

        <ThemeText variant='result' text="250" />
      </View>

      <View style={styles.row}>
        <CalculatorButton blackText value="C" color={Colors.lightGray} onPress={() => console.log('C')} />
        <CalculatorButton blackText value="+/-" color={Colors.lightGray} onPress={() => console.log('+/-')} />
        <CalculatorButton blackText value="del" color={Colors.lightGray} onPress={() => console.log('del')} />
        <CalculatorButton value="÷" color={Colors.orange} onPress={() => console.log('÷')} />
      </View>

      <View style={styles.row}>
        <CalculatorButton value="7" onPress={() => console.log('7')} />
        <CalculatorButton value="8" onPress={() => console.log('8')} />
        <CalculatorButton value="9" onPress={() => console.log('9')} />
        <CalculatorButton value="x" color={Colors.orange} onPress={() => console.log('x')} />
      </View>

      <View style={styles.row}>
        <CalculatorButton value="4" onPress={() => console.log('4')} />
        <CalculatorButton value="5" onPress={() => console.log('5')} />
        <CalculatorButton value="6" onPress={() => console.log('6')} />
        <CalculatorButton value="-" color={Colors.orange} onPress={() => console.log('-')} />
      </View>

      <View style={styles.row}>
        <CalculatorButton value="1" onPress={() => console.log('1')} />
        <CalculatorButton value="2" onPress={() => console.log('2')} />
        <CalculatorButton value="3" onPress={() => console.log('3')} />
        <CalculatorButton value="+" color={Colors.orange} onPress={() => console.log('+')} />
      </View>

      <View style={styles.row}>
        <CalculatorButton value="0" isZero onPress={() => console.log('0')} />
        <CalculatorButton value="." onPress={() => console.log('.')} />
        <CalculatorButton value="=" onPress={() => console.log('=')} />
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

export default index