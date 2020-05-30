import React from 'react'
import { makeStyles, Typography, List, ListItem, Grid, } from '@material-ui/core'

const useStyles = makeStyles(theme=>({
  root: {
   
    flexGrow:1,
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
const Resp = () => {
  const classes=useStyles()
  return (
    <div  className={classes.root}>
    <Grid container spacing={1}>
      <Grid item xs >
      <Typography className={classes.title} variant='overline'>1.hpi</Typography>
      <List dense disablePadding>
        <ListItem divider alignItems='start'>Chest pain</ListItem>
        <ListItem divider alignItems='start'>Palpitations</ListItem>
        <ListItem divider alignItems='start'>Dyspnoea</ListItem>
        <ListItem divider alignItems='start'>Dizziness</ListItem>
        <ListItem divider alignItems='start'>Claudication</ListItem>
      </List>
      </Grid>
      <Grid item xs>
      <Typography variant='overline' className={classes.title}>2.Past Hx</Typography>
      <List dense disablePadding>
        <ListItem divider alignItems='start'>Angina</ListItem>
        <ListItem divider alignItems='start'>RHF</ListItem>
        <ListItem divider alignItems='start'>HT,DB</ListItem>
        <ListItem divider alignItems='start'>Heart Surgeries(CABG)</ListItem>
        <ListItem divider alignItems='start'>Hypercholesterolaemia</ListItem>
      </List>
      </Grid>
      <Grid item xs>
      <Typography variant='overline' className={classes.title}>3.Drug/Social Hx</Typography>
      <List dense disablePadding>
        <ListItem divider alignItems='start'>Aspirin,GTN,B-Blockers/Diuretics/ACE-i/Statin</ListItem>
        <ListItem divider alignItems='start'>Smoking,Alcohol,Exercise</ListItem>
      </List>
      </Grid>
      <Grid item xs>
      <Typography variant='overline' className={classes.title}>4.Inspection</Typography>
      <List dense disablePadding>
        <ListItem divider alignItems='start'>General State</ListItem>
        <ListItem divider alignItems='start'>Color</ListItem>
        <ListItem divider alignItems='start'>SOB</ListItem>
        <ListItem divider alignItems='start'>Scars</ListItem>
        <ListItem divider alignItems='start'>Oxygen/GTN clues</ListItem>
      </List>
      </Grid>
      <Grid item xs={6}>
      <Typography variant='overline' className={classes.title}>5.Hands</Typography>
      <List dense disablePadding>
        <ListItem divider alignItems='start'>Capillary refill</ListItem>
        <ListItem divider alignItems='start'>Tar staining</ListItem>
        <ListItem divider alignItems='start'>Peripheral Cyanosis</ListItem>
        <ListItem divider alignItems='start'> tendon xanthomata, Janeway lesions,Osler's nodes</ListItem>
        <ListItem divider alignItems='start'>Quincke's sign, splinter haemorrhages, Clubbing</ListItem>
      </List>
      </Grid>
      <Grid item xs>
      <Typography variant='overline' className={classes.title}>6.Pulses& Blood Pressure</Typography>
      <List dense disablePadding>
        <Typography variant='body2'> Rate, rhythm; radio–radial delay , radiofemoral delay ,collapsing pulse</Typography>
        <ListItem divider alignItems='start'>Radial</ListItem>
        <ListItem divider alignItems='start'> Brachial (WaveForm Character)</ListItem>
        <ListItem divider alignItems='start'>Hyper/Hypotensive, Pulse Pressure</ListItem>
      </List>
      </Grid>
      <Grid item xs>
      <Typography variant='overline' className={classes.title}>7.Neck</Typography>
      <List dense disablePadding>
        <ListItem divider alignItems='start'>JVP: height, waveform, abdominojugular reflex</ListItem>
        <ListItem divider alignItems='start'>Carotid:Volume,Character,Corrigan's sign</ListItem>
      </List>
      <Typography variant='overline' className={classes.title}>8.Face</Typography>
      <List dense disablePadding>
        <ListItem divider alignItems='start'> Pale, flushed, central cyanosis</ListItem>
        <ListItem divider alignItems='start'>Snile Arcus</ListItem>
        <ListItem divider alignItems='start'>Conjuctival pallor</ListItem>
        <ListItem divider alignItems='start'>Malar Flush</ListItem>
        <ListItem divider alignItems='start'>Dental Hygiene</ListItem>
      </List>
      </Grid>
      <Grid item xs>
      <Typography variant='overline' className={classes.title}>9.Praecodium</Typography>
      <Typography variant='overline' className={classes.title}>a.Inspection</Typography>
      <Typography> Scars—midline sternotomy, lateral thoracotomy</Typography>
      <Typography variant='overline' className={classes.title}>b.Palpation</Typography>
      <List dense disablePadding>
        <ListItem variant='body2'> Apex beat 5ICS ,Character:impalpable(?dextrocardia/COPD), 
          tapping (palpable S1), double impulse,strong.</ListItem>
        <ListItem divider alignItems='start'>Heaves/Thrills</ListItem>
      </List>
      </Grid>
      <Grid item xs={6}>
      <Typography variant='overline' className={classes.title}>c.Ascultation</Typography>
      <Typography variant='overline'>Mitral Area</Typography>
      <Typography variant='body2'>1st and 2nd heart sound ,added sounds, murmurs and radiations(pansystolic murmur radiating to the axilla—mitral regurgitation) (Accentuate for mid-diastolic murmur—mitral stenosis).</Typography>
      <Typography variant='overline'>Tricuspid Area</Typography>
      <Typography variant='body2'>left of manubrium in the 2nd intercostal space</Typography>
      <Typography variant='overline'>Aortic Area</Typography>
      <Typography variant='body2'>ejection systolic murmur radiating to the carotids—aortic stenosis.Sit the patient up and listen at the lower left sternal edge with patient held in expiration (early diastolic murmur: aortic regurgitation?).</Typography>
      </Grid>
      <Grid item xs>
      <Typography variant='overline' className={classes.title}>d.complete the examination</Typography>
      <List dense disablePadding alignItems='start'>
        <ListItem divider alignItems='start'>sacral and ankle oedema</ListItem>
        <ListItem divider alignItems='start'>lung bases for inspiratory crackles</ListItem>
        <ListItem divider alignItems='start'> pulsatile liver and aortic aneurysm</ListItem>
        <ListItem divider alignItems='start'>peripheral pulses, observation chart for temperature and O2, sats, dip urine, perform fundoscopy</ListItem>
      </List> 
      </Grid>
  </Grid> 
    </div>
    
  )
}
export default Resp;
