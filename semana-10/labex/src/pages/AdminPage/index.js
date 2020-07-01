import React, { useState, useEffect } from "react";
import axios from "axios";
import api from "../../api";
import {
  Grid,
  Grow,
  Typography,
  Paper,
  Card,
  CardHeader,
  CardContent,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Modal,
  Box,
  Fade,
  Button,
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
  menuHeader: {
    border: "1px solid black",
    margin: "16px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cardGrid: {
    overflow: "auto",
  },
  panelTitle: {
    backgroundColor: "#cccccc",
  },
  candidatePaper: {
    cursor: "pointer",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  modalPaper: {
    backgroundColor: "#ffffff",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: 0,
  },
  modalText: {
    fontWeight: 900,
    fontSize: 22,
    padding: "16px 0",
  },
  modalPrimaryButton: {
    backgroundColor: "#22e3d6",
    width: 120,
    fontWeight: 600,
    "&:hover": {
      backgroundColor: "#7dfff6",
    },
  },
  modalSecundaryButton: {
    backgroundColor: "#ff2e3f",
    marginLeft: 8,
    width: 120,
    fontWeight: 600,
    "&:hover": {
      backgroundColor: "#f75461",
    },
  },
}));

const AdminPage = () => {
  const classes = useStyles();
  const [trips, setTrips] = useState([]);
  const [candidates, setCandidates] = useState({
    candidates: [],
    approved: [],
  });
  const [active, setActive] = useState([]);
  const [open, setOpen] = useState(false);
  const token = JSON.parse(window.sessionStorage.getItem("token"));
  const headers = {
    headers: {
      auth: token,
    },
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get("/trips");
        setTrips(data.trips);
      } catch (error) {
        console.debug("AdminPage", error);
      }
    })();
  }, [setTrips]);

  const handleExpansion = async (id) => {
    try {
      const { data } = await axios.get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/yuzo/trip/${id}`,
        headers
      );
      setCandidates({
        candidates: data.trip.candidates,
        approved: data.trip.approved,
      });
    } catch (error) {
      console.debug("AdminPage", error);
    }
  };

  const handleEvaluation = async (trip, candidate, evaluation) => {
    try {
      await axios.put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/yuzo/trips/${trip}/candidates/${candidate}/decide`,
        {
          approve: evaluation,
        },
        headers
      );
      setOpen(false);
    } catch (error) {
      console.debug("AdminPage", error);
    }
  };

  const handleOpen = (trip, candidate) => {
    setOpen(true);
    setActive([trip, candidate]);
  };

  const handleClose = () => {
    setOpen(false);
    setActive([]);
  };

  return (
    <Grid item container xs={12} className={classes.root}>
      <Grow in={true} timeout={1500}>
        <Grid item container xs={12}>
          <Grid item xs={12} className={classes.menuHeader}>
            <Typography variant="h5">Manage Trips</Typography>
          </Grid>
          <Grid item container xs={12} spacing={3}>
            {trips.length &&
              trips.map((trip) => (
                <Grid item xs={12} key={trip.id}>
                  <Paper>
                    <Card>
                      <CardHeader title={trip.name} />
                      <CardContent>
                        <Typography>ID: {trip.id}</Typography>
                        <Typography>Description: {trip.description}</Typography>
                        <Typography>Planet: {trip.planet}</Typography>
                        <Typography>
                          Duration: {trip.durationInDays} days
                        </Typography>
                        <Typography>Date: {trip.date}</Typography>
                        <ExpansionPanel
                          onClick={() => handleExpansion(trip.id)}
                        >
                          <ExpansionPanelSummary className={classes.panelTitle}>
                            <Typography>Manage Candidates</Typography>
                          </ExpansionPanelSummary>
                          <ExpansionPanelDetails>
                            <Grid container spacing={3}>
                              {candidates.candidates &&
                                candidates.candidates.map((candidate) => {
                                  return (
                                    <Grow
                                      in={true}
                                      timeout={2000}
                                      key={candidate.id}
                                    >
                                      <Grid item xs={12}>
                                        <Paper
                                          className={classes.candidatePaper}
                                          onClick={() =>
                                            handleOpen(trip.id, candidate.id)
                                          }
                                        >
                                          <Typography>
                                            {candidate.id}
                                          </Typography>
                                          <Typography>
                                            {candidate.name}
                                          </Typography>
                                          <Typography>
                                            {candidate.country}
                                          </Typography>
                                          <Typography>
                                            {candidate.age}
                                          </Typography>
                                          <Typography>
                                            {candidate.profession}
                                          </Typography>
                                          <Typography>
                                            {candidate.applicationText}
                                          </Typography>
                                        </Paper>
                                      </Grid>
                                    </Grow>
                                  );
                                })}
                            </Grid>
                          </ExpansionPanelDetails>
                        </ExpansionPanel>
                      </CardContent>
                    </Card>
                  </Paper>
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grow>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        className={classes.modal}
      >
        <Fade in={open}>
          <Paper className={classes.modalPaper}>
            {active && (
              <Box>
                <Typography className={classes.modalText}>
                  Enrollment
                </Typography>
                <Button
                  className={classes.modalPrimaryButton}
                  onClick={() => handleEvaluation(active[0], active[1], true)}
                >
                  Approve
                </Button>
                <Button
                  className={classes.modalSecundaryButton}
                  onClick={() => handleEvaluation(active[0], active[1], false)}
                >
                  Disapprove
                </Button>
              </Box>
            )}
          </Paper>
        </Fade>
      </Modal>
    </Grid>
  );
};
export default AdminPage;
