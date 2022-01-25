import {LOADING, REFRESH} from '../../constants/actionTypes';

export default (state = {loading: false, refresh: false}, action) => {
  switch (action.type) {
    case LOADING:
      return {...state, loading: action.payload};
    case REFRESH:
      return {...state, refresh: action.payload};
    default:
      return state;
  }
};
