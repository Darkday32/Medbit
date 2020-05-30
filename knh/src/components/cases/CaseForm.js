import React, { useState, useContext, useEffect } from 'react';
import caseContext from '../../context/Case/CaseContext';
import {withRouter } from "react-router-dom";
import TextFieldGroup from '../../utils/TextFieldGroup'
import SelectListGroup from '../../utils/SelectListGroup'
import {Button,Typography, Container,FormControl} from '@material-ui/core';

const CaseForm = (props) => {
  const CaseContext = useContext(caseContext);

  const { addCase, updatecase, clearCurrent, errors, current } = CaseContext;

  useEffect(() => {
    if (current !== null) {
      setcaSe(current);
    } else {
      setcaSe({
        positives: '',
        name: '',
        ward: '',
        condition: '',
        system: '',
       
       });
    }
  }, [current]);

  const [caSe, setcaSe] = useState({
    positives: '',
    name: '',
    ward: '',
    condition: '',
    system: ''
   
  });


  const { name, ward, system, condition, positives } = caSe;

  const onChange = e =>
    setcaSe({ ...caSe, [e.target.name]: e.target.value });


  const onSubmit = e => {
    e.preventDefault();
    if (current._id === undefined) {
      addCase(caSe, props.history);
    } else {
      updatecase(caSe,props.history);
    }
    
    clearAll();
  
  };

  const clearAll = () => {
    clearCurrent();
  };
  
    const options = [
      { label: '* Select System', value: 0 },
      { label: 'CNS', value: 'CNS' },
      { label: 'CVS', value: 'CVS' },
      { label: 'RES', value: 'RES' },
      { label: 'MUS', value: 'MUS' },
      { label: 'MULTI', value: 'MULTI' },
      { label: 'ABD', value: 'ABD' },
     
    ];
  

  return (
    <Container maxWidth="sm">
    <form onSubmit={onSubmit}>
      <Typography variant="h6" color='primary'>
      {current.length>0 ? 'EDIT CASE' : 'ADD CASE'}
      </Typography>
      <FormControl fullWidth margin='normal'>  
      <TextFieldGroup 
        type='text'
        placeholder='Patient Name'
        name='name'
        value={name}
        onChange={onChange}
        error={errors&&errors.name}
      />
      </FormControl>
      <FormControl fullWidth margin='normal'>
      <TextFieldGroup
        type='text'
        placeholder='condition'
        name='condition'
        value={condition}
        onChange={onChange}
        error={errors&&errors.condition}
      />
      </FormControl>
      <FormControl fullWidth margin='normal'>
      <TextFieldGroup
        type='text'
        placeholder='Key positives'
        name='positives'
        value={positives}
        onChange={onChange}
        error={errors&&errors.positives}
      />
      </FormControl>
      <FormControl fullWidth margin='normal'>
      <TextFieldGroup
        type='text'
        placeholder='Ward'
        name='ward'
        value={ward}
        onChange={onChange}
        error={errors&&errors.ward}
      />
      </FormControl>
      <FormControl>
      <SelectListGroup
        placeholder="System"
        name="system"
        value={system}
        onChange={onChange}
        options={options}
        error={errors&&errors.system}
        info="Give us an idea of your patient"
      />
      </FormControl>
      <div>
        <Button variant="outlined" color="primary"
        type='submit'>
        {current.length>0 ? 'Update Case' : 'Add Case'}
        
      </Button>
      </div>
      {current._id !== undefined && (
        <div>
          <Button variant="outlined" onClick={clearAll}>
          Clear
        </Button>
        </div>
      )}
    </form>
  </Container>
  );
};

export default withRouter (CaseForm);
