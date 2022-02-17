import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { authScreenProp } from '../../../types/index';
import { selectors } from '../../../state/ducks/ducks';
import { useSelector } from 'react-redux';
import Comment from './components/Comment';
import { useDispatch } from 'react-redux';
import { actions } from '../../../state/ducks/ducks';

interface IOnePrayerScreen {
  route: {
    params: {
      itemId: number;
      otherParam: string;
    };
  };
}

const OnePrayerScreen = ({ route }: IOnePrayerScreen) => {
  const navigation = useNavigation<authScreenProp>();
  const [textInputAddNewComment, setTextInputAddNewComment] = useState('');
  const { itemId, otherParam } = route.params;
  const idPrayer: number = itemId;
  const dispatch = useDispatch();
  const prayer = useSelector(selectors.prayers.selectPrayerById(itemId));
  const comments = useSelector(selectors.comments.selectCommentsByPrayerId(itemId));

  const handleAddComment = () => {
    if (textInputAddNewComment.trim()) {
      dispatch(actions.comments.createCommentSaga({ id: idPrayer, body: textInputAddNewComment }));
    }

    setTextInputAddNewComment('');
  };

  return (
    <SafeAreaView style={styles.contentSafeArea}>
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.heardButtonContainer}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Image source={require('../../../assets/image/back.png')} style={styles.imageBack} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                console.log('tik in prayer');
              }}
            >
              <Image
                source={require('../../../assets/image/prayer.png')}
                style={styles.imagePrayer}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.heardTextContainer}>
            <Text style={styles.screenTitle}>{prayer?.title}</Text>
          </View>
        </View>
        <View style={styles.body}>
          <ScrollView style={styles.scrollContain}>
            <View style={styles.bodyScroll}>
              <View style={styles.timeLine}>
                <View style={styles.colorLine}></View>
                <Text style={styles.timeLineText}>Last prayed 8 min ago</Text>
              </View>
              <View style={styles.timeTile}>
                <View style={styles.timeTileFirstRow}>
                  <View style={styles.timeTileFirstRowFirstText}>
                    <Text style={styles.commentMediumFirstText}>July 25 2017</Text>
                    <Text style={styles.commentSecondText}>Date added</Text>
                    <Text style={styles.commentThirdText}>Opened for 4 days</Text>
                  </View>
                  <View style={styles.timeTileFirstRowSecondText}>
                    <Text style={styles.commentBigFirstText}>123</Text>
                    <Text style={styles.commentSecondText}>Times Prayed Total</Text>
                  </View>
                </View>
                <View style={styles.timeTileSecondRow}>
                  <View style={styles.timeTileSecondRowFirstText}>
                    <Text style={styles.commentBigFirstText}>63</Text>
                    <Text style={styles.commentSecondText}>Times Prayed by Me</Text>
                  </View>
                  <View style={styles.timeTileSecondRowSecondText}>
                    <Text style={styles.commentBigFirstText}>60</Text>
                    <Text style={styles.commentSecondText}>Times Prayed by Others</Text>
                  </View>
                </View>
              </View>
              <View style={styles.members}>
                <Text style={styles.commentThirdText}>MEMBERS</Text>
                <View style={styles.imageMemberContain}>
                  <Image
                    source={require('../../../assets/image/FirstMember.png')}
                    style={styles.imageMembers}
                  />
                  <Image
                    source={require('../../../assets/image/SecondMember.png')}
                    style={styles.imageMembers}
                  />
                  <View style={styles.addMemberButton}>
                    <View style={styles.addMemberButton1} />
                    <View style={styles.addMemberButtonCenter}>
                      <View style={styles.addMemberButtonCenter1} />
                      <View style={styles.addMemberButtonCenter2} />
                    </View>
                    <View style={styles.addMemberButton3} />
                  </View>
                </View>
              </View>
              <View style={styles.commentsContain}>
                <View style={styles.commentsFirstText}>
                  <Text style={styles.commentThirdText}>COMMENTS</Text>
                </View>
                <View style={styles.commentContain}>
                  {comments.map((comment, index) => {
                    return <Comment key={comment.id} idComment={comment.id} count={index} />;
                  })}
                </View>
              </View>
            </View>
          </ScrollView>
          <View style={styles.newComment}>
            <TouchableOpacity
              onPress={() => {
                handleAddComment();
              }}
            >
              <Image
                source={require('../../../assets/image/AddComment.png')}
                style={styles.imageAddComment}
              />
            </TouchableOpacity>
            <TextInput
              style={styles.textInput}
              placeholder={'Add a comment...'}
              value={textInputAddNewComment}
              onChangeText={setTextInputAddNewComment}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnePrayerScreen;

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
  imageBack: {
    width: 24,
    height: 24,
  },
  imagePrayer: {
    width: 29,
    height: 29,
  },
  imageMembers: {
    marginRight: 7,
    borderRadius: 20,
    width: 33,
    height: 31,
  },
  imageAddComment: {
    marginTop: 12,
    width: 24,
    height: 24,
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
  bodyScroll: {
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
  scrollContain: {
    height: '72%',
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
  addMemberButton1: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: 2,
    height: 7,
    marginLeft: 7,
  },
  addMemberButtonCenter: {
    display: 'flex',
    flexDirection: 'row',
  },
  addMemberButtonCenter1: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    width: 8,
    height: 2,
  },
  addMemberButtonCenter2: {
    backgroundColor: '#FFF',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    width: 7,
    height: 2,
  },
  addMemberButton3: {
    marginLeft: 7,
    backgroundColor: '#FFF',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    width: 2,
    height: 8,
  },
  commentsContain: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  commentContain: {
    width: '100%',
    minHeight: 2,
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
  commentBigFirstText: {
    fontSize: 32,
    color: '#BFB393',
  },
  commentMediumFirstText: {
    fontSize: 22,
    color: '#BFB393',
  },
  commentSecondText: {
    fontSize: 13,
    color: '#514D47',
  },
  commentThirdText: {
    fontSize: 13,
    color: '#72A8BC',
  },
});
