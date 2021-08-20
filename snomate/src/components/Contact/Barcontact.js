import React from "react";
import ReactDOM from "react-dom";
import profile from "./profile.jpg";
import styled from "styled-components";
import { ProgressBar, Button } from 'react-bootstrap';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";

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
const progress1 = 41.6;

export default function Barcontact() {
  return (  
    <div>
      <div>
        <div>
          <Profile src={profile}></Profile> 
          <h7>  name</h7>   
        </div>       
        <h1></h1>41.6°C
        <div style={{ width: 150 }}>
          <ProgressBar now={progress1} variant="success" />
        </div>  

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
    </div>   
  );
}
