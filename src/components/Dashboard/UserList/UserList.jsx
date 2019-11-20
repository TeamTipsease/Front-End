import React, { useEffect, useState } from "react";
import UserCard from "../UserCard/UserCard";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { axiosWithAuth } from "../../../utils/axiosAuth";
import pic1 from "../../../userImages/angel.png";
import pic2 from "../../../userImages/bagHead.png";
import pic3 from "../../../userImages/bionicEye.png";
import pic4 from "../../../userImages/catEars.png";
import pic5 from "../../../userImages/catMask.png";
import pic6 from "../../../userImages/dracula.png";
import pic7 from "../../../userImages/ninja.png";
import pic8 from "../../../userImages/pirate.png";

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

const avatars = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];

const getRandomUserAvatar = () => {
  const randInt = Math.floor(Math.random() * avatars.length);
  return avatars[randInt];
};

const UserList = () => {
  const classes = useStyles();

  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get("https://tipseasebackend.herokuapp.com/api/worker/")
      .then(response => {
        setUserData(response.data);
        console.log("user data is:", response.data);
      })
      .catch(error => {
        console.log("The data was now returned", error);
      });
  }, []);

  return (
    <div className={classes.gridContainer}>
      <Paper className={classes.grid}>
        <UserCard
          name="Mark Artishuk"
          blurb="I'm a hard worker who works hard and hard and hard so tip me please."
          image={getRandomUserAvatar()}
          id={3}
        />
        <UserCard
          name="Mark Artishuk"
          blurb="I'm a hard worker who works hard and hard and hard so tip me please."
          image={getRandomUserAvatar()}
          id={1}
        />
        <UserCard
          name="Mark Artishuk"
          blurb="I'm a hard worker who works hard and hard and hard so tip me please."
          image={getRandomUserAvatar()}
        />
        <UserCard
          name="Mark Artishuk"
          blurb="I'm a hard worker who works hard and hard and hard so tip me please."
          image={getRandomUserAvatar()}
        />
        <UserCard
          name="Mark Artishuk"
          blurb="I'm a hard worker who works hard and hard and hard so tip me please."
          image={getRandomUserAvatar()}
        />
        <UserCard
          name="Mark Artishuk"
          blurb="I'm a hard worker who works hard and hard and hard so tip me please."
          image={getRandomUserAvatar()}
        />
      </Paper>
    </div>
  );
};

export default UserList;
