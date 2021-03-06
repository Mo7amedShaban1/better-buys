import React, { useState } from "react";
import { Container } from "@material-ui/core";
import { connect } from "react-redux";

import { signUpWithEmailAndPassword } from "../../redux/user/user.actions";

import Button from "../../components/button/button.component";
import FormInput from "../../components/form-input/form-input.component";
import { SignInContainer, SignInTitle } from "../signin/sign-in-styles";

const SignUp = ({ signUpWithEmailAndPassword }) => {
   const [inputValues, setInputValues] = useState({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
   });

   const { password, confirmPassword } = inputValues;

   const handleChange = e => {
      var { value, name } = e.target;
      setInputValues({ ...inputValues, [name]: value });
   };

   const handleSubmit = e => {
      e.preventDefault();
      if (password !== confirmPassword) {
         console.log("Password doesn't match");
         return;
      }
      signUpWithEmailAndPassword(inputValues);
   };

   return (
      <Container>
         <SignInContainer>
            <SignInTitle>I don't have an account</SignInTitle>
            <span>Register a new account</span>
            <form className="form" onSubmit={handleSubmit}>
               <FormInput
                  type="text"
                  name="displayName"
                  value={inputValues.displayName}
                  onChange={handleChange}
                  label="Name"
                  required
               />
               <FormInput
                  type="email"
                  name="email"
                  value={inputValues.email}
                  onChange={handleChange}
                  label="Email"
                  required
               />
               <FormInput
                  type="password"
                  name="password"
                  value={inputValues.password}
                  onChange={handleChange}
                  label="Password"
                  required
               />
               <FormInput
                  type="password"
                  name="confirmPassword"
                  value={inputValues.confirmPassword}
                  onChange={handleChange}
                  label="Confirm Password"
                  required
               />
               <Button inverted full>
                  Sign Up
               </Button>
            </form>
         </SignInContainer>
      </Container>
   );
};

const mapDispatchToProps = dispatch => ({
   signUpWithEmailAndPassword: payload =>
      dispatch(signUpWithEmailAndPassword(payload))
});

export default connect(
   null,
   mapDispatchToProps
)(SignUp);
