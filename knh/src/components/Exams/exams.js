import React from 'react'
import { Grid, makeStyles, IconButton, SvgIcon, Typography, Link } from '@material-ui/core';
import { ReactComponent as LungSvg } from '../../img/lungs.svg';
import { ReactComponent as BrainSvg } from '../../img/cns.svg';
import { ReactComponent as HeartSvg } from '../../img/heart.svg';
import { ReactComponent as GitSvg } from '../../img/git.svg';

const useStyles = makeStyles(theme=>({
  root: {
    display:'flex',
    flexDirection:'column',
    textAlign:'center',
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(3),
      flexDirection:'row',
      width: '100%',
    },
  },
  icons:{
    display:'flex',
    flexDirection:'column',
    [theme.breakpoints.down('sm')]: {
      width:'100%',
      justifyContent:'center',
      flexDirection:'row',
    },
    
  },
  title:{
    [theme.breakpoints.down('sm')]: {
      width:'100%',
    },
    
  }

}))



const Exams = () => {

  const classes =useStyles();

  return (
    <Grid container xs={12} className={classes.root}>
      <div className={classes.title}>
      <Typography variant='overline' display='block'>physical exams</Typography>
      </div>
      <div className={classes.icons}>
      <IconButton>
      <Link href="/resp" color="inherit">
      <SvgIcon component= {LungSvg} fontSize='large' color='primary' viewBox="0 0 511.984 511.984"/>
      </Link>
      </IconButton>
      <IconButton>
      <Link href="/cns" color="inherit">
        <SvgIcon component= {BrainSvg} fontSize='large' color='primary' viewBox="0 0 1280.000000 1088.000000"/>
        </Link>
      </IconButton>
      <IconButton>
      <Link href="/cvs" color="inherit">
        <SvgIcon component= {HeartSvg} fontSize='large' color='primary' viewBox="0 0 1000 1000"/>
        </Link>
      </IconButton>
      <IconButton>
      <Link href="/abd" color="inherit">
        <SvgIcon component= {GitSvg} fontSize='large' color='primary' viewBox="0 0 1280.000000 1199.000000"/>
        </Link>
      </IconButton>
      </div>
      
    </Grid>
   
  )
}

export default Exams
