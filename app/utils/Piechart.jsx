"use client";

import React from "react";
import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

const Piechart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      const context = chartRef.current.getContext("2d");

      Chart.defaults.font.color = "#ffffff";
      Chart.defaults.font.size = 24;
      const newChart = new Chart(context, {
        type: "doughnut",

        data: {
          labels: ["90% LP ", "10% KOL", "5% Team",],
          datasets: [
            {
              label: "Info",
              data: [90, 5, 5],
              backgroundColor: [
                '#fcf300',
                '#ff5f6d',   
                "#2C6E63", 
                "#561217", 
              ],
              borderColor: [
                '#FBE5B6',
                '#ff5f6d',   
                "#2C6E63", 
                "#561217", 
               
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {},
      });
      chartRef.current.chart = newChart;
    }
  }, []);
  return (
    <div
      style={{ position: "relative", width: "90vw", height: "70vh", display: "flex", justifyContent: "center", alignItems: "center" }}
      className=""
    >
      <canvas ref={chartRef} />
    </div>
  );
};

export default Piechart;
