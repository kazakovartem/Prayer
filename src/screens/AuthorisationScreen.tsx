import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../navigation/types';
import {authScreenProp} from '../types/index';
import {Form, Field} from 'react-final-form';
import AuthInput from './AuthInput';

const AuthenticationScreen = () => {
  const navigation = useNavigation<authScreenProp>();
  const onSubmit=()=>{
    console.log('submit');
  }
  const validationName=(firstName: string)=>{
    if (firstName.trim() !== '') {
      // var re = /\S+@\S+\.\S+/;
      // if (re.test(email)) {
      return { errorExists: false, errorText: '' };
      // } else {
      // return { errorExists: true, errorText: 'Email is not valid' };
      // }
    } else {
      return { errorExists: true, errorText: "Email can't be empty" };
    }
  }
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={[styles.testStyle]}>AuthenticationScreen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(Routes.SignUp);
        }}>
        <Text style={styles.singText}>Sign-up</Text>
      </TouchableOpacity>
      <Form
        onSubmit={onSubmit}
        render={({handleSubmit}) => (
          <View>
            <Field
              valid={validationName}
              name="firstName"
              component={AuthInput}
              placeholder="First Name"
            />

            <Button
              title='User is here'
              onPress={handleSubmit}
            />    
          </View>
        )}
      />
    </View>
  );
};

export default AuthenticationScreen;

const styles = StyleSheet.create({
  testStyle: {
    fontSize: 28,
    fontWeight: '600',
    color: 'red',
  },
  singText: {
    fontSize: 28,
    fontWeight: '400',
    color: 'red',
  },
  
});
