import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/index';
import FormScreen from '../screens/Form/index';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Form" component={FormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
