import React, { useState } from "react";
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
    width: "60%"
  },
  monthTextField: {
    width: "35%"
  }
}));

const emptyForm = {
  name: "",
  month_at_job: 0,
  info: "",
  tagline: ""
};

const SettingsView = () => {
  const [formData, setFormData] = useState(emptyForm);
  const classes = useStyles();

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Paper className={classes.root}>
      <form onSubmit={handleSubmit}>
        <Typography className={classes.title} variant="h5" component="h3">
          Profile Settings
        </Typography>
        <div className={classes.container}>
          <TextField
            className={classes.nameTextField}
            label="Name"
            name="name"
            margin="normal"
            variant="outlined"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            className={classes.monthTextField}
            label="Months At Job"
            type="number"
            name="month_at_job"
            margin="normal"
            onChange={handleChange}
            value={formData.month_at_job}
            variant="outlined"
          />
        </div>

        <TextField
          className={classes.textField}
          label="Tagline"
          fullWidth
          name="tagline"
          margin="normal"
          onChange={handleChange}
          value={formData.tagline}
          variant="outlined"
        />
        <TextField
          className={classes.textField}
          label="Info"
          fullWidth
          name="info"
          margin="normal"
          value={formData.info}
          onChange={handleChange}
          variant="outlined"
        />
        <Button
          className={classes.button}
          fullWidth
          type="submit"
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
