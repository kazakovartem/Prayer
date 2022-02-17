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
enum TABS {
  PRAYERS,
  SUBSCRIBED,
};

const ColumnsScreen = ({ route }: IColumnsScreen) => {
  const { itemId, otherParam } = route.params;
  const prayers = useSelector(selectors.prayers.selectPrayersByColumnId(itemId));
  const [textInputAddNewPrayer, setTextInputAddNewPrayer] = useState('');
  const [subPrayers, setSubPrayers] = useState(false);
  const [activeTab, setActiveTab] = useState(TABS.PRAYERS)
  const [checkedPrayers, setCheckedPrayers] = useState(false);
  const dispatch = useDispatch();
  const prayersNotChecked = prayers.filter((prayer) => prayer.checked !== true);
  const prayersChecked = prayers.filter((prayer) => prayer.checked === true);

  const handleAddPrayer = () => {
    if (textInputAddNewPrayer.trim()) {
      dispatch(
        actions.prayers.createPrayer({
          id: itemId,
          title: textInputAddNewPrayer,
          description: '',
        }),
      );
    }
    setTextInputAddNewPrayer('');
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
    <SafeAreaView style={styles.contentSafeArea}>
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
            >
              <Image
                source={require('../../../assets/image/settings.png')}
                style={styles.imageSettings}
              />
            </TouchableOpacity>
          </View>
          <View
            style={styles.headerSlider}
          >
            <TouchableOpacity
              style={subPrayers ? styles.hideFirstSubButt : styles.viewFirstSubButt}
              onPress={() => {
                handleViewSubPrayersFirst();
              }}
            >
              <Text style={subPrayers ? styles.subColorNotActive : styles.subColorActive}>
                MY PRAYERS
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={subPrayers ? styles.viewSecondSubButt : styles.hideSecondSubButt}
              onPress={() => {
                handleViewSubPrayersSecond();
              }}
            >
              <Text style={subPrayers ? styles.subColorActive : styles.subColorNotActive}>
                SUBSCRIBED
              </Text>
              <View style={styles.subCount}>
                <Text style={styles.subCountText}>3</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {!subPrayers && (
          <View style={styles.body}>
            <View style={styles.inputAdd}>
              <TouchableOpacity
                onPress={() => {
                  handleAddPrayer();
                }}
              >
                <Image
                  source={require('../../../assets/image/Union.png')}
                  style={styles.imageAddPrayer}
                />
              </TouchableOpacity>
              <TextInput
                style={styles.inputForm}
                placeholder="Add new prater ..."
                value={textInputAddNewPrayer}
                onChangeText={setTextInputAddNewPrayer}
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
                    prayersChecked.length !== 0
                      ? checkedPrayers
                        ? styles.hideCheckTextContain
                        : styles.showCheckTextContain
                      : { display: 'none' }
                  }
                >
                  {prayersChecked.length !== 0 && (
                    <ShowCheckedPrayer
                      label={HideCheckText}
                      onViewText={() => {
                        handleViewCheck();
                      }}
                      containerStyle={styles.hideCheckText}
                    />
                  )}
                </View>
                {checkedPrayers && (
                  <View style={styles.checkPrayers}>
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
                )}
              </View>
            </ScrollView>
          </View>
        )}
        {subPrayers && (
          <View style={styles.body}>
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
                {prayersChecked.length !== 0 && (
                  <View
                    style={
                      checkedPrayers ? styles.hideCheckTextContain : styles.showCheckTextContain
                    }
                  >
                    <ShowCheckedPrayer
                      label={HideCheckText}
                      onViewText={() => {
                        handleViewCheck();
                      }}
                      containerStyle={styles.hideCheckText}
                    />
                  </View>
                )}
                {checkedPrayers && (
                  <View style={styles.checkPrayers}>
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
                )}
              </View>
            </ScrollView>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ColumnsScreen;

const styles = StyleSheet.create({
  contentSafeArea: {
    flex: 1,
    backgroundColor: '#FFF',
  },
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
  headerSlider: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  subColorActive: { color: '#72A8BC' },
  subColorNotActive: { color: '#C8C8C8' },
  imageAddPrayer: {
    width: 15,
    height: 15,
  },
  imageSettings: { 
    width: 24, 
    height: 24 
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
  subCount: {
    marginLeft: 2,
    width: 16,
    height: 16,
    backgroundColor: '#AC5253',
    borderRadius: 9999,
    display: 'flex',
    paddingLeft: 5,
    paddingTop: 1,
  },
  subCountText: {
    fontSize: 9,
    color: '#FFF',
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
    width: '100%',
    height: '100%',
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
