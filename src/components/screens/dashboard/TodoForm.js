import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';

export default function TodoForm() {
  const [formData, setFormData] = useState({
    task: '',
    desc: '',
    image: '',
    is_done: 0,
  });

  async function pickImage() {
    const {assets} = await launchImageLibrary({mediaType: 'photo'});
    if (assets) return setFormData(state => ({...state, image: assets[0].uri}));
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
      <Button title="submit" onPress={() => console.log(formData)} />
    </View>
  );
}

const styles = StyleSheet.create({});
