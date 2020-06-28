import React from "react";
import { Grid, Grow } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

const LoadingPage = () => (
  <Grid item container xs={12}>
    <Grow in={true} timeout={800}>
      <CircularProgress />
    </Grow>
  </Grid>
);

export default LoadingPage;
