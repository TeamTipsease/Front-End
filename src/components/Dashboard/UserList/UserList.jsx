import React from "react";
import UserCard from "../UserCard/UserCard";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  grid: {
    display: "grid",
    width: "100%",
    maxWidth: "1200px",
    gridTemplateColumns: "repeat( auto-fit, minmax(235px, 1fr) )",
    gap: "15px",
    margin: 25,
    boxShadow: "none"
  },
  gridContainer: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  }
}));

const UserList = () => {
  const classes = useStyles();
  return (
    <div className={classes.gridContainer}>
      <Paper className={classes.grid}>
        <UserCard
          name="Mark Artishuk"
          blurb="I'm a hard worker who works hard and hard and hard so tip me please."
          image="https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
        />
        <UserCard
          name="Mark Artishuk"
          blurb="I'm a hard worker who works hard and hard and hard so tip me please."
          image="http://i.pravatar.cc/300?img=4"
        />
        <UserCard
          name="Mark Artishuk"
          blurb="I'm a hard worker who works hard and hard and hard so tip me please."
          image="https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
        />
        <UserCard
          name="Mark Artishuk"
          blurb="I'm a hard worker who works hard and hard and hard so tip me please."
          image="https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
        />
        <UserCard
          name="Mark Artishuk"
          blurb="I'm a hard worker who works hard and hard and hard so tip me please."
          image="https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
        />
      </Paper>
    </div>
  );
};

export default UserList;
