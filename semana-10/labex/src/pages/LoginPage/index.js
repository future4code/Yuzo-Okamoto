import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Grid, Box, Grow, TextField, Button, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "../../hooks";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "65vh",
    width: "25vw",
    marginTop: "10vh",
  },
  loginWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  profileWrapper: {
    margin: "0",
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: "50%",
    backgroundColor: "lightgrey",
  },
  loginForm: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "16px",
    justifyContent: "center",
  },
  username: {
    margin: "4px",
  },
  password: {
    margin: "4px",
  },
  loginButton: {
    margin: "16px",
    backgroundColor: theme.myPalette.primary,
    "&:hover": {
      backgroundColor: "#7ae9ff",
    },
  },
}));

const LoginPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const { form, onChange } = useForm({
    username: "admin",
    password: "admin123",
  });

  const formHandler = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  const handleLogin = () => {
    (async () => {
      const body = {
        email: "astrodev@gmail.com.br",
        password: "123456",
      };

      try {
        const response = await axios.post(
          "https://us-central1-labenu-apis.cloudfunctions.net/labeX/yuzo/login",
          body
        );
        window.sessionStorage.setItem("token", response.data.token);
        history.replace("/");
      } catch (error) {
        console.log(error);
      }
    })();
  };
  return (
    <Grow in={true} timeout={1000}>
      <Grid item container xs={12} className={classes.root}>
        <Paper elevation={6} className={classes.paper}>
          <Grid item xs={12} className={classes.loginWrapper}>
            <Box className={classes.profileWrapper}>
              <div className={classes.profileImage} />
            </Box>
            <Box className={classes.loginForm}>
              <TextField
                name="username"
                type="text"
                label="username"
                variant="outlined"
                size="small"
                className={classes.username}
                onChange={formHandler}
                value={form.username}
              />
              <TextField
                name="password"
                type="password"
                label="password"
                variant="outlined"
                size="small"
                className={classes.password}
                onChange={formHandler}
                value={form.password}
              />
            </Box>
            <Button
              onClick={handleLogin}
              variant="outlined"
              className={classes.loginButton}
            >
              Sign in
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </Grow>
  );
};
export default LoginPage;
