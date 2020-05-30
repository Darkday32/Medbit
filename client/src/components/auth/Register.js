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

const Register = (props) => {
  const authContext = useContext(AuthContext);

  const { register, errors, isRegistered } = authContext;

  useEffect(() => {
    if (isRegistered) {
      props.history.push('/login');
    }  
    // eslint-disable-next-line
  }, [isRegistered, props.history]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    
      register({
        name,
        email,
        password,
        password2
      });
  };

const classes=useStyles();

  return (

    <Grid container className={classes.root} >
       <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant='h4'>REGISTER</Typography>
            <Typography variant='paragraph'>Sign up for your account</Typography>
            <form onSubmit={onSubmit}>
            <FormControl fullWidth margin='normal'>          
              <TextFieldGroup 
                    type='text'
                    label='Name'
                    name='name'
                    value={name}
                    onChange={onChange}
                    error={errors&&errors.name}
                    id='my-name'
                  />
            </FormControl>
            <FormControl fullWidth margin='normal'>
              <TextFieldGroup 
                    label='Email Address'
                    type='text'
                    placeholder='Email Address'
                    name='email'
                    value={email}
                    onChange={onChange}
                    error={errors&&errors.email}
                  />
              <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl fullWidth margin='normal'>
                <TextFieldGroup
                  label='Password'
                  type="password" 
                  name='password'
                  onChange={onChange}
                  value={password}
                  error={errors&&errors.password}
                  id="exampleInputPassword1"/>
           </FormControl>     
           <FormControl fullWidth margin='normal'>
                <TextFieldGroup
                  label='Confirm Password'
                  type="password" 
                  name='password2'
                  onChange={onChange}
                  value={password2}
                  error={errors&&errors.password2}/>
           </FormControl>     
           <Button variant="outlined" color='primary'
           type='submit'> REGISTER</Button>
           </form>
          </Paper>
        </Grid>
    </Grid>
  );
};

export default Register;
