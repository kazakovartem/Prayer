import React from 'react';
import { StyleSheet, Text, TouchableOpacity, StyleProp, TextStyle } from 'react-native';

type LoginInputProps = {
  label: string;
  onViewText: () => void;
  containerStyle?: StyleProp<TextStyle>;
};

const ShowCheckedPrayer: React.FC<LoginInputProps> = ({ label, onViewText, containerStyle }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onViewText();
      }}
      style={containerStyle}
    >
      <Text style={{ color: '#FFF', fontSize: 14, textTransform: 'uppercase' }}>{label}</Text>
    </TouchableOpacity>
  );
};

export default ShowCheckedPrayer;

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
