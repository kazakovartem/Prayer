import React from 'react';
import { StyleProp, TouchableOpacity, TextStyle, StyleSheet, Text } from 'react-native';

type LoginInputProps = {
  onChange: () => void;
  containerStyle?: StyleProp<TextStyle>;
};

const ChangeTouchable: React.FC<LoginInputProps> = ({ onChange, containerStyle }) => {
  return (
    <TouchableOpacity
      style={containerStyle}
      onPress={() => {
        onChange();
      }}
    >
      <Text style={styles.hiddenTextRight}>Change</Text>
    </TouchableOpacity>
  );
};

export default ChangeTouchable;

const styles = StyleSheet.create({
  hiddenTextRight: {
    marginLeft: 10,
    color: '#FFF',
  },
});
