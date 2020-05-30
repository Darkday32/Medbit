import React, { useContext, useRef, useEffect } from 'react';
import caseContext from '../../context/Case/CaseContext';
import {InputBase, makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


const CaseFilter = () => {
  const CaseContext = useContext(caseContext);
  const text = useRef('');

  const { filtercases, clearFilter, filtered } = CaseContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = e => {
    if (text.current.value !== '') {
      filtercases(e.target.value);
    } else {
      clearFilter();
    }
  };

const classes = useStyles();

  return (
    <InputBase
      placeholder="Search…"
      classes={{
        root: classes.inputRoot,
        input: classes.inputInput,
      }}
      inputProps={{ 'aria-label': 'search' }}
      inputRef={text}
      onChange={onChange}
    />
  );
};

export default CaseFilter;
