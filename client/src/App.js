import React, {Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Register from './components/auth/Register';
import Landing from './components/layout/Landing'
import Footer from './components/layout/Footer'
import Login from './components/auth/Login';
import Resp from './components/Exams/Resp';
import Cvs from './components/Exams/Cvs';
import Abd from './components/Exams/Abd';
import Cns from './components/Exams/Cns';
import CaseForm from './components/cases/CaseForm'
import PrivateRoute from './components/routing/PrivateRoute';
import CaseState from './context/Case/CaseState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState'
import Alerts from './components/layout/Alerts'
import './App.css';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Container from '@material-ui/core/Container';



const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00897b',
    },
    secondary: {
      main: '#f48fb1',
    },
  },
  typography: {
    "fontFamily": `"Lato", "Helvetica", "Arial", sans-serif`,    
    fontSize: 14,
  },
});

const App = (props) => {


  return (
<Container disableGutters maxWidth="md">
  <ThemeProvider theme={theme}>  
    <AlertState>
    <AuthState>
      <CaseState>
          <Router>
            <Fragment>
              <Navbar />
              <Alerts/>
                <Switch>
                  <Route exact path="/" component={Landing} />
                  <PrivateRoute exact path="/case" component={CaseForm} />  
                  <PrivateRoute exact path="/cases" component={Home} />  
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                  <Route exact path='/cvs' component={Cvs} />
                  <Route exact path='/resp' component={Resp} />
                  <Route exact path='/abd' component={Abd} />
                  <Route exact path='/cns' component={Cns} />
                </Switch>
                <Footer/>
            </Fragment>
          </Router>
      </CaseState>
    </AuthState>
  </AlertState>
</ThemeProvider>
</Container>
  );
};

export default App;
