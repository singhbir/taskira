import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PrimaryButton from "../PrimaryButton";

const Styledheading = styled.h3`
  /* font-family: "Roboto", "sans-serif"; */
  font-family: "Poppins", sans-serif;
  font-size: 30px;
  padding: 0px 30px;
`;

const Navbar = () => {
  return (
    <div style={{ width: "100%" }} className="mt-5">
      <div className="flex justify-evenly items-center ">
        <div>
          <Styledheading>Taskira</Styledheading>
        </div>
        <div className="flex justify-between" style={{ width: "12%" }}>
          <Link to="/login" style={{ color: "black" }}>
            {" "}
            <PrimaryButton>Login</PrimaryButton>
          </Link>
          <Link to="/signup" style={{ color: "black" }}>
            {" "}
            <PrimaryButton>Sign Up</PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
