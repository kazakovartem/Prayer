import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Authorisation from '../screens/AuthorisationScreen';
import Registration from '../screens/RegistrationScreen';
import { Routes } from './types';

const Stack = createNativeStackNavigator();

const UnknownUserNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.SignIn}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Routes.SignIn} component={Authorisation} />
      <Stack.Screen name={Routes.SignUp} component={Registration} />
    </Stack.Navigator>
  );
};
export default UnknownUserNavigation;