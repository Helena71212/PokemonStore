import useFetching from "../../../hook/useFetch";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../../hook/useForm";
import { signUp } from "../api/api";
import SignUp from "../components/SignUpComponents";
import { useCallback, useEffect } from "react";
import { ROUTE_NAMES } from "../../../router/routeNames";

const SignUpContainer = () => {
  const [formValues, handleFormChange, handleFormReset] = useForm({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    gender: "",
    phone: "",
  });

  const navigate = useNavigate();
  const { data, handleDataLoad, error } = useFetching(
    signUp,
    null,
    false
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      handleDataLoad(formValues);
      handleFormReset();
    },
    [formValues]
  );
  const handleSignIn = useCallback(() => {
      navigate(ROUTE_NAMES.SIGN_IN);
  }, []);


  const handleCreate = useCallback(() => {
    if (data?.data.success) {
      navigate(ROUTE_NAMES.SIGN_IN);
    }
  }, [data]);

  return (
    <SignUp
      data={data}
      error={error}
      formValues={formValues}
      handleSubmit={handleSubmit}
      handleFormChange={handleFormChange}
      handleFormReset={handleFormReset}
      handleCreate={handleCreate}
      handleSignIn={handleSignIn}
    />
  );
};

export default SignUpContainer;
