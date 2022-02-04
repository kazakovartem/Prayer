import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Routes } from '../navigation/types';

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  Columns: undefined;
  Prayers: undefined;
};
export type authScreenProp = StackNavigationProp<RootStackParamList, 'SignUp' | 'Prayers'>;

export type User = {
  name: string;
  email: string;
  token: string;
  id: number;
  logged: boolean;
};

export type Column = {
  title: string;
  description: string;
  id: number;
};
export type Prayers = {
  id: number;
  title: string;
  description: string;
  checked: boolean;
  columnId: number;
  commentsIds: number[];
};

export type Comments = {
  id: number;
  body: string;
  created: string;
  prayerId: number;
};
