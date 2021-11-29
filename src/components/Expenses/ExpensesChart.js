import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Okt", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expense of props.expenses) {
    var expenseMonth = expense.date.getMonth(); // starting at 0 => January => 0
    if (expenseMonth >= 5) {
      expenseMonth -= 1;
    }
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  return <Chart datePoints={chartDataPoints} />;
};

export default ExpensesChart;
