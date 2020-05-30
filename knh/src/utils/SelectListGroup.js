import React from 'react';
import PropTypes from 'prop-types';
import {Select,MenuItem,FormControl,InputLabel,FormHelperText} from '@material-ui/core';

const SelectListGroup = ({ name, value, error, info, onChange, options }) => {
  const selectOptions = options.map(option => (
    <MenuItem key={option.label} value={option.value}>
      {option.label}
    </MenuItem>
  ));
  return (

    <FormControl error={error}>
        <InputLabel id="demo-simple-select-label">System</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name={name}
          value={value}
          onChange={onChange}
          helperText={error}
        >
        {selectOptions}
        </Select>
        <FormHelperText>{error}</FormHelperText>
      </FormControl>
  );
};

SelectListGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
};

export default SelectListGroup;
