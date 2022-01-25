import {CREATE, FETCH_ALL} from '../../constants/actionTypes';

export default (todos = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return todos;
    default:
      return todos;
  }
};
