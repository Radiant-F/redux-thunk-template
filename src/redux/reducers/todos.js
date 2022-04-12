import {CREATE, FETCH_ALL} from '../../constants/actionTypes';

export default (todos = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      console.log('CREATE:', action.payload);
      return todos;
    default:
      return todos;
  }
};
