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
      <Route path="/trips" component={TripListPage} />
      <Route path="/trips/:id" component={TripDetailsPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/admin" component={AdminPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
};

export default Routes;
