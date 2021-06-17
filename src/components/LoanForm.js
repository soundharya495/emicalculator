import React, { useState, useEffect } from "react";

//slider library
import Slider from "react-rangeslider";

const LoanForm = ({ type, setEmiDataWrap }) => {
  const [data, setData] = useState({
    home: {
      minLoanAmount: 0,
      maxLoanAmount: 20000000,
      minLoanInterest: 5,
      maxLoanInterest: 20,
      minLoanTenure: 5,
      maxLoanTenure: 30,
    },
    personal: {
      minLoanAmount: 0,
      maxLoanAmount: 1500000,
      minLoanInterest: 5,
      maxLoanInterest: 25,
      minLoanTenure: 1,
      maxLoanTenure: 5,
    },
    car: {
      minLoanAmount: 0,
      maxLoanAmount: 2000000,
      minLoanInterest: 5,
      maxLoanInterest: 20,
      minLoanTenure: 1,
      maxLoanTenure: 7,
    },
    general: {
      minLoanAmount: 0,
      maxLoanAmount: 50000000,
      minLoanInterest: 5,
      maxLoanInterest: 20,
      minLoanTenure: 1,
      maxLoanTenure: 15,
    },
  });

  const [emidata, setEmidata] = useState({
    amount: 200000,
    interest: 15,
    tenure: 5,
  });

  useEffect(() => {
    setEmidata({
      amount: 200000,
      interest: 10,
      tenure: 3,
    });
  }, [type]);

  const OnIputChange = (e) => {
    const name = e.target.name;
    setEmidata({
      ...emidata,
      name: parseInt(e.target.value),
    });
    setEmiDataWrap({
      ...emidata,
      name: parseInt(e.target.value),
    });
  };

  const formatAmt = (value) => Math.round(value / 100000) + " L";
  const formatInt = (value) => value + " %";
  const formatTenure = (value) => value + " Yrs";
  return (
    <div className="col50">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setEmiDataWrap(emidata);
        }}
      >
        <div className="inputgroup">
          <label>
            {type.charAt(0).toUpperCase() + type.slice(1)} Loan Amount
          </label>
          <input
            type="text"
            value={emidata.amount}
            /* .toFixed(2)
              .replace(/(\d)(?=(\d{2})+\d\.)/g, "$1,")}*/
            onChange={(e) => {
              OnIputChange(e);
            }}
          />
        </div>
        <Slider
          min={data[type].minLoanAmount}
          max={data[type].maxLoanAmount}
          value={emidata.amount}
          format={formatAmt}
          onChange={(value) => {
            setEmidata({
              ...emidata,
              amount: value,
            });
            setEmiDataWrap({
              ...emidata,
              amount: value,
            });
          }}
        />
        <div className="inputgroup">
          <label> Loan Interest</label>
          <input
            type="text"
            value={emidata.interest}
            onChange={(e) => {
              OnIputChange(e);
            }}
          />
        </div>
        <Slider
          min={data[type].minLoanInterest}
          max={data[type].maxLoanInterest}
          value={emidata.interest}
          format={formatInt}
          onChange={(value) => {
            setEmidata({
              ...emidata,
              interest: value,
            });
            setEmiDataWrap({
              ...emidata,
              interest: value,
            });
          }}
        />
        <div className="inputgroup">
          <label> Loan tenure</label>
          <input
            type="text"
            value={emidata.tenure}
            onChange={(e) => {
              OnIputChange(e);
            }}
          />
        </div>
        <Slider
          min={data[type].minLoanTenure}
          max={data[type].maxLoanTenure}
          value={emidata.tenure}
          format={formatTenure}
          onChange={(value) => {
            setEmidata({
              ...emidata,
              tenure: value,
            });
            setEmiDataWrap({
              ...emidata,
              tenure: value,
            });
          }}
        />
      </form>
    </div>
  );
};

export default LoanForm;
