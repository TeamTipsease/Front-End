import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding: 45,
    margin: "25px auto",
    width: "80%",
    maxWidth: 550
  },
  divider: {
    width: "100%",
    margin: "0 auto",
    marginBottom: 25
  },

  tipsTitle: {
    fontSize: 50,
    textAlign: "center",
    fontWeight: "500",
    letterSpacing: 2
  },
  tips: {
    fontSize: 50,
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: "5px",
    marginBottom: 25
  },
  name: {
    marginTop: 15,
    marginBottom: 15,
    fontSize: 30,
    textAlign: "center"
  },
  info: {
    fontSize: 16
  },
  header: {
    fontSize: 25,
    marginBottom: 10
  },
  sectionRow: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 25
  },
  leftSection: {
    textAlign: "left",
    width: "48%"
  },
  rightSection: {
    textAlign: "right",
    width: "48%"
  }
}));

const Profile = () => {
  const { info, month_at_job, name, tagline, tip, user_id } = useSelector(
    state => state.userReducer.user
  );
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography className={classes.name} variant="h5" component="h3">
        {name}
      </Typography>
      <Divider className={classes.divider} />
      <Typography className={classes.tips} variant="h5" component="h3">
        <span className={classes.tipsTitle}>Tips:</span> ${tip}
      </Typography>
      <Divider className={classes.divider} />
      <div className={classes.sectionRow}>
        <div className={classes.leftSection}>
          <Typography className={classes.header} variant="h5" component="h3">
            Info
          </Typography>
          <Typography
            className={classes.info}
            color="textSecondary"
            component="p"
          >
            {info}
          </Typography>
        </div>

        <div className={classes.rightSection}>
          <Typography className={classes.header} variant="h5" component="h3">
            Months At Job
          </Typography>
          <Typography
            className={classes.info}
            color="textSecondary"
            component="p"
          >
            {month_at_job}
          </Typography>
        </div>
      </div>

      <div className={classes.sectionRow}>
        <div className={classes.leftSection}>
          <Typography className={classes.header} variant="h5" component="h3">
            Tagline
          </Typography>
          <Typography
            className={classes.info}
            color="textSecondary"
            component="p"
          >
            {tagline}
          </Typography>
        </div>

        <div className={classes.rightSection}>
          <Typography className={classes.header} variant="h5" component="h3">
            Account ID
          </Typography>
          <Typography
            className={classes.info}
            color="textSecondary"
            component="p"
          >
            {user_id}
          </Typography>
        </div>
      </div>
    </Paper>
  );
};

export default Profile;
