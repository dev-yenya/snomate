import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import 'bootstrap/dist/css/bootstrap.min.css';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '40vh',
    width : '200vh',
  },

  paper: {
    margin: theme.spacing(4, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'top',
  },

  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
}));

export default function MemberEvaluation() {
  const classes = useStyles();

  return (    
    <Grid container className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} md={4} />
      <Grid item xs={12} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>        
          
        </div>
      </Grid>      
    </Grid>
  );
}