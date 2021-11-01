import React from "react";
import styled from "styled-components";

interface BadgeProps {
  message: string;
}

const StyledMessage = styled.div`
  padding: 5px 15px;
  background-color: #f8d7da;
  color: #932079;
`;

const index: React.FC<BadgeProps> = ({ message }) => {
  return <StyledMessage className="mt-2 mb-2">{message}</StyledMessage>;
};

export default index;
