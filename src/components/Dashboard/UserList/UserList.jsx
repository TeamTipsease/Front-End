import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../UserCard/UserCard";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { axiosWithAuth } from "../../../utils/axiosAuth"
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

const UserList = () => {
  const classes = useStyles();

  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axiosWithAuth 
      .get('https://tipseasebackend.herokuapp.com/api/worker/')
      .then(response => {
        setUserData(response.data.results);
        console.log('user data is:', response.data);
      })
      .catch(error =>{
        console.log("The data was now returned", error);
      });
   }, []);

  return (
    <div className={classes.gridContainer}>
      <Paper className={classes.grid}>
        <UserCard
          name="Mark Artishuk"
          blurb="I'm a hard worker who works hard and hard and hard so tip me please."
          image={pic1}
        />
        <UserCard
          name="Mark Artishuk"
          blurb="I'm a hard worker who works hard and hard and hard so tip me please."
          image={pic2}
        />
        <UserCard
          name="Mark Artishuk"
          blurb="I'm a hard worker who works hard and hard and hard so tip me please."
          image={pic3}
        />
        <UserCard
          name="Mark Artishuk"
          blurb="I'm a hard worker who works hard and hard and hard so tip me please."
          image={pic4}
        />
        <UserCard
          name="Mark Artishuk"
          blurb="I'm a hard worker who works hard and hard and hard so tip me please."
          image={pic5}
        />
        <UserCard
          name="Mark Artishuk"
          blurb="I'm a hard worker who works hard and hard and hard so tip me please."
          image={pic6}
          />
         <UserCard
          name="Mark Artishuk"
          blurb="I'm a hard worker who works hard and hard and hard so tip me please."
          image={pic7}
        />
        <UserCard
          name="Mark Artishuk"
          blurb="I'm a hard worker who works hard and hard and hard so tip me please."
          image={pic8}
        />
      </Paper>
    </div>
  );
};

export default UserList;
