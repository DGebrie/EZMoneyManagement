import React, { Component } from "react";
import Chart from "react-apexcharts";

class BudgetPie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // options: {},
      series: [20, 20, 20, 25],
      labels: ["Apples", "Oranges", "Berries", "Grapes"],
      fill: {
        colors: [
          function ({ value, seriesIndex, w }) {
            if (value < 55) {
              return "#7E36AF";
            } else if (value >= 55 && value < 80) {
              return "#164666";
            } else {
              return "#D9534F";
            }
          },
        ],
      },
    };
  }

  render() {
    return (
      <div className="d-flex justify-content-center h-100 w-100 p-4 p-md-2">
        <div className="donut">
          <Chart
            // options={this.state.options}
            // series={this.state.series}

            type="pie"
            width="500"
            series={[10, 20, 10, 40, 10, 10]}
            options={{
              labels: [
                "Housing",
                "Transportation",
                "Debt Payments",
                "Savings",
                "Entertaiment",
                "Personal",
              ],
              fill: { colors: ["#1434A4", "#7DF9FF", "#6F8FAF"] },
              legend: {
                show: false,
              },
            }}
          />
        </div>
      </div>
    );
  }
}

export default BudgetPie;
