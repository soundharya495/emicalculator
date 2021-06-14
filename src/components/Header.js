import React from "react";

const Header = ({ setType }) => {
  return (
    <div>
      <div className="menu">
        <a
          href="#"
          onClick={() => {
            setType("home");
          }}
        >
          Home Loan
        </a>
        <a
          href="#"
          onClick={() => {
            setType("personal");
          }}
        >
          Personal Loan
        </a>
        <a
          href="#"
          onClick={() => {
            setType("car");
          }}
        >
          Car Loan
        </a>
        <a
          href="#"
          onClick={() => {
            setType("general");
          }}
        >
          General Loan
        </a>
      </div>
    </div>
  );
};

export default Header;
