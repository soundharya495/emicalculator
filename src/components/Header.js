import React from "react";

const Header = ({ setType }) => {
  return (
    <div>
      <div className="menu">
        <button
          onClick={() => {
            setType("home");
          }}
        >
          Home Loan
        </button>
        <button
          onClick={() => {
            setType("personal");
          }}
        >
          Personal Loan
        </button>
        <button
          onClick={() => {
            setType("car");
          }}
        >
          Car Loan
        </button>
        <button
          onClick={() => {
            setType("general");
          }}
        >
          General Loan
        </button>
      </div>
    </div>
  );
};

export default Header;
