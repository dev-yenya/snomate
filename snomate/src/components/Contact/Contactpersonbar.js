import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";
import styled from "styled-components";
import profile from "./profile.jpg";
import { ProgressBar, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '30vh',
    width : '70vh',
  },
  
  paper: {
    margin: theme.spacing(4, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
}));


const data = [
  { quarter: 1, earnings: 60 },
  { quarter: 2, earnings: 52 },
  { quarter: 3, earnings: 74 },
  { quarter: 4, earnings: 69 },
];

const Side = styled.div`
  display: flex;
  border-right: 1px solid #e0e0e0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
`
const Profile = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
`

export default function MemberEvaluation() {
  const classes = useStyles();
  const progress1 = 41.6;

  return (    
    <Grid container className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} md={4} />
      <Grid item xs={12} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>        
          <Side>
            <div>
              <Profile src={profile}></Profile>     
            </div>
            <div style = {{float: 'left'}}>
              <h7>name</h7>
            </div>

            <h1></h1>41.6°C
            <div style={{ width: 150 }}>
              <ProgressBar now={progress1} variant="success" />
            </div >
          </Side>

          <div>
            <VictoryChart domainPadding={40} theme={VictoryTheme.material}>
              <VictoryAxis
                tickValues={[1, 2, 3, 4]}
                tickFormat={["성실성", "능력", "리더십", "의사소통"]}
              />
              <VictoryAxis dependentAxis tickFormat={(x) => `${x}`} />
            <VictoryBar data={data} x="quarter" y="earnings" />
            </VictoryChart>
          </div>
        </div>
      </Grid>      
    </Grid>
  );
}