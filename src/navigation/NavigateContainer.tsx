import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import UnknownUserNavigation from './UnknownUserNavigation';
import AuthUserNavigation from './AuthUserNavigation';
import { selectors } from '../state/ducks/ducks';

const MainNavigationContainer = () => {
  const isLogged = useSelector(selectors.user.selectUser()).logged;
  return (
    <NavigationContainer>
      {isLogged ? <AuthUserNavigation /> : <UnknownUserNavigation />}
    </NavigationContainer>
  );
};
export default MainNavigationContainer;
