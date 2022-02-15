import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from '../types';
import Columns from './ColumnsScreen/';
import Prayers from './PrayersScreen';
import Prayer from './OnePrayerScreen';
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
      <Stack.Screen name={Routes.Prayers} component={Prayers} />
      <Stack.Screen name={Routes.Prayer} component={Prayer} />
    </Stack.Navigator>
  );
};
export default AuthUserNavigation;
