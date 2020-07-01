import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Grid,
  Typography,
  Card,
  Paper,
  CardContent,
  Grow,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "90vh",
    paddingBottom: "10vh",
    overflow: "auto",
    "&::-webkit-scrollbar": {
      width: "0.4em",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.1)",
      outline: "1px solid slategrey",
    },
  },
  gridTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 80,
  },
  gridTitleText: {
    fontSize: 24,
    fontWeight: 600,
  },
  cardWrapper: {
    cursor: "pointer",
    transition: "transform 0.5s ease-in-out",
    "&:hover": {
      transform: "translateY(-10px)",
    },
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.5s ease-in-out",
    "&:hover": {
      transform: "translateY(-10px)",
    },
  },
  cardImage: {
    width: 150,
    height: 150,
    borderRadius: "50%",
    backgroundColor: "#225251",
    marginBottom: 16,
  },
  cardTitle: {
    fontWeight: 900,
  },
  cardPlanet: {
    fontWeight: 600,
  },
  cardDate: {},
  cardDays: { fontWeight: 600 },
}));

const TripListPage = () => {
  const [trips, setTrips] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://us-central1-labenu-apis.cloudfunctions.net/labeX/yuzo/trips"
        );
        setTrips(response.data.trips);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item container xs={12} className={classes.root}>
        <Grow in={trips ? true : false} timeout={2000}>
          <Grid item xs={12} className={classes.gridTitle}>
            <Typography variant="h6" className={classes.gridTitleText}>
              All Available Trips
            </Typography>
          </Grid>
        </Grow>
        <Grid item container xs={12} spacing={3}>
          {trips &&
            trips.map((trip) => (
              <Grow in={trips ? true : false} timeout={1000} key={trip.id}>
                <Grid item xs={12} md={4} key={trip.id}>
                  <Paper
                    component={Link}
                    to={`/trips/${trip.id}`}
                    className={classes.cardWrapper}
                  >
                    <Card>
                      <CardContent className={classes.cardContent}>
                        <div className={classes.cardImage} />
                        <Typography className={classes.cardTitle}>
                          {trip.name}
                        </Typography>
                        <Typography className={classes.cardPlanet}>
                          {trip.planet}
                        </Typography>
                        <Typography className={classes.cardDate}>
                          {trip.date}
                        </Typography>
                        <Typography className={classes.cardDays}>
                          {`${trip.durationInDays} dias`}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Paper>
                </Grid>
              </Grow>
            ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
export default TripListPage;
