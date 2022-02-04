import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { authScreenProp } from '../../types/index';
import { Routes } from '../../navigation/types';
import { useSelector } from 'react-redux';
import { selectors } from '../../state/ducks/ducks';

const Prayer = (props: { label: string,idPrayer:number,}) => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touch}
        onPress={() => {
          navigation.navigate(Routes.Prayer,{
            itemId: props.idPrayer,
            otherParam: 'anything you want here'
          });
          
        }}
      >
        <Text style={styles.text}>{props.label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Prayer;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    height: 59,
    width: 345,
    borderWidth: 1,
    borderRadius: 4,
    borderStyle: 'solid',
    borderColor: '#E5E5E5',
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