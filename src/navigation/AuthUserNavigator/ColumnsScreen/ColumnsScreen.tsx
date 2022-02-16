import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Column from './components/Column';
import { selectors } from '../../../state/ducks/ducks';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { actions } from '../../../state/ducks/ducks';
import InputChangeInComponent from '../../../UI/InputChangeInComponent';

const ColumnsScreen = () => {
  const columns = useSelector(selectors.columns.selectAllColumns());
  const [viewAddInput, setViewAddInput] = useState(false);
  const [addNewColumnText, setAddNewColumnText] = useState('');
  const dispatch = useDispatch();

  const handleNewColumn = () => {
    setViewAddInput(false);
    let complete = false;
    for (let i = 0; i < addNewColumnText.length; i++) {
      if (addNewColumnText[i] !== ' ') {
        complete = true;
      }
    }
    if (complete) {
      dispatch(actions.columns.createColumnSaga({ title: addNewColumnText, description: '' }));
    }
    setAddNewColumnText('');
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.screenTitle}>My Deck</Text>
          <Pressable
            onPress={() => {
              setViewAddInput(true);
            }}
          >
            <Image
              source={require('../../../assets/image/Union.png')}
              style={{ width: 15, height: 15 }}
            />
          </Pressable>
        </View>
        <ScrollView style={styles.body}>
          {columns.map((column) => {
            return <Column label={column.title} idColumn={column.id} key={column.id} />;
          })}
          {viewAddInput && (
            <View style={styles.newColl}>
              <InputChangeInComponent
                value={addNewColumnText}
                onChangeText={setAddNewColumnText}
                containerStyle={styles.textInput}
              />

              <TouchableOpacity
                onPress={() => {
                  handleNewColumn();
                }}
              >
                <View style={styles.touchInput}></View>
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
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
    fontFamily: 'SFUIText-Medium',
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
  newColl: {
    marginBottom: 10,
    height: 59,
    width: 345,
    borderWidth: 1,
    borderRadius: 4,
    borderStyle: 'solid',
    borderColor: '#E5E5E5',
    display: 'flex',
    flexDirection: 'row',
  },
  textInput: {
    width: 300,
    height: 39,
    backgroundColor: '#E5E5E5',
    marginTop: 10,
    marginLeft: 10,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    paddingLeft: 5,
  },
  touchInput: {
    marginTop: 10,
    backgroundColor: '#90EE90',
    width: 15,
    height: 39,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});
