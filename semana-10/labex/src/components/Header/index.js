import React from "react";
import { Link } from "react-router-dom";

import { AppBar, Toolbar, Typography, MenuItem, Box } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  navSize: {
    height: "8vh",
    display: "flex",
    alignItems: "space-between",
    justifyContent: "center",
  },
  logo: {
    color: "white",
    textDecoration: "none",
    fontSize: 24,
    letterSpacing: "1px",
    fontFamily: '"Sriracha", cursive',
  },
  flexRowSpaced: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  marginRight: {
    marginRight: theme.spacing(2),
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.navSize}>
      <Toolbar className={`${classes.flexRowSpaced} ${classes.navSize}`}>
        <Typography component={Link} to={"/"} className={classes.logo}>
          LabeX
        </Typography>

        <Box className={classes.flexRowSpaced}>
          <MenuItem component={Link} to={"/"} className={classes.marginRight}>
            home
          </MenuItem>
          <MenuItem
            component={Link}
            to={"/about"}
            className={classes.marginRight}
          >
            about
          </MenuItem>
          <MenuItem
            component={Link}
            to={"/trips"}
            className={classes.marginRight}
          >
            trips
          </MenuItem>
          <MenuItem component={Link} to={"/login"}>
            login
          </MenuItem>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
