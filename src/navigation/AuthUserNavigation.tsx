import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './types';
import Columns from '../screens/ColumnsScreen';

const Stack = createNativeStackNavigator();

const AuthUserNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Columns}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={Routes.Columns} component={Columns} />
    </Stack.Navigator>
  );
};
export default AuthUserNavigation;
