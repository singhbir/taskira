import React from "react";
import styled from "styled-components";

interface ButtonProps {
  style?: any;
  className?: string;
  children: React.ReactChild;
}

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

const PrimaryButton: React.FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ style, className = "", children, ...props }) => {
  return (
    <div>
      <StyledButton style={style} className={className} {...props}>
        {children}
      </StyledButton>
    </div>
  );
};

export default PrimaryButton;
