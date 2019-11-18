import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  tabContainer: {
    // width: "25%"
  },
  tabLink: {
    width: "20%",
    minWidth: "90px"
  },
  tabIndicator: {
    indicator: {
      backgroundColor: "#ffffff"
    },
    backgroundColor: "#ffffff"
  }
}));

const NavBar = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const history = useHistory();
  const classes = useStyles();
  console.log(history);

  useEffect(() => {
    switch (currentTab) {
      case 0:
        history.push("/");
        break;
      case 1:
        history.push("/register");
        break;
      case 2:
        history.push("/login");
        break;
    }
  }, [currentTab]);

  const handleTabChange = (currentValue, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h5" className={classes.title}>
          Tipsease
        </Typography>
        <Tabs
          value={currentTab}
          onChange={handleTabChange}
          aria-label="navigation tab links"
          indicatorColor={classes.tabIndicator}
          className={classes.tabContainer}
        >
          <Tab label="Home" indicatorColor="#fff" className={classes.tabLink} />

          <Tab label="Register" className={classes.tabLink} />
          <Tab label="Login" className={classes.tabLink} />
        </Tabs>

        {/* <Button color="inherit">Login</Button>
        <Button color="inherit">Settings</Button> */}
        {/* TODO: Logout Button if user is signed in */}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
