import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Pressable,
  ScrollView,
  TextInput,
} from 'react-native';

const LoginHeader = (props: { label: string;}) => {
  return(
    <View style={styles.header}>
        <Text style={styles.screenTitle}>{props.label}</Text>
        <Pressable
          onPress={() => {
            console.log('tik');
          }}
        >
          <Text>+</Text>
        </Pressable>
      </View>
  );
};

export default LoginHeader;

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
});
