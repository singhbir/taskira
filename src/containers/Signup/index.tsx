import Navbar from "components/Navbar/Navbar";
import PrimaryButton from "components/PrimaryButton";
import React from "react";
import styled from "styled-components";
import { HeadText, StyledSpan } from "styles/typography";
import { validateEmail } from "utils/helperMethods";
import AlertBadge from "components/AlertBadge";
import { auth } from "firebaseconfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router";

const CenterArea = styled.div`
  height: 650px;
  width: 650px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SignUp = () => {
  const [error, setError] = React.useState("");
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    cpassword: "",
  });
  const history = useHistory();

  const fields = [
    { title: "Email", type: "email", name: "email" },
    { title: "Password", type: "password", name: "password" },
    { title: "Confirm Password", type: "password", name: "cpassword" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (email: string, password: string) => {
    try {
      const data = await createUserWithEmailAndPassword(auth, email, password);
      const user = data.user;
      console.log("USER ", data);
      history.push("/");
    } catch (e) {
      console.log("ERROR", e);
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (validateEmail(values.email)) {
      if (values.password === values.cpassword) {
        setError("");
        const { email, password } = values;
        handleSignUp(email, password);
      } else {
        setError("Passwords Doesn't Match , Please Check Again");
      }
    } else {
      setError("Please Input the Valid Email");
    }
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="m-10 flex justify-center align-items-center">
        <CenterArea>
          <HeadText>SIGN UP</HeadText>
          {error && <AlertBadge message={error} />}
          {fields.map((item) => {
            return (
              <div className="flex flex-col justify-evenly m-3">
                <StyledSpan style={{ alignSelf: "flex-start" }}>
                  {item.title}
                </StyledSpan>
                <input
                  name={item.name}
                  type={item.type}
                  style={{
                    border: "1px solid black",
                    borderRadius: "5px",
                    padding: "10px ",
                  }}
                  onChange={handleChange}
                />
              </div>
            );
          })}
          <PrimaryButton className="mt-3" onClick={(e) => handleSubmit(e)}>
            Submit
          </PrimaryButton>
        </CenterArea>
      </div>
    </div>
  );
};

export default SignUp;
