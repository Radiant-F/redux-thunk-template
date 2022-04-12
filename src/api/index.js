import axios from 'axios';

const url = 'http://restful-api-laravel-7.herokuapp.com/api/';

const config = token => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const createFormData = (photo, body) => {
  const data = new FormData();
  data.append('image', {
    name: photo.fileName,
    type: photo.type,
    uri:
      Platform.OS === 'android' ? photo.uri : photo.uri.replace('file://', ''),
  });
  Object.keys(body).forEach(key => {
    data.append(key, body[key]);
  });
  return data;
};

export const fetchTodos = token => axios.get(url + 'todo', config(token));
export const fetchLogin = formData => axios.post(url + 'login', formData);
export const fetchRegister = formData => axios.post(url + 'register', formData);
export const fetchPostTodo = (image, formData, token) =>
  axios.post(url + 'todo', createFormData(image, formData), config(token));
