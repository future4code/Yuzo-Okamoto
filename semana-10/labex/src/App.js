import React from "react";
import Routes from "./routes.js";

import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Header } from "./components";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  wrapper: {
    width: "100%",
    height: "100%",
    maxWidth: 1300,
    margin: "0 auto",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Grid container>
        <Grid item container xs={12} className={classes.wrapper}>
          <Header />
          <Routes />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default App;
