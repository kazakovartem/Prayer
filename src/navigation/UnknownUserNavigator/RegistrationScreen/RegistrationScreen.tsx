import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import { selectors } from '../../../state/ducks/ducks';
import LoginHeader from '../../../UI/LoginHeader';
import { useForm, Controller } from 'react-hook-form';
import SignInButton from '../../../UI/SignButton';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../../types';
import { authScreenProp } from '../../../types/index';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../state/ducks/ducks';
import InputLogin from '../../../UI/InputLogin';

const RegistrationScreen = () => {
  const navigation = useNavigation<authScreenProp>();
  const user = useSelector(selectors.user.selectUser());
  const [expectationUser, setExpectationUser] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.message) {
      console.log('err: ', user.message);
      setExpectationUser(false);
    }
  }, [user.message]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      name: '',
      password: '',
    },
  });

  const onSubmit = (data: any) => {
    dispatch(actions.user.deleteMessage({ message: null }));
    dispatch(actions.user.signUp({ email: data.email, name: data.name, password: data.password }));
    setExpectationUser(true);
  };

  return (
    <SafeAreaView style={styles.contentSafeArea}>
      <View style={styles.content}>
        <LoginHeader label="Sign-Up" />
        <View style={styles.body}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputLogin label="Email" onBlur={onBlur} onChangeText={onChange} value={value} />
            )}
            name="email"
          />
          {errors.email && <Text style={styles.colorRed}>This is required.</Text>}

          <Controller
            control={control}
            rules={{
              minLength: 3,
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputLogin label="Name" onBlur={onBlur} onChangeText={onChange} value={value} />
            )}
            name="name"
          />
          {errors.name && <Text style={styles.colorRed}>This is very simple.</Text>}

          <Controller
            control={control}
            rules={{
              minLength: 3,
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputLogin label="Password" onBlur={onBlur} onChangeText={onChange} value={value} />
            )}
            name="password"
          />
          {errors.password && <Text style={styles.colorRed}>This is very simple.</Text>}
          {expectationUser && <ActivityIndicator size="large" style={styles.activeIndicate} />}
          {!expectationUser && (
            <View style={expectationUser ? { display: 'none' } : styles.buttonContain}>
              <SignInButton label={'Sign-UP'} onPress={handleSubmit(onSubmit)} />
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(Routes.SignIn);
                  dispatch(actions.user.deleteMessage({ message: null }));
                }}
              >
                <Text style={styles.singText}>Sign-in</Text>
              </TouchableOpacity>
            </View>
          )}
          {user.message && <Text style={styles.inputText}>{user.message}</Text>}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegistrationScreen;

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
  body: {
    marginTop: 40,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputText: {
    marginTop: 23,
  },
  singText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#4169E1',
  },
  buttonContain: {
    marginTop: 30,
    width: '74%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  colorRed: {
    color: 'red',
  },
  activeIndicate: {
    marginTop: 32,
  },
});