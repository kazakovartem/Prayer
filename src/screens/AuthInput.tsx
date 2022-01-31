import React, {useState} from 'react';
import {FieldRenderProps} from 'react-final-form';
import {StyleSheet, View, TextInput, Text} from 'react-native';

interface AuthInput extends FieldRenderProps<string> {
  placeholder: string;
  valid(val: string): { errorExists: boolean; errorText: string };
}

const AuthInput: React.FC<AuthInput> = props => {
  return (
    <View>
      <Text style={styles.singText}>{props.placeholder}</Text>
      <View>
        <TextInput style = {styles.input} />
      </View>
    </View>
  );
};

export default AuthInput;

const styles = StyleSheet.create({
  testStyle: {
    fontSize: 28,
    fontWeight: '600',
    color: 'red',
  },
  singText: {
    fontSize: 28,
    fontWeight: '400',
    color: 'red',
  },
  input: {
    borderColor: 'black',
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 10,
    paddingLeft: 10,
    fontSize: 16,
  },
});
