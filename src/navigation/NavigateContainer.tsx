import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import UnknownUserNavigator from './UnknownUserNavigator';
import AuthUserNavigator from './AuthUserNavigator';
import { selectors } from '../state/ducks/ducks';

const MainNavigationContainer = () => {
  const isLogged = useSelector(selectors.user.selectUser()).logged;
  return (
    <NavigationContainer>
      {isLogged ? <AuthUserNavigator /> : <UnknownUserNavigator />}
    </NavigationContainer>
  );
};
export default MainNavigationContainer;
