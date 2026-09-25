import { useFonts } from 'expo-font';
import { Slot } from 'expo-router'; //slot sirve para renderizar el contenido de la pantalla
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../constants/Colors';

const RootLayout = () => {

  const [loaded] = useFonts({
    'Raleway': require('../../assets/fonts/Raleway-Regular.ttf'),
  })

  if (!loaded) {
    return null
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style = {styles.background}>

        <StatusBar style="light" />

        <Text>_layout</Text>

        <Slot />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.background
  }
});

export default RootLayout