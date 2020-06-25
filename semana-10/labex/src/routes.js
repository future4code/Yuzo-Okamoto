import React from "react";
import { Switch, Route } from "react-router-dom";

import {
  HomePage,
  AboutPage,
  TripListPage,
  TripDetailsPage,
  LoginPage,
  AdminPage,
  NotFoundPage,
} from "./pages";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/about" exact component={AboutPage} />
      <Route path="/trips" exact component={TripListPage} />
      <Route path="/trips/:id" exact component={TripDetailsPage} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/admin" exact component={AdminPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
};

export default Routes;
