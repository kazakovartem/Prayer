import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
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
  const prayers = useSelector(selectors.prayers.selectPrayerById(itemId));
  const comments = useSelector(selectors.comments.selectCommentsByPrayerId(itemId));

/*
{comments.map((comment) => {
          return <Text key={comment.id}>{comment.body}</Text>;
        })}
*/


  return (
    <View style={styles.content}>
      <View style={styles.header}>
        <View style={styles.heardButtonContainer}>
          <TouchableOpacity
            onPress={() => {
              console.log('tik in prayer');
            }}
          >
            <Image
              source={require('../assets/image/back.png')}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              console.log('tik in prayer');
            }}
          >
            <Image
              source={require('../assets/image/prayer.png')}
              style={{ width: 29, height: 29 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.heardTextContainer}>
          <Text style={styles.screenTitle}>{otherParam}</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View>

        </View>
        <View>

        </View>
      </View>
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
  header: {
    height: 130,
    width: '100%',
    backgroundColor: '#BFB393',
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingRight: 15,
  },
  heardButtonContainer:{
    width: '100%',
    height: 61,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 12,
    paddingRight: 15,
  },
  heardTextContainer:{
    
  },
  screenTitle: {
    fontFamily: 'SFUIDisplay-Thin',
    color: '#FFF',
    marginVertical: 22,
    fontSize: 17,
    lineHeight: 20,
    marginRight: '36%',
  },
  body: {
    paddingTop: 15,
    paddingLeft: '7%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
});
