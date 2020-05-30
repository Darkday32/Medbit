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

const Cns = () => {
 
 const hpiList=[
   'MMSE','headache','muscle weakness','visual disturbance','sense change','dizziness','speech disturbance','Dysphagia','faints/involuntary movements',
 'tremors','paraesthesia',
  ]
const gInspectionUL=[
  'posture','asymmetry,','fasciculation/tremor/dystonia/athetosis','muscle wasting','Symmetry','General state',
  
]
const gInspectionLL=[
  'Gait:arm swing,walking aid, symmetry,pace size, heel-toe, toe walking, heel walking', 'Romberg test',
  'posture','asymmetry,','fasciculation/tremor/dystonia/athetosis','muscle wasting','Symmetry','General state',
   
 ]
const toneUL=[
  'spasticity','rigidity',
]
const toneLL=[
  'spasticity','rigidity','Clonus:3>beats'
]
const power=[
   "Grade 0: No muscle contraction",  'Grade 3: Active movement against gravity',
 " Grade 1: Flicker of contraction",  'Grade 4: Active movement against resistance',
 ' Grade 2: Some active movement',  'Grade 5: Normal power (allowing for age) ',
]
const reflexesUL=[
  'absent/present (with reinforcement)/normal/brisk/exaggerated?','Biceps (C5,6)Triceps (C7)Supinator (C6) '
]
const reflexesLL=[
  'absent/present (with reinforcement)/normal/brisk/exaggerated?','Knee (L3,4)Ankle(L5,S1)Plantar Reflexes (L5,S1,S2) '
]
const coordUL=[
  'Dysdiadokinesis','Pronator drift'
]
const coordLL=[
  'Heel-Shin test'
]
const sensation=[
'Light touch','Pin prick','temperature','Vibration:128Hz','Propioception',
]

const pastList=[
  'meningitis/encephalitis',
  'head/spine trauma,carcinoma',
  'seizures',
  'recent travel,pregnancy',
  'vascular disease,',
]
const drugSocialList=[
  'anticonvulsant/antipsychotic/antidepressants','isoniazid,psychotropic drugs',
'Bathel score,sexual history,Recent Travel,Family hx psychiatric dse,','smoking/Alcohol/Drug use',
]
const CN=[
  'Smell',
  'Acuity:Fields,Pupils:Size,shape,symmetry,accommodatin Swinging light test for RAPD'
  ,'Eye movements: H',
  ' V:Motor:jaw deviates to side of lesion, muscles of mastication.Sensory:3,corneal reflex ',
  'VII: Lower two-thirds is affected in UMN lesions, all of one side of the face in LMN lesions. Ask to ‘raise your eyebrows’, ‘show me your teeth’, ‘puff out your cheeks’. Test taste with salt/sweet solutions',
  ' VIII:Number whispered in an ear while you blockthe other. Perform Weber’s and Rinne’s tests',
  ' IX & X: Gag reflex',
  'XI:Shrug shoulders, Turn head against resistance',
  ' XII: Tongue movement—the tongue deviates to the side of the lesion',
]

const classes=useStyles()

return (
    <div  className={classes.root}>
    <Grid container>
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
      <Typography variant='overline' className={classes.title}>4.Upper limbs</Typography>
      <Typography variant='overline' className={classes.title}>a.Inspection</Typography>
      <List dense disablePadding >
        {gInspectionUL.map(item=>
        <ListItem divider alignItems='start'>{item}</ListItem>  
        )}
        </List>
      <Typography variant='overline' className={classes.title}>b.Tone</Typography>
      <List dense disablePadding >
        {toneUL.map(item=>
        <ListItem divider alignItems='start'>{item}</ListItem>  
        )}
        </List>
      <Typography variant='overline' className={classes.title}>c.Power</Typography>
      <List dense disablePadding >
        {power.map(item=>
        <ListItem divider alignItems='start'>{item}</ListItem>  
        )}
        </List>
      <Typography variant='overline' className={classes.title}>d.Reflexes</Typography>
      <List dense disablePadding >
        {reflexesUL.map(item=>
        <ListItem divider alignItems='start'>{item}</ListItem>  
        )}
        </List>
      <Typography variant='overline' className={classes.title}>e.Coordination</Typography>
      <List dense disablePadding >
        {coordUL.map(item=>
        <ListItem divider alignItems='start'>{item}</ListItem>  
        )}
        </List>
        <Typography variant='overline' className={classes.title}>e.Sensation</Typography>
      <List dense disablePadding >
        {sensation.map(item=>
        <ListItem divider alignItems='start'>{item}</ListItem>  
        )}
        </List>
      </Grid>
      <Grid item xs>
      <Typography variant='overline' className={classes.title}>5.Lower limbs</Typography>
      <Typography variant='overline' className={classes.title}>a.Inspection</Typography>
      <List dense disablePadding >
        {gInspectionLL.map(item=>
        <ListItem divider alignItems='start'>{item}</ListItem>  
        )}
        </List>
      <Typography variant='overline' className={classes.title}>b.Tone</Typography>
      <List dense disablePadding >
        {toneLL.map(item=>
        <ListItem divider alignItems='start'>{item}</ListItem>  
        )}
        </List>
      <Typography variant='overline' className={classes.title}>c.Power</Typography>
      <List dense disablePadding >
        {power.map(item=>
        <ListItem divider alignItems='start'>{item}</ListItem>  
        )}
        </List>
      <Typography variant='overline' className={classes.title}>d.Reflexes</Typography>
      <List dense disablePadding >
        {reflexesLL.map(item=>
        <ListItem divider alignItems='start'>{item}</ListItem>  
        )}
        </List>
      <Typography variant='overline' className={classes.title}>e.Coordination</Typography>
      <List dense disablePadding >
        {coordLL.map(item=>
        <ListItem divider alignItems='start'>{item}</ListItem>  
        )}
        </List>
        <Typography variant='overline' className={classes.title}>e.Sensation</Typography>
      <List dense disablePadding >
        {sensation.map(item=>
        <ListItem divider alignItems='start'>{item}</ListItem>  
        )}
        </List>
      </Grid>
      <Grid item xs={6}>
      <Typography variant='overline' className={classes.title}>6.Cranial Nerves</Typography>
      <List dense disablePadding >
        {CN.map(item=>
        <ListItem divider alignItems='start'>{item}</ListItem>  
        )}
        </List>
      </Grid>
  </Grid> 
    </div>
  )
}
export default Cns




