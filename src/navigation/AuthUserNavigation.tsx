import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './types';
import Board from '../screens/BoardScreen';

const Stack = createNativeStackNavigator();

const AuthUserNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Board}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Routes.Board} component={Board} />
    </Stack.Navigator>
  );
};
export default AuthUserNavigation;