import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Column = (props: { label: string;}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touch}
        onPress={() => {
          console.log('press');
        }}
      >
        <Text style={styles.text}>{props.label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Column;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    height: 59,
    width: 345,
    borderWidth: 1,
    borderRadius: 4,
    borderStyle: 'solid',
    borderBottomColor: '#E5E5E5',
  },
  touch:{
    width: '100%',
    height: '100%',
  },
  text:{
    paddingLeft: 15,
    paddingTop: 20,
  },
});