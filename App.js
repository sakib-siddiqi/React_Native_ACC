import { StatusBar } from 'expo-status-bar';
import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import Screen3 from './screens/Screen3';
import Screen2 from './screens/Screen2';
import Screen1 from './screens/Screen1';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const Stack = createNativeStackNavigator();

export default function App() {
  // ...INSTALLING FONTS...
  const [loaded] = useFonts({
    display: require('./assets/fonts/SF-pro-display.ttf'),
    text: require('./assets/fonts/SF-pro-test.ttf'),
  });

  if (!loaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Screen1' screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Screen1" component={Screen1} />
          <Stack.Screen name="Screen2" component={Screen2} />
          <Stack.Screen name="Screen3" component={Screen3} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
