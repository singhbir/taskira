import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styled from "styled-components";
const StyledImage = styled.img`
  height: 50%;
  width: 50%;
`;

const HomePage = () => {
  return (
    <div>
      <div className="mt-5">
        <Navbar />
      </div>
      {/* <div>
                <StyledImage src="https://camo.githubusercontent.com/5c09d63c3f8efdcefbafda9f2ff7aaf54604e1de715e8b6bd5496036bcb7af2e/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f72656163742d7472656c6c6f2f626f6172645f73637265656e2e706e67" alt="image"/>
            </div> */}
    </div>
  );
};

export default HomePage;
