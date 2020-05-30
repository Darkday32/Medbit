import React,{useState, useContext,} from 'react'
import CaseContext from '../../context/Case/CaseContext';
import { withRouter } from "react-router-dom";
import {Button,FormControl} from '@material-ui/core';
import TextFieldGroup from '../../utils/TextFieldGroup'



const Comments = (props) => {
  const caseContext = useContext(CaseContext);
  const { addComment,current } = caseContext;

const [comment, setcomment] = useState({
  text:''
})

const onChange = (e) => {
  setcomment({...comment,[e.target.name]: e.target.value })
}
const onSubmit = (e)=>{
  e.preventDefault();
  addComment(current,comment,props.history)
}

  return (
    <>
    <form onSubmit={onSubmit}>
    <FormControl >  
      <TextFieldGroup 
        type='text'
        placeholder='Comment'
        name='text'
        value={comment.text}
        onChange={onChange}
      />
      </FormControl>
      <Button variant="outlined" color="primary"
        type='submit'>
        Submit
      </Button>
    </form>
   
    </>
  )
}

export default withRouter (Comments);
