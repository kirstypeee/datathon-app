import * as React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {
  XYPlot,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  LineSeries
} from "react-vis";
import "./charts.css";

class Charts extends React.Component<{}, {}> {
  public render() {
    const data = [
      { x: 0, y: 8 },
      { x: 1, y: 5 },
      { x: 2, y: 4 },
      { x: 3, y: 9 },
      { x: 4, y: 1 },
      { x: 5, y: 7 },
      { x: 6, y: 6 },
      { x: 7, y: 3 },
      { x: 8, y: 2 },
      { x: 9, y: 0 }
    ];
    return (
      <div className="chart-wrapper">
        <Card>
          <CardContent>
            <h2>Example Title #1</h2>
            <XYPlot height={400} width={600}>
              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis />
              <YAxis />
              <LineSeries data={data} />
            </XYPlot>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h2>Example Title #2</h2>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h2>Example Title #3</h2>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h2>Example Title #4</h2>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default Charts;
