import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";

import { useParams } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    width: "80%",
    maxWidth: 650,
    margin: "25px auto",
    textAlign: "center"
  },
  tipContainer: {
    marginTop: 25,
    display: "flex",
    justifyContent: "space-around"
  },
  button: {
    width: "40%",
    marginTop: 10
  },
  tipInput: {
    width: "40%"
  },
  title: {
    fontSize: 40
  },
  tagLine: {
    // fontStyle: "italic",
    fontSize: 25,
    margin: 10
  },
  info: {
    marginBottom: 12,
    fontStyle: "italic"
  }
});

const WorkerView = () => {
  const params = useParams();
  const classes = useStyles();
  const user = useSelector(state => state.userReducer.user);
  const { id } = params; //The id of the worker that we want to view

  const handleTipClick = () => {
    console.log("Tipped?");
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          {user.name}
        </Typography>
        <Typography className={classes.info} color="textSecondary">
          {user.info}
        </Typography>
        <Typography
          className={classes.tagLine}
          color="textSecondary"
          variant="body2"
          component="p"
        >
          "{user.tagline}"
        </Typography>
        <div className={classes.tipContainer}>
          <FormControl className={classes.tipInput}>
            <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
            <Input
              id="standard-adornment-amount"
              type="number"
              placeholder="Tip me well!"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </FormControl>
          <Button
            variant="contained"
            className={classes.button}
            color="secondary"
            onClick={handleTipClick}
          >
            Tip
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkerView;
