import {LOGIN, REGISTER} from '../../constants/actionTypes';

export default (state = {token: null, userData: null}, action) => {
  switch (action.type) {
    case LOGIN:
      return {...state, token: action.payload.token};
    case REGISTER:
      console.log(action.payload);
      const {token, user} = action.payload;
      return {...state, token: token, userData: user};
    default:
      return state;
  }
};
