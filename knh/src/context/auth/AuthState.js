import React, { useReducer,useContext} from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import AlertContext from '../../context/alert/alertContext';


import {
  REGISTER_SUCCESS,
  GET_ERRORS,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
 
} from '../types';

const AuthState = props => {
  const initialState = {
    isRegistered:false,
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    loading: true,
    user: null,
    errors: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const alertContext = useContext(AlertContext);

  const {setAlert}=alertContext;



// Register User
const register = async (userData) => {
  try{
  const res= await axios.post('/users/register', userData)
  dispatch({
   type: REGISTER_SUCCESS,
   payload: res.data
 });
  }catch(err){
   dispatch({
     type: GET_ERRORS,
     payload: err.response.data
   })
  }  
 };
   

  //LOGIN 
  const login = async form =>{
    
    try{
    const res= await axios.post('/users/login', form)
   
    const { token } = res.data;
    // Set token to ls

    localStorage.setItem('jwtToken', token);

    // Set token to Auth header
    setAuthToken(token);

    // Decode token to get user data

    const decoded = jwt_decode(token);
    if(res.status === 200){
      setAlert('Success', 'success')
    };
       dispatch({
        type:LOGIN_SUCCESS,
        payload:decoded
      })
    }catch(err){
      dispatch({
        type:LOGIN_FAIL,
        payload:err.response.data
      })
    }
  } 
  
//Load user
const loadUser = async () =>{
  try{
    setAuthToken(localStorage.jwtToken);
    const res = await axios.get('/users/current')
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  }catch(err){
    dispatch({ type: AUTH_ERROR });
  }
}  
  



  // Logout
  const logout = () =>{
  setAuthToken(false);  
   dispatch({ type: LOGOUT });
  }
  
 

  // // Clear Errors
  // const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        errors:state.errors,
        isRegistered:state.isRegistered,
        register,
        loadUser,
        login,
        logout,
        // clearErrors
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
