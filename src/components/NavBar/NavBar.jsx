import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
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
    height: "100%"
  },
  tabLink: {
    width: "20%",
    minWidth: "100px"
  },
  tabIndicator: {
    backgroundColor: "#ffffffdd"
  }
}));

const findActiveTabIndex = location => {
  switch (location.pathname) {
    case "/":
      return 0;
    case "/register":
      return 1;
    case "/login":
      return 2;
    default:
      return 0;
  }
};

const NavBar = () => {
  const history = useHistory();
  const defaultIndex = findActiveTabIndex(history.location); // Finds the default tab index by using url endpoint
  const [currentTab, setCurrentTab] = useState(defaultIndex);
  const classes = useStyles();

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
      default:
        history.push("/");
        break;
    }
  }, [currentTab, history]);

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
          className={classes.tabContainer}
          classes={{ indicator: classes.tabIndicator }}
        >
          <Tab label="Home" className={classes.tabLink} />

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
