import React, { Fragment, useState } from "react";
import Header from "./Header";
import LoanForm from "./LoanForm";
import EmiDetail from "./EmiDetail";

const Wrapper = () => {
  const [type, setType] = useState("home");
  const [emiDataWrap, setEmiDataWrap] = useState({
    amount: 200000,
    interest: 10,
    tenure: 3,
  });
  return (
    <div className="wrapper">
      <Header
        setType={(type) => {
          setType(type);
        }}
      />
      <div className="container">
        <LoanForm
          type={type}
          setEmiDataWrap={(value) => {
            setEmiDataWrap(value);
            console.log(emiDataWrap);
          }}
        />
        <EmiDetail emiData={emiDataWrap} />
      </div>
    </div>
  );
};

export default Wrapper;
