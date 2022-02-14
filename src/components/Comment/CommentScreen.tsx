import React, { useState, useEffect, FC } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { authScreenProp } from '../../types/index';
import { Routes } from '../../navigation/types';
import { SwipeRow } from 'react-native-swipe-list-view';
import { useDispatch } from 'react-redux';
import { actions } from '../../state/ducks/ducks';
import { selectors } from '../../state/ducks/ducks';
import { useSelector } from 'react-redux';

type CommentProps = {
  idComment: number;
  count: number;
};

const Comment: FC<CommentProps> = (props) => {
  const [viewAddInput, setViewAddInput] = useState(false);
  const comment = useSelector(selectors.comments.selectCommentById(props.idComment));
  const user = useSelector(selectors.user.selectUser());
  let inputValueLocal = '';
  if (comment?.body) {
    inputValueLocal = comment?.body;
  }
  const [textInputUpdate, setOnChangeTextInputUpdate] = useState(inputValueLocal);
  const dispatch = useDispatch();
  const image = [
    require('../../assets/image/comment.png'),
    require('../../assets/image/FirstMember.png'),
    require('../../assets/image/SecondMember.png'),
  ];
  const countImage = props.count % 3;
  let idLocal = 0;
  if (comment?.id) {
    idLocal = comment?.id;
  }

  const handleChange = () => {
    if (!viewAddInput) {
      setViewAddInput(true);
    } else {
      if (textInputUpdate !== inputValueLocal) {
        dispatch(actions.comments.updateCommentSaga({ id: idLocal, body: textInputUpdate }));
      }
      setOnChangeTextInputUpdate(textInputUpdate);
      setViewAddInput(false);
    }
  };

  const handleDeleteComment = () => {
    dispatch(actions.comments.deleteCommentSaga({ id: idLocal }));
  };
  let now = new Date();
  let timeLocal = '0';
  if (comment?.created) {
    timeLocal = comment?.created;
  }

  const timeDay = Math.round((+now - Date.parse(timeLocal)) / 864000000);

  return (
    <SwipeRow leftOpenValue={70} rightOpenValue={-70} style={styles.body}>
      <View style={styles.hiddenContainer}>
        <View style={styles.hiddenContainerContent}>
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
              handleDeleteComment();
            }}
          >
            <Text style={styles.hiddenTextRight}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.containerContent}>
          <View style={viewAddInput ? styles.newColl : { display: 'none' }}>
            <Image
              source={image[countImage]}
              style={{ marginLeft: 14, marginTop: 14, borderRadius: 20, width: 46, height: 46 }}
            />
            <View style={{ display: 'flex', flexDirection: 'column', height: 50, marginLeft: 9 }}>
              <View style={{ display: 'flex', flexDirection: 'row', marginTop: 5 }}>
                <Text style={{ fontSize: 17, marginRight: 6 }}>{user.name}</Text>
                <Text style={{ fontSize: 13, color: '#9C9C9C' }}>{timeDay} days ago</Text>
              </View>
              <TextInput
                style={styles.textInput}
                value={textInputUpdate}
                onChangeText={setOnChangeTextInputUpdate}
              />
            </View>
          </View>
          <View style={viewAddInput ? { display: 'none' } : styles.touch}>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <Image
                source={image[countImage]}
                style={{ marginLeft: 14, marginTop: 14, borderRadius: 20, width: 46, height: 46 }}
              />
              <View style={{ display: 'flex', flexDirection: 'column', height: 50, marginLeft: 9 }}>
                <View
                  style={{ display: 'flex', flexDirection: 'row', marginTop: 15, marginBottom: 2 }}
                >
                  <Text style={{ fontSize: 17, marginRight: 6 }}>{user.name}</Text>
                  <Text style={{ fontSize: 13, color: '#9C9C9C' }}>{timeDay} days ago</Text>
                </View>
                <Text style={{ fontSize: 17 }}>{comment?.body}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SwipeRow>
  );
};

export default Comment;

const styles = StyleSheet.create({
  body: {
    height: 74,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
    alignItems: 'center',
    flex: 1,
  },
  container: {
    width: '100%',
    height: 73,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerContent: {
    width: '100%',
    height: 73,
    display: 'flex',
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
  },
  hiddenContainer: {
    height: 72,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hiddenContainerContent: {
    height: 74,
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
    display: 'flex',
    flexDirection: 'row',
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
    paddingTop: 20,
  },
  textInput: {
    width: 300,
    height: 39,
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
