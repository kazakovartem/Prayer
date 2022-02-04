import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Pressable,
} from 'react-native';
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
  const prayers = useSelector(selectors.prayers.selectPrayersByColumnId(itemId));

  return (
    <View style={styles.content}>
      <Header label="TO DO" />
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
