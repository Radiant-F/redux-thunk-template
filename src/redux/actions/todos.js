import {ToastAndroid} from 'react-native';
import * as api from '../../api';
import {
  CREATE,
  FETCH_ALL,
  LOADING,
  LOGIN,
  REGISTER,
} from '../../constants/actionTypes';

function handleError(error, dispatch) {
  console.log('action error:', error);
  dispatch({type: LOADING, payload: false});
}

export const getTodos = token => async dispatch => {
  try {
    const {data} = await api.fetchTodos(token);
    dispatch({type: FETCH_ALL, payload: data});
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const postTodo =
  (image, formData, token, navigation) => async dispatch => {
    dispatch({type: LOADING, payload: true});
    try {
      const {data} = await api.fetchPostTodo(image, formData, token);
      dispatch({type: CREATE, payload: data});
      ToastAndroid.show('Happy Birthday, Sarah Dwi Lestari Tamara! 🎉');
      navigation.replace('Auth');
      dispatch({type: LOADING, payload: false});
    } catch (error) {
      handleError(error, dispatch);
    }
  };

export const postLogin = (formData, navigation) => async dispatch => {
  dispatch({type: LOADING, payload: true});
  try {
    const {data} = await api.fetchLogin(formData);
    if (data.token) navigation.navigate('Dashboard', {token: data.token});
    dispatch({type: LOADING, payload: false});
    dispatch({type: LOGIN, payload: data});
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const postRegister = formData => async dispatch => {
  try {
    const {data} = await api.fetchRegister(formData);
    dispatch({type: REGISTER, payload: data});
  } catch (error) {
    handleError(error, dispatch);
  }
};
