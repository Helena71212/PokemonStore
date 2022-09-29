import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../../hook/useForm";
import { ROUTE_NAMES } from "../../../router/routeNames";
import SignIn from "../components/SignInComponents";

import { signIn } from "../reducers";

const AuthContainer = () => {
  const dispatch = useDispatch();
  const [signInForm, handleFormChange, handleFormReset] = useForm({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      dispatch(signIn(signInForm));

      handleFormReset();
    },
    [dispatch, signInForm, handleFormReset]
  );

  const handleSignUp = useCallback(() => {
    
      navigate(ROUTE_NAMES.SIGN_UP);
    
  }, []);

  // useEffect(() => {
  //   if (localStorage.accessToken) {
  //     const timeout = setTimeout(() => {
  //       navigate(ROUTE_NAMES.HOME);
  //     }, 3000);
  //     return () => clearTimeout(timeout);
  //   }
  // }, [navigate]);

  return (
    <SignIn
      signInForm={signInForm}
      handleSubmit={handleSubmit}
      handleFormChange={handleFormChange}
      handleSignUp={handleSignUp}
    />
  );
};

export default AuthContainer;
