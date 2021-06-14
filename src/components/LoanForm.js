import React, { useState, useEffect } from "react";
import Slider from "react-rangeslider";

const LoanForm = ({ type, setEmiDataWrap }) => {
  const [data, setData] = useState({
    home: {
      minLoanAmount: 0,
      maxLoanAmount: 20000000,
      minLoanInterest: 5,
      maxLoanInterest: 20,
      minLoanTenure: 0,
      maxLoanTenure: 30,
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

  const formatAmt = (value) => Math.round(value / 100000) + " L";
  const formatInt = (value) => value + " %";
  const formatTenure = (value) => value + " Yrs";
  return (
    <div>
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
            onChange={(e) =>
              setEmidata({
                ...emidata,
                amount: parseInt(e.target.value),
              })
            }
          />
        </div>
        <Slider
          min={data[type].minLoanAmount}
          max={data[type].maxLoanAmount}
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
          <label> Loan Interest</label>
          <input
            type="text"
            value={emidata.interest}
            onChange={(e) =>
              setEmidata({
                ...emidata,
                interest: e.target.value,
              })
            }
          />
        </div>
        <Slider
          min={data[type].minLoanInterest}
          max={data[type].maxLoanInterest}
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
          <label> Loan tenure</label>
          <input
            type="text"
            value={emidata.tenure}
            onChange={(e) =>
              setEmidata({
                ...emidata,
                tenure: e.target.value,
              })
            }
          />
        </div>
        <Slider
          min={data[type].minLoanTenure}
          max={data[type].maxLoanTenure}
          value={emidata.tenure}
          format={formatTenure}
          onChange={(value) =>
            setEmidata({
              ...emidata,
              tenure: value,
            })
          }
        />
        <button className="btn">Calculate EMI</button>
      </form>
    </div>
  );
};

export default LoanForm;
