import React from "react";
import ReactDOM from "react-dom";

import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";

const data = [
  { quarter: 1, earnings: 36 },
  { quarter: 2, earnings: 70 },
  { quarter: 3, earnings: 35 },
  { quarter: 4, earnings: 100 },
];

class Bar extends React.Component {
  render() {
    return (
      <div>
        
        <VictoryChart domainPadding={40} theme={VictoryTheme.material}>
          <VictoryAxis
            tickValues={[1, 2, 3, 4]}
            tickFormat={["성실성", "실력", "리더십", "의사소통"]}
          />
          <VictoryAxis dependentAxis tickFormat={(x) => `${x}`} />
          <VictoryBar data={data} x="quarter" y="earnings" />
        </VictoryChart>
      </div>
    );
  }
}

export default Bar;