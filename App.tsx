import { View, Text ,TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './component/Login';
import Loginphone from './component/Loginphone';

const Stack = createNativeStackNavigator();

  

const App = () => {
  
  return (
    <NavigationContainer>
    <Stack.Navigator>
      
      <Stack.Screen name="Login" component={Login} options = {{headerShown: false}} />
    </Stack.Navigator>
    
  </NavigationContainer>
   

  )
};
export default App