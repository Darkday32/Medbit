import React from 'react';
import Cases from '../cases/Cases';
import Exams from '../Exams/exams'
import { makeStyles, Paper, Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    display:'flex',
    flexGrow: 1,
    alignItems:'center',
    padding:'2rem',
    flexDirection:'column',
  
  
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.secondary.light,
  },
}));

const Home = () => {

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item md={9} xs={12}>
            <Paper className={classes.paper}>
             <Cases />     
            </Paper>
        </Grid>
        <Grid className={classes.exams} item md={3} xs={12}>
              <Exams/>   
        </Grid>
      </Grid>
    </div>
    
  );
};

export default Home;
