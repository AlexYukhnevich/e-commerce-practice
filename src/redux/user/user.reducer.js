import { UserActionTypes } from './user.types';

const { 
  SET_CURRENT_USER,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  SIGN_UP_FAILURE,
} = UserActionTypes;

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

const userReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    case SIGN_IN_SUCCESS: 
      return {
        ...state,
        currentUser: payload,
        error: null
      }
    case SIGN_OUT_FAILURE:
    case SIGN_IN_FAILURE:
    case SIGN_UP_FAILURE:
      return {
        ...state,
        error: payload,
      }
    case SIGN_OUT_SUCCESS: 
      return {
        ...state,
        currentUser: null,
        error: null,
      }
    default:
      return state;
  }
};

export default userReducer;