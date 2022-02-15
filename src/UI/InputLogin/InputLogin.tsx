import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputFocusEventData,
  NativeSyntheticEvent,
} from 'react-native';

type LoginInputProps = {
  label: string;
  onBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onChangeText: (text: string) => void;
  value: string;
};

const LoginInput: React.FC<LoginInputProps> = ({ label, onBlur, onChangeText, value }) => {
  return (
    <>
      <Text style={styles.inputText}>{label}</Text>
      <TextInput style={styles.input} onBlur={onBlur} onChangeText={onChangeText} value={value} />
    </>
  );
};

export default LoginInput;

const styles = StyleSheet.create({
  inputText: {
    marginTop: 23,
  },
  input: {
    borderColor: 'black',
    marginTop: 12,
    width: '76%',
    height: 40,
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 10,
    paddingLeft: 10,
    fontSize: 16,
  },
});
