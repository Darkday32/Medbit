import React from 'react'
import {Grid, makeStyles, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop:20,
    display:'inline',
  },
}));


const Footer = () => {
  const classes=useStyles();
  return (
    <Grid className={classes.root} container xs={12}>
      <Typography align='center' color='primary' variant='caption' >
     Copyright &copy; Ndavi {new Date().getFullYear()} ImedCases
    </Typography>
    </Grid>
    
  )
}

export default Footer
