import React from 'react';
import { StyleProp, TouchableOpacity, TextStyle, StyleSheet, Text } from 'react-native';

type LoginInputProps = {
  onDelete: () => void;
  containerStyle?: StyleProp<TextStyle>;
};

const DeleteTouchable: React.FC<LoginInputProps> = ({ onDelete, containerStyle }) => {
  return (
    <TouchableOpacity
      style={containerStyle}
      onPress={() => {
        onDelete();
      }}
    >
      <Text style={styles.hiddenTextRight}>Delete</Text>
    </TouchableOpacity>
  );
};

export default DeleteTouchable;

const styles = StyleSheet.create({
  hiddenTextRight: {
    marginRight: 10,
    color: '#FFF',
  },
});
