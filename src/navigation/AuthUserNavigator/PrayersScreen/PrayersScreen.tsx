import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  SafeAreaView,
} from 'react-native';
import Prayer from './components/Prayer';
import { selectors } from '../../../state/ducks/ducks';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { actions } from '../../../state/ducks/ducks';
import ShowCheckedPrayer from '../../../UI/ShowCheckedPrayer';

interface IColumnsScreen {
  route: {
    params: {
      itemId: number;
      otherParam: string;
    };
  };
}

const ColumnsScreen = ({ route }: IColumnsScreen) => {
  const { itemId, otherParam } = route.params;
  const prayers = useSelector(selectors.prayers.selectPrayersByColumnId(itemId));
  const [text, setOnChangeText] = useState('');
  const [subPrayers, setSubPrayers] = useState(false);
  const [checkedPrayers, setCheckedPrayers] = useState(false);
  const dispatch = useDispatch();
  const prayersNotChecked = prayers.filter((prayer) => prayer.checked !== true);
  const prayersChecked = prayers.filter((prayer) => prayer.checked === true);
  let prayersCheckedIsAssign = true;
  if (prayersChecked.length === 0) {
    prayersCheckedIsAssign = false;
  }

  const handleAddPrayer = () => {
    if (text !== '') {
      let complete = false;
      for (let i = 0; i < text.length; i++) {
        if (text[i] !== ' ') {
          complete = true;
        }
      }
      if (complete) {
        dispatch(actions.prayers.createPrayer({ id: itemId, title: text, description: '' }));
      }
      setOnChangeText('');
    }
  };

  let HideCheckText = 'Show Answered Prayers';
  if (checkedPrayers) {
    HideCheckText = 'Hide Answered Prayers';
  }

  const handleViewSubPrayersFirst = () => {
    if (subPrayers) {
      setSubPrayers(false);
    }
  };

  const handleViewSubPrayersSecond = () => {
    if (!subPrayers) {
      setSubPrayers(true);
    }
  };

  const handleViewCheck = () => {
    if (!checkedPrayers) {
      setCheckedPrayers(true);
    } else {
      setCheckedPrayers(false);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.content}>
        <View style={styles.header}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              paddingLeft: '45%',
              paddingRight: '4%',
            }}
          >
            <Text style={styles.screenTitle}>{otherParam}</Text>
            <TouchableOpacity
              onPress={() => {
                console.log('tik Prayers');
              }}
              style={{ width: 24, height: 24 }}
            >
              <Image
                source={require('../../../assets/image/settings.png')}
                style={{ width: 24, height: 24 }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <TouchableOpacity
              style={subPrayers ? styles.hideFirstSubButt : styles.viewFirstSubButt}
              onPress={() => {
                handleViewSubPrayersFirst();
              }}
            >
              <Text style={subPrayers ? { color: '#C8C8C8' } : { color: '#72A8BC' }}>
                MY PRAYERS
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={subPrayers ? styles.viewSecondSubButt : styles.hideSecondSubButt}
              onPress={() => {
                handleViewSubPrayersSecond();
              }}
            >
              <Text style={subPrayers ? { color: '#72A8BC' } : { color: '#C8C8C8' }}>
                SUBSCRIBED
              </Text>
              <Text
                style={{
                  marginLeft: 2,
                  width: 16,
                  height: 16,
                  backgroundColor: '#AC5253',
                  borderRadius: 9999,
                  fontSize: 9,
                  color: '#FFF',
                  display: 'flex',
                  paddingLeft: 5,
                  paddingTop: 1,
                }}
              >
                3
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={subPrayers ? { display: 'none' } : styles.body}>
          <View style={styles.inputAdd}>
            <TouchableOpacity
              onPress={() => {
                handleAddPrayer();
              }}
            >
              <Image
                source={require('../../../assets/image/Union.png')}
                style={{ width: 15, height: 15 }}
              />
            </TouchableOpacity>
            <TextInput
              style={styles.inputForm}
              placeholder="Add new prater ..."
              value={text}
              onChangeText={setOnChangeText}
            />
          </View>
          <ScrollView>
            <View style={styles.bodyScroll}>
              {prayersNotChecked.map((prayer) => {
                return (
                  <Prayer
                    label={prayer.title}
                    idPrayer={prayer.id}
                    key={prayer.id}
                    isChecked={false}
                  />
                );
              })}
              <View
                style={
                  prayersCheckedIsAssign
                    ? checkedPrayers
                      ? styles.hideCheckTextContain
                      : styles.showCheckTextContain
                    : { display: 'none' }
                }
              >
                <ShowCheckedPrayer
                  label={HideCheckText}
                  onViewText={() => {
                    handleViewCheck();
                  }}
                  containerStyle={
                    prayersCheckedIsAssign
                      ? styles.hideCheckText
                      : { display: 'none', borderColor: '#FFF' }
                  }
                />
              </View>
              <View style={checkedPrayers ? styles.checkPrayers : { display: 'none' }}>
                {prayersChecked.map((prayer, index) => {
                  return (
                    <Prayer
                      label={prayer.title}
                      idPrayer={prayer.id}
                      key={index}
                      isChecked={true}
                    />
                  );
                })}
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={subPrayers ? styles.body : { display: 'none' }}>
          <ScrollView>
            <View style={styles.bodyScroll}>
              {prayersNotChecked.map((prayer) => {
                return (
                  <Prayer
                    label={prayer.title}
                    idPrayer={prayer.id}
                    key={prayer.id}
                    isChecked={false}
                  />
                );
              })}
              <View
                style={
                  prayersCheckedIsAssign
                    ? checkedPrayers
                      ? styles.hideCheckTextContain
                      : styles.showCheckTextContain
                    : { display: 'none' }
                }
              >
                <ShowCheckedPrayer
                  label={HideCheckText}
                  onViewText={() => {
                    handleViewCheck();
                  }}
                  containerStyle={
                    prayersCheckedIsAssign
                      ? styles.hideCheckText
                      : { display: 'none', borderColor: '#FFF' }
                  }
                />
              </View>
              <View style={checkedPrayers ? styles.checkPrayers : { display: 'none' }}>
                {prayersChecked.map((prayer, index) => {
                  return (
                    <Prayer
                      label={prayer.title}
                      idPrayer={prayer.id}
                      key={index}
                      isChecked={true}
                    />
                  );
                })}
              </View>
            </View>
          </ScrollView>
        </View>
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
    flexDirection: 'column',
    paddingRight: 15,
    height: 103,
    width: '100%',
  },
  screenTitle: {
    fontFamily: 'SFUIText-Medium',
    marginVertical: 22,
    fontSize: 17,
  },
  viewFirstSubButt: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#72A8BC',
    width: '50%',
    paddingBottom: 16,
  },
  hideFirstSubButt: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    paddingBottom: 16,
  },
  viewSecondSubButt: {
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 16,
    borderBottomWidth: 2,
    borderColor: '#72A8BC',
  },
  hideSecondSubButt: {
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 16,
  },
  body: {
    paddingTop: 15,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyScroll: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodySub: {
    width: '100%',
    height: '100%',
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
    alignItems: 'center',
    paddingLeft: 14,
  },
  inputForm: {
    marginLeft: 14,
  },
  hideCheckTextContain: {
    width: 345,
    height: 60,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
  },
  showCheckTextContain: {
    width: '100%',
    height: 60,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hideCheckText: {
    width: 209,
    height: 30,
    backgroundColor: '#BFB393',
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkPrayers: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
});
