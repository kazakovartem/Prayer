import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type LoginHeaderProps = {
  label: string;
};

const LoginHeader: React.FC<LoginHeaderProps> = ({ label }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.screenTitle}>{label}</Text>
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
    fontFamily: 'SFUIDisplay-Medium',
    marginVertical: 22,
    fontSize: 17,
    lineHeight: 20,
  },
});
