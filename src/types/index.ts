import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Routes } from '../navigation/types';

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};
export type authScreenProp = StackNavigationProp<RootStackParamList, 'SignUp'>;