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
  const [count, setCount] = useState(0);
  const incryment = () => setCount(prevCount => prevCount + 1);
  const decryment = () => setCount(prevCount => prevCount - 1);
  const up = () => {
    dispatch(actions.count.addCount());
  };

  const down = () => {
    dispatch(actions.count.decCount());
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={[styles.testStyle]}>some home text</Text>
      <Button
        title="Go to Double"
        onPress={() => navigation.navigate(Routes.Double)}
      />
      <Separator />
      <Button title="Double" onPress={() => up()} />
      <Button title="DoubleOFF" onPress={() => down()} />
      <Separator />
      <Button title="get ONE" onPress={() => incryment()} />
      <Separator />
      <Button title="give ONE" onPress={() => decryment()} />
      <Text style={[styles.testStyle]}>{count}</Text>
    </View>
  );
}

function DoubleScreen() {
  const count = useSelector(selectors.count.getCountSelector());
  const dispatch = useDispatch();
  const up = () => {
    dispatch(actions.count.addCount());
  };
  const down = () => {
    dispatch(actions.count.decCount());
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={[styles.testStyle]}>Duble: {count}</Text>
      <Separator />
      <Button title="Double" onPress={() => up()} />
      <Separator />
      <Button title="DoubleOFF" onPress={() => down()} />
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
          options={{title: 'sreen home'}}
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
