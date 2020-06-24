import React from "react";
import { Link } from "react-router-dom";

import { Grid, Typography, MenuItem } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  nav: {
    color: theme.myPalette.normalText,
    fontWeight: 600,
    height: "10vh",
    padding: theme.spacing(0, 4),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "spacebetween",
  },
  logo: {
    color: theme.myPalette.darkText,
    textDecoration: "none",
    fontSize: 24,
    fontWeight: 600,
    letterSpacing: "2px",
    fontFamily: '"Krona One", sans-serif',
    fontStyle: "italic",
  },
  navList: {},
  navItem: {
    fontSize: 18,
    fontWeight: 900,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Grid item container xs={12} className={classes.nav}>
      <Grid item xs={3} sm={4}>
        <Typography component={Link} to={"/"} className={classes.logo}>
          Labe<span style={{ fontSize: 30 }}>X</span>
        </Typography>
      </Grid>

      <Grid item xs={false} sm={3} />

      <Grid
        item
        container
        spacing={2}
        xs={9}
        sm={5}
        className={classes.navList}
      >
        <Grid item xs={3}>
          <MenuItem component={Link} to={"/"} className={classes.navItem}>
            home
          </MenuItem>
        </Grid>
        <Grid item xs={3}>
          <MenuItem component={Link} to={"/about"} className={classes.navItem}>
            about
          </MenuItem>
        </Grid>
        <Grid item xs={3}>
          <MenuItem component={Link} to={"/trips"} className={classes.navItem}>
            trips
          </MenuItem>
        </Grid>
        <Grid item xs={3}>
          <MenuItem component={Link} to={"/login"} className={classes.navItem}>
            login
          </MenuItem>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
