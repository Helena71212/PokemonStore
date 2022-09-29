import { Routes, Route } from "react-router-dom";
import Header from "../pages/header";
import HomeContainer from "../pages/homePage/container/HomeContainer";
import AuthContainer from "../pages/signIn/container/SignInContainer";
import SignUpContainer from "../pages/signUp/container/SignUpContainer";

import { ROUTE_NAMES } from "./routeNames";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME} element={<HomeContainer />} />
      <Route path={ROUTE_NAMES.SIGN_IN} element={<AuthContainer />} />
      <Route path={ROUTE_NAMES.SIGN_UP} element={<SignUpContainer />} />
    </Routes>
  );
};
export default Router;
