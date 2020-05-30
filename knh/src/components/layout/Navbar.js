import React, {useContext, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import AuthContext from '../../context/auth/authContext';
import {fade, SvgIcon, Link, makeStyles, AppBar,Toolbar,IconButton,Typography, MenuItem, Menu, } from '@material-ui/core';
import {AccountCircle, ExitToApp, Add, PermIdentity, Search, } from '@material-ui/icons';
import ListRoundedIcon from '@material-ui/icons/ListRounded';
import CasesFilter from '../cases/CasesFilter';
import { ReactComponent as LogoSvg } from '../../img/logo.svg';
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight:theme.spacing(2),
  },
  title: {
    display: 'block',
    fontSize:'1.2rem',
    textTransform:'uppercase',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));


const Navbar = () => {

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

 
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };


  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };


  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, loadUser } = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);


  
  function HomeIcon(props) {
    return (
      <SvgIcon {...props} >
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }
  const classes=useStyles();


  const authLinks = (
    <>
      <MenuItem>
      <IconButton 
      aria-label="add new case" 
      color="inherit"
      >
       <Add />     
      </IconButton>
      <Link href="/case" color="inherit">Add Case</Link>
      </MenuItem>
      <MenuItem>
      <IconButton
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      onClick={()=>logout()}
      color="inherit"
      >
      <ExitToApp/>
      </IconButton> 
      <p>Logout</p>
      </MenuItem>
    </> 
  );

  const guestLinks = ( 
       <>
         <MenuItem>
        <IconButton aria-label="login" color="inherit">
        <AccountCircle/>     
        </IconButton>
        <Link href="/login" color="inherit">Login</Link>
        </MenuItem>
        <MenuItem>
        <IconButton aria-label="register" color="inherit">
        <PermIdentity/>     
        </IconButton>
        <Link href="/register" color="inherit">Register</Link> 
        </MenuItem>
       </>
   
  );
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {isAuthenticated? authLinks : guestLinks}
    </Menu>
  );
  const history = useHistory();

  const routeChange=()=> {
    history.push('/cases');
  }

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
                      >
          <SvgIcon component={LogoSvg} fontSize='large' viewBox="0 0 1280.000000 1199.000000"/>    
          <Typography className={classes.title} variant="h6" noWrap>
              Medit
          </Typography>
          </IconButton>
          <IconButton aria-label="register" fontSize='large' color='inherit' onClick={routeChange}>
          <HomeIcon/>
          </IconButton>
          
          {isAuthenticated&&(
             <div className={classes.search}>
             <div className={classes.searchIcon}>
               <Search />
             </div>
             <CasesFilter/>
           </div>
          )}
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {isAuthenticated ? authLinks : guestLinks}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <ListRoundedIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {/* {renderMenu} */}
    </div>
  );
  
}

export default Navbar;






 

