import React, { useState, Fragment } from "react";
import EmiChart from "./EmiChart";

const EmiDetail = ({ emiData }) => {
  const [loanData, setLoanData] = useState({
    emi: 0,
    interest: 0,
    total: 0,
  });
  const { amount, interest, tenure } = emiData;
  let rate = interest / 12 / 100;
  let dur = tenure * 12;

  React.useMemo(() => {
    let emi =
      parseInt(amount) *
      (parseInt(interest) / 12 / 100) *
      (Math.pow(1 + rate, dur) / (Math.pow(1 + rate, dur) - 1));
    setLoanData({
      emi: isNaN(emi) ? 0 : emi,
      interest: isNaN(amount - emi * dur) ? 0 : amount - emi * dur,
      total: isNaN(emi + amount) ? 0 : emi + amount,
    });
    console.log(loanData.interest, loanData.total);
  }, [emiData]);

  return (
    <div className="frame">
      <div className="col50">
        <Fragment>
          <label>Monthly EMI</label>
          <p>
            <span>Rs. </span>
            {Math.round(loanData.emi)
              .toFixed(2)
              .replace(/(\d)(?=(\d{2})+\d\.)/g, "$1,")}
          </p>
        </Fragment>
        <Fragment>
          <label>Total Interest payable</label>
          <p>
            Rs.
            {Math.abs(Math.round(loanData.interest))
              .toFixed(2)
              .replace(/(\d)(?=(\d{2})+\d\.)/g, "$1,")}
          </p>
        </Fragment>
        <Fragment>
          <label>Total amount</label>
          <p>
            Rs.{" "}
            {(Math.abs(Math.round(loanData.interest)) + amount)
              .toFixed(2)
              .replace(/(\d)(?=(\d{2})+\d\.)/g, "$1,")}
          </p>
        </Fragment>
      </div>
      <div className="col50">
        <EmiChart
          interest={Math.abs(Math.round(loanData.interest))}
          principal={amount}
        />
      </div>
    </div>
  );
};

export default EmiDetail;
