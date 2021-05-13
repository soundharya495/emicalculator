import React, { useState } from "react";
import Slider from "react-rangeslider";

const LoanForm = ({ type }) => {
  const [data, setData] = useState({
    home: {
      minLoanAmount: 0,
      maxLoanAmount: 20000000,
      minLoanInterest: 5,
      maxLoanInterest: 20,
      minLoanTenure: 0,
      maxLoanTenure: 30,
      labels: {
        0: "200L",
        12.5: "175L",
        25: "150L",
        37.5: "125L",
        50: "100L",
        62.5: "75L",
        75: "50L",
        87.5: "25L",
        100: "0",
      },
    },
    personal: {
      minLoanAmount: 0,
      maxLoanAmount: 1500000,
      minLoanInterest: 5,
      maxLoanInterest: 25,
      minLoanTenure: 0,
      maxLoanTenure: 5,
    },
    car: {
      minLoanAmount: 0,
      maxLoanAmount: 2000000,
      minLoanInterest: 5,
      maxLoanInterest: 20,
      minLoanTenure: 0,
      maxLoanTenure: 7,
    },
    general: {
      minLoanAmount: 0,
      maxLoanAmount: 50000000,
      minLoanInterest: 5,
      maxLoanInterest: 20,
      minLoanTenure: 0,
      maxLoanTenure: 15,
    },
  });

  const [emidata, setEmidata] = useState({
    amount: 0,
    interest: 5,
    tenure: 0,
  });
  const formatAmt = (value) => Math.round(value / 100000) + " L";
  const formatInt = (value) => value + " %";
  const formatTenure = (value) => value + " Yrs";
  return (
    <div>
      <div className="inputgroup">
        <label>{type} Loan Amount</label>
        <input
          type="text"
          value={emidata.amount
            .toFixed(2)
            .replace(/(\d)(?=(\d{2})+\d\.)/g, "$1,")}
        />
      </div>
      <Slider
        min={data.home.minLoanAmount}
        max={data.home.maxLoanAmount}
        value={emidata.amount}
        format={formatAmt}
        onChange={(value) =>
          setEmidata({
            ...emidata,
            amount: value,
          })
        }
      />
      <div className="inputgroup">
        <label>{type} Loan Interest</label>
        <input type="text" value={emidata.interest} />
      </div>
      <Slider
        min={data.home.minLoanInterest}
        max={data.home.maxLoanInterest}
        value={emidata.interest}
        format={formatInt}
        onChange={(value) =>
          setEmidata({
            ...emidata,
            interest: value,
          })
        }
      />
      <div className="inputgroup">
        <label>{type} Loan tenure</label>
        <input type="text" value={emidata.tenure} />
      </div>
      <Slider
        min={data.home.minLoanTenure}
        max={data.home.maxLoanTenure}
        value={emidata.tenure}
        format={formatTenure}
        onChange={(value) =>
          setEmidata({
            ...emidata,
            tenure: value,
          })
        }
      />
    </div>
  );
};

export default LoanForm;
