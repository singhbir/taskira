import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styled from "styled-components";
import Typist from "react-typist";

const HeadText = styled.h3`
  font-family: "Poppins", sans-serif;
  font-size: 60px;
  text-align: center;
  transition: all ease-in-out;
`;

const StyledSpan = styled.span`
  font-family: "Poppins", sans-serif;
  text-align: center;
`;

const CenterArea = styled.div`
  height: 600px;
  width: 600px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &:hover {
    border: 1px solid white;
    background-color: black;
    color: white;
  }
`;

const HomePage = () => {
  return (
    <div>
      <div className="mt-5">
        <Navbar />
      </div>
      <div className="flex justify-center items-center m-10">
        <CenterArea>
          <Typist cursor={{ show: false }}>
            <HeadText style={{ float: "left" }}>Taskira</HeadText>
            <HeadText> = </HeadText>
            <HeadText>Jira</HeadText>
            <HeadText> + </HeadText>
            <HeadText>Trello</HeadText>
          </Typist>
          <div className="pt-3">
            <Typist>
              <StyledSpan>Managing Individual Projects with Ease</StyledSpan>
            </Typist>
          </div>
        </CenterArea>
      </div>
      {/* <div>
                <StyledImage src="https://camo.githubusercontent.com/5c09d63c3f8efdcefbafda9f2ff7aaf54604e1de715e8b6bd5496036bcb7af2e/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f72656163742d7472656c6c6f2f626f6172645f73637265656e2e706e67" alt="image"/>
            </div> */}
    </div>
  );
};

export default HomePage;
