import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Fragment>
      <div className="navbar">
        <h1>
          <i className="fa fa-calculator"></i> EMI Calculator
        </h1>
      </div>
    </Fragment>
  );
};

export default Navbar;
