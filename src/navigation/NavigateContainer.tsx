import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import UnknownUserNavigation from './UnknownUserNavigation';
import AuthUserNavigation from './AuthUserNavigation';

const MainNavigationContainer = () => {
  const isLogged = false;
  return (
    <NavigationContainer>
      {isLogged ? <AuthUserNavigation /> : <UnknownUserNavigation />}
    </NavigationContainer>
  );
};
export default MainNavigationContainer;