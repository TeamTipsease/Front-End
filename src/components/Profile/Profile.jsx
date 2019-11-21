import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import { Divider } from "@material-ui/core";
import { axiosWithAuth } from "../../utils/axiosAuth";

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
  const { id } = useSelector(state => state.userReducer.user);
  const [user, setUser] = useState({
    name: "",
    info: "",
    month_at_job: 0,
    tagline: "",
    tip: ""
  });
  useEffect(() => {
    axiosWithAuth()
      .get(`/api/worker/${id}`)
      .then(res => {
        console.log(res);
        setUser(res.data);
      })
      .catch(err => console.log("use: ", err));
  }, [id]);

  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography className={classes.name} variant="h5" component="h3">
        {user.name}
      </Typography>
      <Divider className={classes.divider} />
      <Typography className={classes.tips} variant="h5" component="h3">
        <span className={classes.tipsTitle}>Tips:</span> ${user.tip}
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
            {user.info}
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
            {user.month_at_job}
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
            {user.tagline}
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
            {user.id}
          </Typography>
        </div>
      </div>
    </Paper>
  );
};

export default Profile;
