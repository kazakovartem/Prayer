import React, { FC, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { authScreenProp } from '../../types/index';
import { Routes } from '../../navigation/types';
import { SwipeRow } from 'react-native-swipe-list-view';
import { useDispatch } from 'react-redux';
import { actions } from '../../state/ducks/ducks';
import { selectors } from '../../state/ducks/ducks';
import { useSelector } from 'react-redux';

type ColumnProps = {
  label: string;
  idColumn: number;
};

const Column: FC<ColumnProps> = (props) => {
  const navigation = useNavigation<authScreenProp>();
  const [viewAddInput, setViewAddInput] = useState(false);
  const [text, setOnChangeText] = useState(props.label);
  const dispatch = useDispatch();

  const handleChange = () => {
    console.log('Change');

    if (!viewAddInput) {
      setViewAddInput(true);
    } else {
      console.log(text);
      dispatch(
        actions.columns.updateColumnSaga({ title: text, id: props.idColumn, description: '' }),
      );
      setViewAddInput(false);
    }
  };

  const handleDelete = () => {
    console.log('Delete');
    console.log('id items:', props.idColumn);
    dispatch(actions.columns.deleteColumnSaga({ id: props.idColumn }));
  };

  return (
    <SwipeRow leftOpenValue={70} rightOpenValue={-70} style={styles.body}>
      <View style={styles.hiddenContainer}>
        <TouchableOpacity
          style={styles.touchLeft}
          onPress={() => {
            handleChange();
          }}
        >
          <Text style={styles.hiddenTextLeft}>Change</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchRight}
          onPress={() => {
            handleDelete();
          }}
        >
          <Text style={styles.hiddenTextRight}>Delete</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={viewAddInput ? styles.newColl : { display: 'none' }}>
          <TextInput style={styles.textInput} value={text} onChangeText={setOnChangeText} />
        </View>
        <TouchableOpacity
          style={viewAddInput ? { display: 'none' } : styles.touch}
          onPress={() => {
            navigation.navigate(Routes.Prayers, {
              itemId: props.idColumn,
              otherParam: props.label,
            });
          }}
        >
          <View>
            <Text style={styles.text}>{props.label}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SwipeRow>
  );
};

export default Column;

const styles = StyleSheet.create({
  body: {
    height: 59,
    width: 346,
    marginTop: 2,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {
    marginBottom: 10,
    height: 59,
    width: 345,
    borderWidth: 1,
    borderRadius: 4,
    borderStyle: 'solid',
    borderColor: '#E5E5E5',
    backgroundColor: '#FFF',
  },
  hiddenContainer: {
    marginLeft: 5,
    marginTop: 5,
    height: 50,
    width: 340,
    display: 'flex',
    flexDirection: 'row',
  },
  hiddenTextLeft: {
    marginLeft: 10,
    color: '#FFF',
  },
  hiddenTextRight: {
    marginRight: 10,
    color: '#FFF',
  },
  touch: {
    width: '100%',
    height: '100%',
  },
  touchLeft: {
    width: '50%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E36A10',
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
  },
  touchRight: {
    height: '100%',
    width: '50%',
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    backgroundColor: '#AC5253',
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
  text: {
    paddingLeft: 15,
    paddingTop: 20,
  },
  textInput: {
    width: 300,
    height: 39,
    marginTop: 10,
    marginLeft: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#E5E5E5',
  },
  newColl: {
    marginBottom: 10,
    height: 59,
    width: 345,
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'row',
  },
});
