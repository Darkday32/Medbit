import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import TextFieldGroup from '../../utils/TextFieldGroup'
import {Paper, Button,Typography, Grid,makeStyles, FormControl,FormHelperText} from '@material-ui/core';


const useStyles = makeStyles(theme=>({
  root: {
   
    display:'flex',

  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
   
  },
}))

const Login = props => {
  
 const authContext  = useContext(AuthContext)

 const{login,isAuthenticated, errors, loadUser}=authContext

 useEffect(() => {
   if(isAuthenticated){
    props.history.push('/cases');
   }
  // eslint-disable-next-line
 }, [props.history,isAuthenticated])

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  useEffect(()=>{
    loadUser();
     // eslint-disable-next-line

    },[])
  
  const { email, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    
      login({
        email,
        password
      });
   
  };

  const classes=useStyles();

  return (
    <Grid container className={classes.root} >
       <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant='h4'>LOGIN</Typography>
            <Typography variant='paragraph'>Sign in to your account</Typography>
            <form onSubmit={onSubmit}>
            <FormControl fullWidth margin='normal'>
              <TextFieldGroup 
                    label='Email Address'
                    type='text'
                    placeholder='Email Address'
                    name='email'
                    value={email}
                    onChange={onChange}
                    error={errors&&errors.email}
                    id='my-email'
                  />
              <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl fullWidth margin='normal'>
                <TextFieldGroup
                  label="Password"
                  type="password" 
                  name='password'
                  onChange={onChange}
                  value={password}
                  error={errors&&errors.password}
                  id="exampleInputPassword1"/>
           </FormControl>     
           <Button variant="outlined" color='primary'
           type='submit'> LOGIN</Button>
           </form>
          </Paper>
        </Grid>
    </Grid>
  );
};

export default Login;
