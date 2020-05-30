import React, {useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import {Typography,Grid,Button,makeStyles} from '@material-ui/core';
import Image from '../../img/landing.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    display:'flex',
    alignContent:'center',
    justifyItems:'center',
    textAlign:'center',
    '& > *': {
      margin: theme.spacing(4),
      color:'teal',

    },
    
    backgroundImage:`url(${Image})`,
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center',
    backgroundBlendMode:'screen',
  },
 
  controls: {
    display: 'flex',
    alignItems: 'center',
  },
  title:{
    textTransform:'uppercase',
    fontWeight:900,
    textDecorationLine:'underline',
  },
  text:{
    fontWeight:900,
    lineHeight:2,
  },
}));

const Landing = (props) => {

  const authContext  = useContext(AuthContext)

  const{isAuthenticated,}=authContext

  useEffect(() => {
    if(isAuthenticated){
      props.history.push('/cases');
    }
    // eslint-disable-next-line
  }, [props.history,isAuthenticated])

  const classes=useStyles();

  return (

    <Grid  color='primary' container className={classes.root}>
      <Grid item xs={12}>
        <Typography className={classes.title} variant='h3'>Medit</Typography>
        <Typography className={classes.text} variant='h6'gutterBottom>Imed Made Easy!</Typography>
        <Typography className={classes.text} variant='body1'color='primary' gutterBottom>We help students access case conditions in wards for learning purposes.Dont waste hours in ward rounds learning nothing.
                   cases displayed have learnable conditions including Key positives in the history, case name, Ward and Condition.
                   The case details expire within 7 days.</Typography>
        <Typography variant='overline' display='block'>Illness is the doctor to whom we pay most heed; to kindness, to knowledge, we make promise only; pain we obey.</Typography>
        <Typography variant='caption'display='block' gutterBottom>Marcel Proust</Typography>
        <Button href='/login' className={classes.button}color='secondary' variant="outlined" display='block'>Login</Button>
        <Button href='/register' className={classes.button} color='secondary' variant="outlined">Register</Button>
      </Grid>
    </Grid>



    // <div className="landing">
    //     <div className="dark-overlay landing-inner text-light">
    //       <div className="container">
    //         <div className="row">
    //           <div className="col-md-12 text-center">
    //             <h1 className="display-3 mb-4">SassyIMed</h1>
    //             <p className="lead">
    //               {' '}
    //              <h1>Imed made easy!</h1>
    //              <p>We help students access case conditions in wards for learning purposes.Dont waste hours in ward rounds learning nothing.
    //                cases displayed have learnable conditions including Key positives in the history, case name, Ward and Condition.
    //                The case details disappear within 5 days.
    //              </p>
    //              Illness is the doctor to whom we pay most heed; to kindness, to knowledge, we make promise only; pain we obey. 
    //              <h5>Marcel Proust</h5>
    //             </p>
    //             <hr />
    //             <Link to="/register" className="btn btn-lg btn-success mr-2">
    //               Sign Up
    //             </Link>
    //             <Link to="/login" className="btn btn-lg btn-light">
    //               Login
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
  )
}

export default Landing
