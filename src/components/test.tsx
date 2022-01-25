import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet, Text, View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {selectors} from '../state/ducks/ducks';
import {actions} from '../state/ducks/ducks';
import {ICountState} from '../state/ducks/users/types';

const Stack = createNativeStackNavigator();
const Separator = () => <View style={styles.separator} />;

function HomeScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();
  const up = () => {
    dispatch(actions.user.addCount());
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={[styles.testStyle]}>some home text</Text>
      <Button
        title="Go to Double"
        onPress={() => navigation.navigate('Double')}
      />
      <Separator />
      <Button title="Double" onPress={() => up} />
    </View>
  );
}

const count = (state: ICountState) => state.user.count ;

function DoubleScreen() {
  
  //useSelector(selectors.user.getName());

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={[styles.testStyle]}>Duble: {count} </Text>
    </View>
  );
}

const TestContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'sreen'}}
        />
        <Stack.Screen name="Double" component={DoubleScreen} />
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
