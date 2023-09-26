import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PanicButtonScreen from './screens/PanicButtonScreen';
import GeneralInfoScreen from './screens/GeneralInfoScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function App(): JSX.Element {

  /* const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }; */

  const Stack = createNativeStackNavigator();
  

  return (
    <GestureHandlerRootView style={{flex:1}}>
      <NavigationContainer>
        {/* <SafeAreaView> */}
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={PanicButtonScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="Info" component={GeneralInfoScreen} options={{ headerShown: false }} />
          </Stack.Navigator>
        {/* </SafeAreaView> */}
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;

