import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Context } from "./context";
import { LoadingPage } from "./pages";

import {
  HomePage,
  AboutPage,
  TripListPage,
  TripDetailsPage,
  LoginPage,
  AdminPage,
  NotFoundPage,
} from "./pages";

const CustomRoute = ({ isPrivate, ...rest }) => {
  const { authenticated, loading } = useContext(Context);
  if (loading) {
    return <LoadingPage />;
  }
  if (isPrivate && !authenticated) {
    return <Redirect to="/login" />;
  }
  return <Route {...rest} />;
};

const Routes = () => {
  return (
    <Switch>
      <CustomRoute path="/" exact component={HomePage} />
      <CustomRoute path="/about" exact component={AboutPage} />
      <CustomRoute path="/trips" exact component={TripListPage} />
      <CustomRoute path="/trips/:id" exact component={TripDetailsPage} />
      <CustomRoute path="/login" exact component={LoginPage} />
      <CustomRoute isPrivate path="/admin" exact component={AdminPage} />
      <CustomRoute path="*" component={NotFoundPage} />
    </Switch>
  );
};

export default Routes;
