import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {getTodos} from '../../redux/actions/todos';
import {Todos} from '../../components/exports';

export default function Dashboard({route}) {
  const {token} = route.params;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodos(token));
  }, [dispatch]);

  return (
    <View>
      <Text>Dashboard</Text>
      <Todos />
    </View>
  );
}

const styles = StyleSheet.create({});
