import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import TodoForm from './TodoForm';

export default function Todos() {
  const todos = useSelector(state => state.todos);
  return (
    <View>
      <TodoForm />
      <Text>Todos</Text>
      {todos.length == 0 && <ActivityIndicator size="large" />}
      {/* {todos.map(value => (
        <View key={value.id}>
          <Text>{value.task}</Text>
        </View>
      ))} */}
    </View>
  );
}

const styles = StyleSheet.create({});
