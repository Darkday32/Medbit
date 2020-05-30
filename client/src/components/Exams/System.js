import React from 'react'
import { makeStyles, Typography, List, ListItem, Grid, } from '@material-ui/core'

const useStyles = makeStyles(theme=>({
  root: {
   
    flexGrow:1,
    textTransform:'capitalize',
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
   
  },
  title:{
  display:'block',
  textTransform:'uppercase',
  textDecoration:'underline',
  textDecorationColor: theme.palette.primary,
  color:theme.palette.primary.main,
  },
}))
const System = ({
 hpiList, pastList, drugSocialList, gInspection, hands, pulses, neck, face, section, 
 pInspection, palpation, ascultate, complete,percussion

}) => {
  const classes=useStyles()
  return (
    <div  className={classes.root}>
    <Grid container spacing={1}>
      <Grid item xs >
      <Typography className={classes.title} variant='overline'>1.HPI</Typography>
      <List dense disablePadding >
      {hpiList.map(item=>
      <ListItem divider alignItems='start'>{item}</ListItem>  
      )}
      </List>
      </Grid>
      <Grid item xs>
      <Typography variant='overline' className={classes.title}>2.Past Hx</Typography>
        <List dense disablePadding >
        {pastList.map(item=>
        <ListItem divider alignItems='start'>{item}</ListItem>  
        )}
        </List>
      </Grid>
      <Grid item xs>
      <Typography variant='overline' className={classes.title}>3.Drug/Social Hx</Typography>
      <List dense disablePadding >
        {drugSocialList.map(item=>
        <ListItem divider alignItems='start'>{item}</ListItem>  
        )}
        </List>
      </Grid>
      <Grid item xs>
      <Typography variant='overline' className={classes.title}>4.Inspection</Typography>
      <List dense disablePadding >
        {gInspection.map(item=>
        <ListItem divider alignItems='start'>{item}</ListItem>  
        )}
        </List>
      </Grid>
      <Grid item xs={6}>
      <Typography variant='overline' className={classes.title}>5.Hands</Typography>
      <List dense disablePadding >
        {hands.map(item=>
        <ListItem divider alignItems='start'>{item}</ListItem>  
        )}
        </List>
      </Grid>
      <Grid item xs>
      <Typography variant='overline' className={classes.title}>6.Pulses& Blood Pressure</Typography>
      <List dense disablePadding >
        {pulses.map(item=>
        <ListItem divider alignItems='start'>{item}</ListItem>  
        )}
        </List>
      </Grid>
      <Grid item xs>
      <Typography variant='overline' className={classes.title}>7.Neck</Typography>
      <List dense disablePadding >
        {neck.map(item=>
        <ListItem divider alignItems='start'>{item}</ListItem>  
        )}
        </List>
      <Typography variant='overline' className={classes.title}>8.Face</Typography>
      <List dense disablePadding >
        {face.map(item=>
        <ListItem divider alignItems='start'>{item}</ListItem>  
        )}
        </List>
      </Grid>
      <Grid item xs>
      <Typography variant='overline' className={classes.title}>9.{section}</Typography>
      <Typography variant='overline' className={classes.title}>a.Inspection</Typography>
      <List dense disablePadding >
        {pInspection.map(item=>
        <ListItem divider alignItems='start'>{item}</ListItem>  
        )}
        </List>
      <Typography variant='overline' className={classes.title}>b.Palpation</Typography>
      <List dense disablePadding >
        {palpation.map(item=>
        <ListItem divider alignItems='start'>{item}</ListItem>  
        )}
        </List>
        <Typography variant='overline' className={classes.title}>c.Percussion</Typography>
      <List dense disablePadding >
        {percussion.map(item=>
        <ListItem divider alignItems='start'>{item}</ListItem>  
        )}
        </List>
      </Grid>
      <Grid item xs={6}>
      <Typography variant='overline' className={classes.title}>d.Ascultation</Typography>
      <List dense disablePadding >
        {ascultate.map(item=>
        <ListItem divider alignItems='start'>{item}</ListItem>  
        )}
        </List>
      </Grid>
      <Grid item xs>
      <Typography variant='overline' className={classes.title}>d.complete the examination</Typography>
      <List dense disablePadding >
        {complete.map(item=>
        <ListItem divider alignItems='start'>{item}</ListItem>  
        )}
        </List>
      </Grid>
  </Grid> 
    </div>
    
  )
}
export default System;
