import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {postRegister} from '../../redux/actions/todos';

export default function Register() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });
  function register() {
    console.log(formData);
    dispatch(postRegister(formData));
  }
  return (
    <View>
      <Text>register boi</Text>
      <TextInput
        placeholder="name"
        onChangeText={input => setFormData(state => ({...state, name: input}))}
      />
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
      <TextInput
        placeholder="confirm password"
        onChangeText={input =>
          setFormData(state => ({...state, password_confirmation: input}))
        }
      />
      <Button onPress={register} title="register" />
    </View>
  );
}

const styles = StyleSheet.create({});
