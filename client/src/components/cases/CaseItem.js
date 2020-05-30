import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import CaseContext from '../../context/Case/CaseContext';
import { makeStyles } from '@material-ui/core/styles';
import {Card,Collapse, List, ListItem, ListItemText, IconButton, CardContent, Typography, Grid} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import DynamicFeedRoundedIcon from '@material-ui/icons/DynamicFeedRounded';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Comments from './Comments'
import clsx from 'clsx';

const useStyles = makeStyles({
  root: {
    display:'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
  },
});

const CaseItem = ({ caSe }) => {
  const caseContext = useContext(CaseContext);
  
  const { deletecase, getCurrent, current } = caseContext;

  const { _id, name, ward, condition, positives, username } = caSe;

  var positivesFormatted=positives.split(',');

  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    getCurrent(_id).then(
    setExpanded(!expanded)
    )
  };
  
  const history = useHistory();
  const updateCaseForm = (_id,history) =>{
    getCurrent(_id).then(
      history.push('/case')
    )
  }
  
  return (
   
  <Card className={classes.root}>
  <Grid container spacing={0} >
  <Grid item xs={12} sm={6} >
  <div className={classes.details}>
    <CardContent >
    <Typography component="h5" variant="overline">{name}</Typography>
      <Typography variant="subtitle1" color="textSecondary">
      {`Posted by:${username}`}
      </Typography>
      <Typography variant="overline" display="block" gutterBottom>{ward}</Typography>
      <Typography className={classes.pos} variant='overline'>{condition}</Typography>
      
    </CardContent>
    <div className={classes.controls}>
    <IconButton aria-label="update" onClick={()=>updateCaseForm(_id, history)}>
        <DynamicFeedRoundedIcon/>
      </IconButton>
    <IconButton aria-label="delete" onClick={()=>deletecase(_id)}>
        <DeleteIcon />
      </IconButton>
      <IconButton
       className={clsx(classes.expand, {
         [classes.expandOpen]: expanded,
       })}
       onClick={handleExpandClick}
       aria-expanded={expanded}
       aria-label="show more"
     >
       <Typography variant="overline" display="block">Comments</Typography>
       <ExpandMoreIcon />
     </IconButton>
    </div>
  </div>
  </Grid>
  <Grid item xs={12} sm={6} >
  <CardContent>
    <div className={classes.details}>
    <Typography variant="overline" > Key Positives </Typography>
      <List disablePadding >
         {positivesFormatted.map(item=>
               
               <ListItem dense key={item+1}>
              <ListItemText
               primary={item}
               />
             </ListItem>                 
        )}
             
      </List>
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
          <List>
            {/* { current.comments!==undefined && current.comments.map(comment=> 
              <ListItem>
              <Typography variant='caption'>{comment.text}</Typography>
            </ListItem>
            )}   */}
            {current.comments!==undefined && current.comments.length>0 ? 
            (current.comments.map(comment=> 
              <ListItem>
              <Typography variant='caption'>{comment.text}</Typography>
            </ListItem>)):(<p>No comments</p>)}
              </List>
              <Comments/>
            </CardContent>
          </Collapse>
    </div>
  </CardContent>
  </Grid>
  </Grid>
</Card>
  );
};

CaseItem.propTypes = {
  caSe: PropTypes.object.isRequired
};

export default CaseItem;
