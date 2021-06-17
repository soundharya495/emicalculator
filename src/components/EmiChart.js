import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";

const EmiChart = ({ interest, principal }) => {
  const data = {
    labels: ["Total Interest", "Principal Loan Amount"],
    datasets: [
      {
        data: [interest, principal],
        backgroundColor: ["#fcd364", "#9a6579"],
      },
    ],
  };

  return (
    <div>
      <Pie
        data={{ labels: data.labels, datasets: data.datasets }}
        height="50%"
      />
    </div>
  );
};

export default EmiChart;
