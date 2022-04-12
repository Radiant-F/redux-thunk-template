import {
  ActivityIndicator,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {postTodo} from '../../../redux/actions/todos';
import axios from 'axios';

export default function TodoForm() {
  const {auth, loading} = useSelector(state => state);
  const dispatch = useDispatch();
  const [image, setImage] = useState();
  const [formData, setFormData] = useState({
    task: '',
    desc: '',
    is_done: 0,
  });

  async function pickImage() {
    const {assets} = await launchImageLibrary({mediaType: 'photo'});
    console.log(assets);
    if (assets) {
      setImage(assets[0]);
      setFormData(state => ({...state, image: assets[0].uri}));
    }
  }

  async function submitTodo() {
    dispatch(postTodo(image, formData, auth.token));
  }

  return (
    <View>
      <TextInput
        placeholder="task"
        onChangeText={input => setFormData(state => ({...state, task: input}))}
        value={formData.task}
      />
      <TextInput
        placeholder="desk"
        onChangeText={input => setFormData(state => ({...state, desc: input}))}
        value={formData.desk}
      />
      {image && (
        <Image source={{uri: image.uri}} style={{width: 100, height: 100}} />
      )}
      <Button title="image" onPress={pickImage} />
      <Button
        title={`is_done: ${formData.is_done == 1 ? 'done' : 'undone'}`}
        onPress={() =>
          setFormData(state => ({
            ...state,
            is_done: formData.is_done == 0 ? 1 : 0,
          }))
        }
      />
      <Button title="submit" onPress={submitTodo} />
      {loading.loading && <ActivityIndicator size="large" />}
    </View>
  );
}

const styles = StyleSheet.create({});
