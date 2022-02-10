import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { authScreenProp } from '../../types/index';
import { Routes } from '../../navigation/types';
import { useSelector } from 'react-redux';
import { selectors } from '../../state/ducks/ducks';
import { SwipeRow } from 'react-native-swipe-list-view';
import { useDispatch } from 'react-redux';
import { actions } from '../../state/ducks/ducks';

const Prayer = (props: { label: string; idPrayer: number; isChecked: boolean }) => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const [viewUpdateInput, setViewUpdateInput] = useState(false);
  const [text, setOnChangeText] = useState(props.label);
  const prayer = useSelector(selectors.prayers.selectPrayerById(props.idPrayer));

  const handleDeletePrayer = () => {
    dispatch(actions.prayers.deletePrayerSaga({ id: props.idPrayer }));
  };

  const handleUpdatePrayer = () => {
    if (!viewUpdateInput) {
      setViewUpdateInput(true);
    } else {
      if (text !== props.label){
        let idLocal = 0;
        let descriptionLocal = '';
        if (prayer?.id) {
          idLocal = prayer?.id;
        }
        dispatch(
          actions.prayers.updatePrayerSaga({
            id: props.idPrayer,
            title: text,
            description: descriptionLocal,
            checked: props.isChecked,
          }),
        );
      }
      setOnChangeText(text);
      setViewUpdateInput(false);
    }
  };

  const handleCheckPrayer = () => {
    console.log('check');
    let idLocal = 0;
    let titleLocal = '';
    let descriptionLocal = '';
    if (prayer?.id) {
      idLocal = prayer?.id;
      titleLocal = prayer?.title;
    }
    dispatch(
      actions.prayers.updatePrayerSaga({
        id: props.idPrayer,
        title: titleLocal,
        description: descriptionLocal,
        checked: !props.isChecked,
      }),
    );
  };

  return (
    <View style={styles.body}>
      <SwipeRow leftOpenValue={65} rightOpenValue={-65}>
        <View style={styles.hiddenContainer}>
          <View style={styles.hiddenContainerContent}>
            <TouchableOpacity
              style={styles.touchLeft}
              onPress={() => {
                handleUpdatePrayer();
              }}
            >
              <Text style={styles.hiddenTextLeft}>Change</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchRight}
              onPress={() => {
                handleDeletePrayer();
              }}
            >
              <Text style={styles.hiddenTextRight}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.containerContent}>
            <View style={styles.containerContentInside}>
              <View style={styles.colorLine}></View>

              <View style={viewUpdateInput ? styles.newColl : { display: 'none' }}>
                <TextInput style={styles.textInput} value={text} onChangeText={setOnChangeText} />
              </View>
              <View style={viewUpdateInput ? { display: 'none' } : styles.touch}>
                <TouchableOpacity
                  onPress={() => {
                    handleCheckPrayer();
                  }}
                >
                  <View style={styles.touchCheckBox}>
                    <Image
                      style={props.isChecked ? {} : { display: 'none' }}
                      source={require('../../assets/image/Check.png')}
                    />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate(Routes.Prayer, {
                      itemId: props.idPrayer,
                      otherParam: 'anything you want here',
                    });
                  }}
                >
                  <View>
                    <Text style={props.isChecked ? styles.textChecked : styles.text}>
                      {props.label}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.iconContain}>
                <Image source={require('../../assets/image/userIcon.png')} />
                <Text style={styles.iconContainText}>3</Text>
                <Image source={require('../../assets/image/prayerBlue.png')} />
                <Text style={styles.iconContainText}>123</Text>
              </View>
            </View>
          </View>
        </View>
      </SwipeRow>
    </View>
  );
};

export default Prayer;

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: 66,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  container: {
    width: '100%',
    height: 65,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerContent: {
    width: '100%',
    height: 65,
    display: 'flex',
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerContentInside: {
    width: 345,
    height: 65,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
  },
  colorLine: {
    width: 3,
    height: 22,
    backgroundColor: '#AC5253',
    marginRight: 10,
    borderRadius: 16,
  },
  hiddenContainer: {
    height: 64,
    width: '100%',
    backgroundColor: '#F48',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hiddenContainerContent: {
    height: 64,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#FF1',
    alignItems: 'center',
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
    height: '100%',
    width: '70%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  touchCheckBox: {
    width: 22,
    height: 22,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#514D47',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchLeft: {
    width: '50%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E36A10',
  },
  touchRight: {
    height: '100%',
    width: '50%',
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    backgroundColor: '#AC5253',
  },
  text: {
    paddingLeft: 15,
  },
  textInput: {
    width: '100%',
    height: 39,
    borderRadius: 5,
    marginRight: 10,
    backgroundColor: '#E5E5E5',
  },
  textChecked: {
    paddingLeft: 15,
    textDecorationLine: 'line-through',
  },
  newColl: {
    width: '70%',
    height: 59,
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContain: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainText: {
    marginLeft: 3,
    fontSize: 12,
    marginRight: 6,
  },
});
