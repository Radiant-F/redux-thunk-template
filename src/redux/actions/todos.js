import * as api from '../../api';
import {FETCH_ALL, LOADING, LOGIN, REGISTER} from '../../constants/actionTypes';

function handleError(error) {
  console.log('action error:', error);
}

export const getTodos = token => async dispatch => {
  try {
    const {data} = await api.fetchTodos(token);
    console.log(data);
    dispatch({type: FETCH_ALL, payload: data});
  } catch (error) {
    handleError(error);
  }
};

export const postLogin = (formData, navigation) => async dispatch => {
  dispatch({type: LOADING, payload: true});
  try {
    const {data} = await api.fetchLogin(formData);
    if (data.token) navigation.navigate('Dashboard', {token: data.token});
    dispatch({type: LOGIN, payload: data});
  } catch (error) {
    handleError(error);
  }
};

export const postRegister = formData => async dispatch => {
  try {
    const {data} = await api.fetchRegister(formData);
    dispatch({type: REGISTER, payload: data});
  } catch (error) {
    handleError(error);
  }
};
