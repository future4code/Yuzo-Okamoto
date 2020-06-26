import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "../../hooks";
import axios from "axios";
import styled from "styled-components";
import {
  Grid,
  darken,
  Typography,
  Box,
  IconButton,
  Modal,
  Fade,
  Backdrop,
  TextField,
  Divider,
  Button,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "20vh",
  },
  navigationButton: {
    justifySelf: "flex-start",
    position: "absolute",
    left: "35%",
  },
  navigationIcon: {
    color: theme.myPalette.normalText,
  },
  gridTitleText: {
    fontSize: 24,
    fontWeight: 600,
    color: theme.myPalette.normalText,
    "&:first-child": {
      fontWeight: 900,
      marginBottom: 8,
      color: theme.myPalette.darkText,
    },
  },
  gridTrip: {
    height: "70%",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  textBox: {
    padding: 16,
    maxWidth: 500,
  },
  boxTitle: {
    fontSize: 22,
    fontWeight: 900,
    color: theme.myPalette.darkText,
  },
  boxText: {
    fontSize: 20,
    fontWeight: 600,
    color: theme.myPalette.darkText,
  },
  boxTextDays: {
    fontSize: 16,
    textAlign: "right",
    fontStyle: "italic",
    margin: "8px 0",
  },
  imageBox: {
    padding: "16px 24px",
  },
  tripImage: {
    width: 200,
    height: 200,
    borderRadius: "5px",
    backgroundColor: "#225251",
    marginBottom: 16,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalPaper: {
    backgroundColor: "#ffffff",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: 0,
  },
  form: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  formTitle: {
    fontSize: 20,
    fontWeight: 600,
    color: theme.myPalette.darkText,
  },
  formDivider: {
    margin: "8px 0",
  },
  formApplication: {
    width: "100%",
  },
  formButton: {
    fontWeight: 600,
    backgroundColor: theme.myPalette.primary,
    marginLeft: "auto",
  },
  input: {
    "&:invalid": {
      border: "1px solid red",
    },
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

const DisabledButton = styled.button`
  ${({ theme }) => `
  margin-top: 16px;
  padding: ${theme.spacing(1, 2)};
  cursor: default;
  border: 2px solid ${theme.myPalette.normalText};
  border-radius: ${theme.shape.borderRadius}px;
  color: ${theme.myPalette.normalText};
  font-weight: 900;
  text-transform: uppercase;
  background: none;
`}
`;

const TripDetailsPage = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { form, onChange } = useForm({
    name: "",
    age: "",
    profession: "",
    applicationText: "",
    country: "Brazil", // To correct, Autocomplete + React-Material-UI-Form-Validator
  });

  const [trips, setTrips] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  const [countries, setCountries] = useState([]);
  const [enrolledTrips, setEnrolledTrips] = useState({});

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
    (async () => {
      try {
        const response = await axios.get(
          "https://restcountries.eu/rest/v2/all"
        );
        setCountries(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
    window.sessionStorage.getItem("enrolledTrips") &&
      setEnrolledTrips(
        JSON.parse(window.sessionStorage.getItem("enrolledTrips"))
      );
  }, []);

  const returnAction = () => {
    history.push("/trips");
  };

  const handleOpenForm = () => {
    setOpenForm(!openForm);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  const submitEnrollment = async (tripId) => {
    const body = { ...form };
    body.age = Number(body.age);
    try {
      await axios.post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/yuzo/trips/${tripId}/apply`,
        body
      );
      window.sessionStorage.setItem(
        "enrolledTrips",
        JSON.stringify({ ...enrolledTrips, [tripId]: true })
      );
      setEnrolledTrips({ ...enrolledTrips, [tripId]: true });
      handleOpenForm();
    } catch (error) {
      alert("Erro");
      console.log(error);
    }
  };

  return (
    <>
      {trips &&
        trips
          .filter((trip) => trip.id === props.match.params.id)
          .map((trip) => {
            return (
              <Grid
                item
                container
                xs={12}
                className={classes.root}
                key={trip.id}
              >
                <Grid item xs={12} className={classes.gridTitle}>
                  <IconButton
                    onClick={returnAction}
                    className={classes.navigationButton}
                  >
                    <ArrowBackIcon className={classes.navigationIcon} />
                  </IconButton>
                  <Box>
                    <Typography className={classes.gridTitleText}>
                      {trip.planet}
                    </Typography>
                    <Typography className={classes.gridTitleText}>
                      {trip.date}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} className={classes.gridTrip}>
                  <Box className={classes.textBox}>
                    <Typography className={classes.boxTitle}>
                      {trip.name}
                    </Typography>
                    <Typography className={classes.boxText}>
                      {trip.description}
                    </Typography>
                    <Typography
                      className={`${classes.boxText} ${classes.boxTextDays}`}
                    >
                      {`${trip.durationInDays} dias`}
                    </Typography>
                    {enrolledTrips.hasOwnProperty(trip.id) ? (
                      <DisabledButton type="button" disabled>
                        You have enrolled
                      </DisabledButton>
                    ) : (
                      <EnrollActionButton
                        type="button"
                        onClick={handleOpenForm}
                      >
                        I want to enroll
                      </EnrollActionButton>
                    )}
                  </Box>
                  <Box className={classes.imageBox}>
                    <div className={classes.tripImage}></div>
                  </Box>
                </Grid>

                <Modal
                  className={classes.modal}
                  open={openForm}
                  onClose={handleOpenForm}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={openForm}>
                    <div className={classes.modalPaper}>
                      <Typography className={classes.formTitle}>
                        {trip.name}
                      </Typography>
                      <Divider className={classes.formDivider} />
                      <ValidatorForm
                        useref="form"
                        className={classes.form}
                        onSubmit={() => {
                          submitEnrollment(trip.id);
                        }}
                      >
                        <TextValidator
                          autoComplete="off"
                          label="Name"
                          variant="outlined"
                          name="name"
                          validators={[
                            "required",
                            "matchRegexp:^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{3,}$",
                          ]}
                          errorMessages={[
                            "This field is required",
                            "Mininum of 3 letters",
                          ]}
                          onChange={handleInputChange}
                          value={form.name}
                        />
                        <TextValidator
                          autoComplete="off"
                          label="Age"
                          variant="outlined"
                          name="age"
                          onChange={handleInputChange}
                          value={form.age}
                          type="number"
                          validators={[
                            "required",
                            "minNumber:18",
                            "maxNumber:150",
                          ]}
                          errorMessages={[
                            "This field is required",
                            "Mininum of 18 years old",
                            "Maximum of 150 years old",
                          ]}
                        />
                        <TextValidator
                          autoComplete="off"
                          label="Profession"
                          variant="outlined"
                          name="profession"
                          onChange={handleInputChange}
                          value={form.profession}
                          validators={[
                            "required",
                            "matchRegexp:^[a-zA-Z]{3,30}$",
                          ]}
                          errorMessages={[
                            "This field is required",
                            "Must have between 3 and 30 letters",
                          ]}
                        />
                        {countries ? (
                          <Autocomplete
                            name="country"
                            options={countries}
                            onChange={(event, value) => {
                              onChange("country", value.name);
                            }}
                            getOptionLabel={(country) => country.name}
                            renderInput={(params) => (
                              <TextValidator
                                {...params}
                                label="Country"
                                variant="outlined"
                              />
                            )}
                          />
                        ) : (
                          <TextValidator label="Country" variant="outlined" />
                        )}
                        {/* prettier-ignore */}
                        <TextValidator
                          autoComplete="off"
                          label="Application Text"
                          variant="outlined"
                          size="medium"
                          fullWidth
                          InputLabelProps={{
                            shrink: true,
                          }}
                          className={classes.formApplication}
                          name="applicationText"
                          onChange={handleInputChange}
                          value={form.applicationText}
                          validators={[
                            "required",
                            "matchRegexp:^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ,.-:]{30,100}$",
                          ]}
                          errorMessages={[
                            "This field is required",
                            "Must have between 30 and 100 characters",
                          ]}
                        />
                        <EnrollActionButton type="submit">
                          Send Application
                        </EnrollActionButton>
                      </ValidatorForm>
                    </div>
                  </Fade>
                </Modal>
              </Grid>
            );
          })}
    </>
  );
};
export default TripDetailsPage;
