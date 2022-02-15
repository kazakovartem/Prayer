import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

type SignButtonProps = {
  label: string;
  onPress(): void;
};

const SignButton: React.FC<SignButtonProps> = ({ label,onPress}) => {
  return (
    <View style={styles.buttonWrapper}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          onPress();
        }}
      >
        <Text style={styles.label}>{label}</Text>
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
