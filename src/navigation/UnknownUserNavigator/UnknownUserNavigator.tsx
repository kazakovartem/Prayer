import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Authorizations from './AuthorizationsScreen';
import Registration from './RegistrationScreen';
import { Routes } from '../types';

const Stack = createNativeStackNavigator();

const UnknownUserNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.SignIn}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={Routes.SignIn} component={Authorizations} />
      <Stack.Screen name={Routes.SignUp} component={Registration} />
    </Stack.Navigator>
  );
};
export default UnknownUserNavigator;
