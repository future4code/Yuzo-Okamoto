import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { darken, Grid, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "90vh",
    paddingBottom: "10vh",
  },
  heroText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingTop: "20vh",
    paddingLeft: "5vw",
  },
  title: {
    fontWeight: 900,
  },
  subtitle: {
    fontWeight: 600,
    marginTop: 8,
  },
  heroImage: {
    paddingRight: "5vw",
    paddingTop: "8vh",
  },
  myHero: {
    background: "#0077B6",
    height: "100%",
    width: "100%",
  },
}));

const EnrollActionButton = styled.button`
  ${({ theme }) => `
  margin-top: 16px;
  padding: ${theme.spacing(1, 2)};
  border: 1px solid;
  cursor: pointer;
  outline: 0;
  border-radius: ${theme.shape.borderRadius}px;
  color: ${theme.myPalette.darkText};
  font-weight: 900;
  text-transform: uppercase;
  background-color: ${theme.myPalette.primary};
  border-color: ${theme.myPalette.primary};
  transition: ${theme.transitions.create(["background-color", "box-shadow"])};
  &:hover {
    background-color: ${darken(theme.myPalette.primary, 0.1)};
    border-color: ${darken(theme.myPalette.primary, 0.2)};
  }
  font-size: 18px;
  ${theme.breakpoints.up("md")} {
    font-size: 16px;
  }`}
`;

const HomePage = () => {
  const history = useHistory();
  const classes = useStyles();

  const enrollAction = () => {
    history.push("/trips");
  };

  return (
    <Grid item container xs={12} className={classes.root}>
      <Grid item xs={12} md={6} className={classes.heroText}>
        <Typography variant="h4" className={classes.title}>
          The Best Space Travel Agency
          <br /> of The Modern Age
        </Typography>
        <Typography variant="h5" className={classes.subtitle}>
          No burocracy, just click and enroll
          <br />
          Check out our available trips
        </Typography>
        <EnrollActionButton onClick={enrollAction}>
          I want to enroll
        </EnrollActionButton>
      </Grid>
      <Grid item xs={12} md={6} className={classes.heroImage}>
        <Box className={classes.myHero} />
      </Grid>
    </Grid>
  );
};
export default HomePage;
