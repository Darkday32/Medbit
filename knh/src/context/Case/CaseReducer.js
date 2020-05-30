import {
  GET_CASES,
  DELETE_CASE,
  GET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CASE,
  FILTER_CASES,
  CLEAR_CASES,
  CLEAR_FILTER,
  CASE_ERROR
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_CASES:
      return {
        ...state,
       cases: action.payload,
        loading: false,
        errors:null,
      };
    case UPDATE_CASE:
      return {
        ...state,
        cases: state.cases.map(caSe =>
          caSe._id === action.payload._id ? action.payload : caSe
        ),
        loading: false,
        errors:null
      };
    case DELETE_CASE:
      return {
        ...state,
        cases: state.cases.filter(
          caSe => caSe._id !== action.payload
        ),
        loading: false,
        errors:null
      };
    case CLEAR_CASES:
      return {
        ...state,
        cases: null,
        filtered: null,
        errors: null,
        current: [],
      };
    case GET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: [],
      };
    case FILTER_CASES:
      return {
        ...state,
        filtered: state.cases.filter(caSe => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return caSe.positives.match(regex)||caSe.ward.match(regex)||caSe.name.match(regex) || caSe.condition.match(regex);
        })
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      };
    case CASE_ERROR:
      return {
        ...state,
        loading:false,
        errors: action.payload
      };
    default:
      return state;
  }
};
