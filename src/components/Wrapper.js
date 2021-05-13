import React, { Fragment, useState } from "react";
import LoanForm from "./LoanForm";

const Wrapper = () => {
  const [type, setType] = useState("home");
  return (
    <div className="wrapper">
      <div className="menu">
        <a
          onClick={() => {
            setType("home");
          }}
        >
          Home Loan
        </a>
        <a
          onClick={() => {
            setType("personal");
          }}
        >
          Personal Loan
        </a>
        <a
          onClick={() => {
            setType("car");
          }}
        >
          Car Loan
        </a>
        <a
          onClick={() => {
            setType("general");
          }}
        >
          General Loan
        </a>
      </div>
      <div className="container">
        <LoanForm type={type} />
      </div>
    </div>
  );
};

export default Wrapper;
