import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Styledheading = styled.h3`
  /* font-family: "Roboto", "sans-serif"; */
  font-family: "Poppins", sans-serif;
  font-size: 30px;
  padding: 0px 30px;
`;

const StyledButton = styled.button`
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  border: 1px solid black;
  padding: 10px;
  border-radius: 1px;
  transition: 0.5s ease-in-out;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const Navbar = () => {
  return (
    <div style={{ width: "100%" }}>
      <div className="flex justify-evenly items-center ">
        <div>
          <Styledheading>Taskira</Styledheading>
        </div>
        <div className="flex justify-between" style={{ width: "12%" }}>
          <StyledButton>Login</StyledButton>
          <StyledButton>Signup</StyledButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
