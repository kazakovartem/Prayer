import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet, Text, View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {selectors} from '../state/ducks/ducks';
import {actions} from '../state/ducks/ducks';
import {StackNavigationProp} from '@react-navigation/stack';

const Separator = () => <View style={styles.separator} />;

enum Routes {
  Home = 'Home',
  Double = 'Double',
}

type MainNavigatorParamsList = {
  [Routes.Home]: undefined;
  [Routes.Double]: undefined;
};

type MainNavigationProp<
  RouteName extends keyof MainNavigatorParamsList = string | any,
> = StackNavigationProp<MainNavigatorParamsList, RouteName>;

const Stack = createNativeStackNavigator<MainNavigatorParamsList>();

function HomeScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation<MainNavigationProp<Routes.Home>>();
  const up = () => {
    dispatch(actions.count.addCount());
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={[styles.testStyle]}>some home text</Text>
      <Button
        title="Go to Double"
        onPress={() => navigation.navigate(Routes.Double)}
      />
      <Separator />
      <Button title="Double" onPress={() => up} />
    </View>
  );
}

function DoubleScreen() {
  const count: number = useSelector(selectors.count.getCountSelector());

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={[styles.testStyle]}>Duble: {count},2,33</Text>
    </View>
  );
}

const TestContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Routes.Home}
          component={HomeScreen}
          options={{title: 'sreen'}}
        />
        <Stack.Screen name={Routes.Double} component={DoubleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default TestContainer;

const styles = StyleSheet.create({
  testStyle: {
    fontSize: 28,
    fontWeight: '600',
    color: 'red',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
