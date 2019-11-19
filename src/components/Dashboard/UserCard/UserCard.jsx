import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

import { Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 285,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }
  },
  media: {
    paddingTop: "55%" //Height of image
  },
  content: {
    textAlign: "left",
    padding: 24
  },
  divider: {
    marginTop: `15px`,
    marginBottom: `10px`
  },
  heading: {
    fontWeight: "bold"
  },
  button: {
    margin: 0
  },
  subheading: {
    lineHeight: 1.5,
    fontSize: "0.82em",
    opacity: "0.54"
  }
}));

const UserCard = () => {
  const classes = useStyles();

  const handleClick = () => {
    console.log("Button clicked.");
  };
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={
          "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
        }
      />
      <CardContent className={classes.content}>
        <Typography className={classes.heading} variant={"h6"}>
          Mark Artishuk
        </Typography>
        <Typography className={classes.subheading} variant={"caption"}>
          I'm a hard worker who works hard and hard and hard so tip me please.
        </Typography>
        <Divider className={classes.divider} light />

        <Button onClick={handleClick} className={classes.button} fullWidth>
          View Profile
        </Button>
      </CardContent>
    </Card>
  );
};

export default UserCard;
