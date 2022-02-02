import React from 'react';
import { StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native';

const SignButton = (props: { label: string; onPress(): void }) => {
  return (
    <View style={styles.buttonWrapper}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          props.onPress();
        }}
      >
        <Text style={styles.label}>{props.label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignButton;

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    color: '#ffffff',
  },
  buttonWrapper: {
    alignItems: 'flex-end',
    marginTop: 10,
    marginHorizontal: '10%',
  },
  button: {
    width: 130,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: '#1E90FF',
  },
});
