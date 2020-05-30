import React, { useReducer, useContext } from 'react';
import axios from 'axios';
import caseContext from './CaseContext';
import caseReducer from './CaseReducer';
import AlertContext from '../../context/alert/alertContext';

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


const CaseState = props => {

  const alertContext = useContext(AlertContext);
  const {setAlert}=alertContext;

  const initialState = {
    cases:[],
    current: [],
    filtered: [],
    errors: null,
    loading:true,
  };

  const [state, dispatch] = useReducer(caseReducer, initialState);


  // Get ALL Cases
  const getCases = async () => {
    try {
      const res = await axios.get('/cases');

      dispatch({
        type: GET_CASES,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: CASE_ERROR,
        payload: err.response.data
      });
    }
  };

  // Add case
  const addCase =   async(caSe, history) => { 
    try{
      await axios.post('/cases', caSe)
    .then( res => history.push('/cases'))
    }catch(err){
      dispatch({
        type: CASE_ERROR,
        payload: err.response.data
      })
    }
  };
  
// GET CURRENT CASE
const getCurrent = async(id)=> {
  try {
   const res= await axios.get(`/cases/${id}`)
  
    dispatch({
      type: GET_CURRENT,
      payload:res.data
    })
    
  } catch (err) {
    dispatch({
      type: CASE_ERROR,
      payload: err.response.data
    });
  }
};

  // Delete CASE
  const deletecase = async id => {
    try {
     const res = await axios.delete(`/cases/${id}`)
        if(res.status === 200){
          setAlert('Case successfully deleted', 'error')
          dispatch({
            type: DELETE_CASE,
            payload: id
          });
        }
    } catch (err) {
      if(err.response.data === 'Unauthorized'){
        setAlert('You are not authorized', 'error')
        dispatch({
          type: CASE_ERROR,
          payload: err.response.data
        });
      }
     
    }
  };

  // Update case
  const updatecase = async (caSe,history) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }};
    try {
      const res = await axios.put(
        `/cases/${caSe._id}`,
        caSe,
        config
      )
      if(res.status === 200){
        setAlert('Case successfully updated!', 'success')
      }
      dispatch({
        type: UPDATE_CASE,
        payload: res.data
      })
      history.push('/cases')
    } catch (err) {
      dispatch({
        type: CASE_ERROR,
        payload: err.response.data
      });
    }
  };


//ADD COMMENTS
 const addComment = async(current,comment, history)=>{
  
  try{
    const res = await axios.post(`/cases/${current._id}/comment`, comment)
    if(res.status === 200){
      setAlert('Comment successfully added!', 'success')
    }
    getCurrent(current._id)
  }catch(err){
    dispatch({
      type: CASE_ERROR,
      payload: err.response.data
    });
  }
 
  
   
 }
 
  // Clear CASES
  const clearcases = () => {
    dispatch({ type: CLEAR_CASES });
  };

  // Clear Current case
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Filter cases
  const filtercases = text => {
    dispatch({ type: FILTER_CASES, payload: text });
  };

  


  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <caseContext.Provider
      value={{
        cases: state.cases,
        current: state.current,
        filtered: state.filtered,
        errors: state.errors,
        loading: state.loading,
        addCase,
        deletecase,
        clearCurrent,
        addComment,
        updatecase,
        filtercases,
        clearFilter,
        getCases,
        getCurrent,
        clearcases
      }}
    >
      {props.children}
    </caseContext.Provider>
  );
};

export default CaseState;
