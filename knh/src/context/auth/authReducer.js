import {
  REGISTER_SUCCESS,
  GET_ERRORS,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isRegistered: true,
        loading: false,
        user: action.payload,
        errors: null
      };
    case LOGIN_SUCCESS:
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
        errors: null
      }; 
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem('jwtToken');
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: null,
        errors: action.payload
      };
      case GET_ERRORS:
        return{
          errors: action.payload
        }
      case CLEAR_ERRORS:
        return {
          errors: null
        };
    default:
      return state;
  }
};
