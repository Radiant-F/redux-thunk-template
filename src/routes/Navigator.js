import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Dashboard, Login, Register} from '../screens/exports';

const Stack = createNativeStackNavigator();
export function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Login} name="Login" />
        <Stack.Screen component={Register} name="Register" />
        <Stack.Screen component={Dashboard} name="Dashboard" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
