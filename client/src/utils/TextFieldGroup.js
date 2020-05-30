import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';


const TextFieldGroup = ({
  name,
  placeholder,
  value,
  error,
  info,
  type,
  onChange,
  label,
  
}) => {
  return (
  
        <TextField
          label={label}
          error={error}
          id="outlined-basic"
          helperText={error}
          variant="outlined"
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          
        />
     
   
  );
};

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string
};

TextFieldGroup.defaultProps = {
  type: 'text'
};

export default TextFieldGroup;
