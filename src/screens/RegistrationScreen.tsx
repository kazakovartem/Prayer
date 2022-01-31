import React from "react";
import {StyleSheet, Text, View} from 'react-native';

const RegistrationScreen = () => {
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={[styles.testStyle]}>RegistrationScreen</Text>
    </View>
  );
}

export default RegistrationScreen;

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
