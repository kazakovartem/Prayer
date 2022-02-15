import React from 'react';
import { StyleProp, TextInput, TextStyle } from 'react-native';

type LoginInputProps = {
  onChangeText: (text: string) => void;
  value: string;
  containerStyle?: StyleProp<TextStyle>;
};

const InputChangeInComponent: React.FC<LoginInputProps> = ({
  onChangeText,
  containerStyle,
  value,
}) => {
  return <TextInput style={containerStyle} onChangeText={onChangeText} value={value} />;
};

export default InputChangeInComponent;
