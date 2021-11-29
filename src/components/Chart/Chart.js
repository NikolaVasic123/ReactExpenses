import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const datePointValue = props.datePoints.map(dataPoint => dataPoint.value);
    const totalMax = Math.max(...datePointValue);
  return (
    <div className="chart">
      {props.datePoints.map((datePoints) => (
        <ChartBar
          key={datePoints.id}
          value={datePoints.value}
          maxValue={totalMax}
          label={datePoints.label}
        />
      ))}
    </div>
  );
};

export default Chart;
