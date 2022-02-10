import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import Header from '../UI/Header';
import { useNavigation } from '@react-navigation/native';
import { authScreenProp } from '../types/index';
import { Routes } from '../navigation/types';
import Prayer from '../components/prayer';
import { selectors } from '../state/ducks/ducks';
import { useSelector } from 'react-redux';
import Comment from '../components/comment';
import { useDispatch } from 'react-redux';
import { actions } from '../state/ducks/ducks';

const ColumnsScreen = ({ route }: any) => {
  const navigation = useNavigation<authScreenProp>();
  const [text, setOnChangeText] = useState('');
  const { itemId, otherParam } = route.params;
  const idPrayer: number = itemId;
  const dispatch = useDispatch();
  const prayer = useSelector(selectors.prayers.selectPrayerById(itemId));
  const comments = useSelector(selectors.comments.selectCommentsByPrayerId(itemId));

  const handleAddComment = () => {
    if (text !== '') {
      dispatch(actions.comments.createCommentSaga({ id: idPrayer, body: text }));
      setOnChangeText('');
    }
  };

  return (
    <View style={styles.content}>
      <View style={styles.header}>
        <View style={styles.heardButtonContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Image source={require('../assets/image/back.png')} style={{ width: 24, height: 24 }} />
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
          <Text style={styles.screenTitle}>{prayer?.title}</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.timeLine}>
            <View style={styles.colorLine}></View>
            <Text style={styles.timeLineText}>Last prayed 8 min ago</Text>
          </View>
          <View style={styles.timeTile}>
            <View style={styles.timeTileFirstRow}>
              <View style={styles.timeTileFirstRowFirstText}>
                <Text style={{ fontSize: 22, color: '#BFB393' }}>July 25 2017</Text>
                <Text style={{ fontSize: 13, color: '#514D47' }}>Date added</Text>
                <Text style={{ fontSize: 13, color: '#72A8BC' }}>Opened for 4 days</Text>
              </View>
              <View style={styles.timeTileFirstRowSecondText}>
                <Text style={{ fontSize: 32, color: '#BFB393' }}>123</Text>
                <Text style={{ fontSize: 13, color: '#514D47' }}>Times Prayed Total</Text>
              </View>
            </View>
            <View style={styles.timeTileSecondRow}>
              <View style={styles.timeTileSecondRowFirstText}>
                <Text style={{ fontSize: 32, color: '#BFB393' }}>63</Text>
                <Text style={{ fontSize: 13, color: '#514D47' }}>Times Prayed by Me</Text>
              </View>
              <View style={styles.timeTileSecondRowSecondText}>
                <Text style={{ fontSize: 32, color: '#BFB393' }}>60</Text>
                <Text style={{ fontSize: 13, color: '#514D47' }}>Times Prayed by Others</Text>
              </View>
            </View>
          </View>
          <View style={styles.members}>
            <Text style={{ fontSize: 13, color: '#72A8BC' }}>MEMBERS</Text>
            <View style={styles.imageMemberContain}>
              <Image
                source={require('../assets/image/FirstMember.png')}
                style={{ marginRight: 7, borderRadius: 20, width: 33, height: 31 }}
              />
              <Image
                source={require('../assets/image/SecondMember.png')}
                style={{ marginRight: 7, borderRadius: 20, width: 33, height: 31 }}
              />
              <View style={styles.addMemberButton}>
                <View
                  style={{
                    backgroundColor: '#FFF',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    width: 2,
                    height: 7,
                    marginLeft: 7,
                  }}
                />
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                  <View
                    style={{
                      backgroundColor: '#FFF',
                      borderTopLeftRadius: 20,
                      borderBottomLeftRadius: 20,
                      width: 8,
                      height: 2,
                    }}
                  />
                  <View
                    style={{
                      backgroundColor: '#FFF',
                      borderTopRightRadius: 20,
                      borderBottomRightRadius: 20,
                      width: 7,
                      height: 2,
                    }}
                  />
                </View>
                <View
                  style={{
                    marginLeft: 7,
                    backgroundColor: '#FFF',
                    borderBottomRightRadius: 20,
                    borderBottomLeftRadius: 20,
                    width: 2,
                    height: 8,
                  }}
                />
              </View>
            </View>
          </View>
          <View style={styles.commentsContain}>
            <View style={styles.commentsFirstText}>
              <Text style={{ fontSize: 13, color: '#72A8BC' }}>COMMENTS</Text>
            </View>
            <View style={{ width: '100%', minHeight: 2 }}>
              {comments.map((comment, index) => {
                return <Comment key={comment.id} idComment={comment.id} count={index} />;
              })}
            </View>
            <View style={styles.newComment}>
              <TouchableOpacity
                onPress={() => {
                  handleAddComment();
                }}
              >
                <Image
                  source={require('../assets/image/AddComment.png')}
                  style={{ marginTop: 12, width: 24, height: 24 }}
                />
              </TouchableOpacity>
              <TextInput
                style={styles.textInput}
                placeholder={'Add a comment...'}
                value={text}
                onChangeText={setOnChangeText}
              />
            </View>
          </View>
        </View>
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
  heardButtonContainer: {
    width: '100%',
    height: 61,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 12,
    paddingRight: 15,
  },
  heardTextContainer: {
    width: '100%',
    paddingLeft: 15,
  },
  screenTitle: {
    fontFamily: 'SFUIDisplay-Thin',
    color: '#FFF',
    fontSize: 17,
    lineHeight: 20,
  },
  body: {
    paddingTop: 15,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  timeLine: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 15,
    height: 50,
    width: '100%',
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
  timeLineText: {
    fontSize: 17,
    color: '#514D47',
    fontFamily: 'SFUDText-Regular',
  },
  timeTile: {
    width: '100%',
    height: 216,
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
  },
  timeTileFirstRow: {
    width: '100%',
    height: 108,
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
    display: 'flex',
    flexDirection: 'row',
  },
  timeTileFirstRowFirstText: {
    marginLeft: 15,
    paddingTop: 32,
    width: '50%',
    borderRightWidth: 1,
    borderColor: '#E5E5E5',
  },
  timeTileFirstRowSecondText: {
    paddingTop: 26,
    marginLeft: 12,
  },
  timeTileSecondRow: {
    display: 'flex',
    flexDirection: 'row',
    height: 108,
    width: '100%',
  },
  timeTileSecondRowFirstText: {
    marginLeft: 15,
    paddingTop: 26,
    width: '50%',
    borderRightWidth: 1,
    borderColor: '#E5E5E5',
    height: '100%',
  },
  timeTileSecondRowSecondText: {
    paddingTop: 26,
    marginLeft: 12,
    height: '100%',
  },
  members: {
    padding: 15,
    height: 113,
    width: '100%',
  },
  imageMemberContain: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  addMemberButton: {
    backgroundColor: '#BFB393',
    borderRadius: 20,
    width: 32,
    height: 32,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 8,
  },
  commentsContain: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  commentsFirstText: {
    height: 31,
    width: '100%',
    paddingLeft: 15,
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
  },
  newComment: {
    height: 56,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 16,
    paddingTop: 4,
  },
  textInput: {
    width: 300,
    height: 39,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#FFF',
  },
});
