import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Pressable,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { authScreenProp } from '../types/index';
import { Routes } from '../navigation/types';
import Prayer from '../components/prayer/prayer';
import { selectors } from '../state/ducks/ducks';
import { useSelector } from 'react-redux';

const ColumnsScreen = ({ route }: any) => {
  const navigation = useNavigation<authScreenProp>();
  const { itemId, otherParam } = route.params;
  const prayers = useSelector(selectors.prayers.selectPrayersByColumnId(itemId));

  return (
    <View style={styles.content}>
      <View style={styles.header}>
        <Text style={styles.screenTitle}>{otherParam}</Text>
        <Pressable
          onPress={() => {
            console.log('tik Prayers');
          }}
        >
        <Image source={require('../assets/image/Union.png')}  style={{width: 15, height: 15}}/>
        </Pressable>
      </View>
      <View style={styles.body}>
        <View style={styles.inputAdd}>
          <Pressable
            onPress={() => {
              console.log('tik');
            }}
            style={styles.addButton}
          >
            <Text>+</Text>
          </Pressable>
          <TextInput></TextInput>
        </View>

        <ScrollView>
          {prayers.map((prayer) => {
            return <Prayer label={prayer.title} idPrayer={prayer.id} key={prayer.id} />;
          })}
        </ScrollView>
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
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    paddingRight: 15,
  },
  screenTitle: {
    fontFamily: 'SFUIDisplay-Thin',
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
    flexDirection: 'column',
  },
  inputAdd: {
    marginBottom: 10,
    height: 50,
    width: 345,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#E5E5E5',
    borderStyle: 'solid',
    display: 'flex',
    flexDirection: 'row',
  },
  addButton:{
    height: 10,
    width: 10,
  }
});
