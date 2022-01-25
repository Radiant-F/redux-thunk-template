import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postLogin} from '../../redux/actions/todos';
import {LOADING} from '../../constants/actionTypes';

export default function Login({navigation}) {
  const dispatch = useDispatch();
  const {auth, loading} = useSelector(state => state);
  console.log(loading);
  const [formData, setFormData] = useState({email: '', password: ''});
  function login() {
    dispatch({type: LOADING, payload: !loading.loading});
    dispatch(postLogin(formData, navigation));
  }
  return (
    <View>
      <Text>login boi</Text>
      <TextInput
        placeholder="email"
        onChangeText={input => setFormData(state => ({...state, email: input}))}
      />
      <TextInput
        placeholder="password"
        onChangeText={input =>
          setFormData(state => ({...state, password: input}))
        }
      />
      <Button onPress={login} title="masuk" />
      {/* <Text>{token}</Text> */}
      <Button
        onPress={() => navigation.navigate('Register')}
        title="register"
      />
    </View>
  );
}

const styles = StyleSheet.create({});
