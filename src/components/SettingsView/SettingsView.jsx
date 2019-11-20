import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { TextField, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding: 25,
    margin: "25px auto",
    width: "80%",
    maxWidth: 650
  },
  container: {
    display: "flex",
    justifyContent: "space-between"
  },
  button: {
    marginTop: 20
  },
  title: {
    fontSize: 35,
    textAlign: "center"
  },
  textField: {
    margin: "10px auto"
  },
  nameTextField: {
    width: "70%"
  },
  monthTextField: {
    width: "27%"
  }
}));
const SettingsView = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <form>
        <Typography className={classes.title} variant="h5" component="h3">
          Profile Settings
        </Typography>
        <div className={classes.container}>
          <TextField
            className={classes.nameTextField}
            label="Name"
            margin="normal"
            variant="outlined"
          />
          <TextField
            className={classes.monthTextField}
            label="Months At Job"
            type="number"
            margin="normal"
            variant="outlined"
          />
        </div>

        <TextField
          className={classes.textField}
          label="Tagline"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          className={classes.textField}
          label="Info"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <Button
          className={classes.button}
          fullWidth
          variant="contained"
          color="secondary"
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default SettingsView;
