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
    </View>
  );
};

export default LoginHeader;

const styles = StyleSheet.create({
  header: {
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',   
    paddingRight: 20,
  },
  screenTitle: {
    fontFamily: 'SFUIDisplay-Thin',
    marginVertical: 22,
    fontSize: 17,
    lineHeight: 20,
    
  },
});
//marginRight: '2%',