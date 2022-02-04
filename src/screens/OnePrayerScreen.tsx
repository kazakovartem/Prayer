import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../UI/Header';
import { useNavigation } from '@react-navigation/native';
import { authScreenProp } from '../types/index';
import { Routes } from '../navigation/types';
import Prayer from '../components/prayer/prayer';
import { selectors } from '../state/ducks/ducks';
import { useSelector } from 'react-redux';

const ColumnsScreen = ({ route }: any) => {
  const navigation = useNavigation<authScreenProp>();
  const { itemId, otherParam } = route.params;
  const prayers = useSelector(selectors.prayers.selectPrayerById(itemId) );
  const comments = useSelector(selectors.comments.selectCommentsByPrayerId(itemId));

  return (
    <View style={styles.content}>
      <Header label="One" />
      <ScrollView style={styles.body}>
      {
        comments.map((comment) => {
          return<Text key={comment.id} >{comment.body}</Text>
        })
      }
    
      </ScrollView>
    </View>
  );
};

export default ColumnsScreen;

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#ffffff',
    height: '100%',
    width: '100%',
  },
  body: {
    paddingTop: 15,
    paddingLeft: '7%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
});
