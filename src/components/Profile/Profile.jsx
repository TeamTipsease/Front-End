import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: "25px auto",
    width: "80%"
  },
  divider: {
    width: "80%",
    margin: "0 auto",
    marginBottom: 25
  },
  name: {
    marginTop: 15,
    marginBottom: 15,
    fontSize: 30,
    textAlign: "center"
  }
}));

const Profile = () => {
  const { info, month_at_job, name, tagline, tip } = useSelector(
    state => state.userReducer.user
  );
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography className={classes.name} variant="h5" component="h3">
        {name}
      </Typography>
      <Divider light className={classes.divider} />
      <Typography component="p">
        Paper can be used to build surface or other elements for your
        application.
      </Typography>
    </Paper>
  );
};

export default Profile;
