import React, { useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import NavBar from "./components/NavBar/NavBar";
import UserForm from "./components/Registration/UserForm";
import LogIn from "./components/LogIn";
import Dashboard from "./components/Dashboard/Dashboard";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  login,
  getWorkers,
  getUser,
  register,
  updateApp
} from "./store/actions/userActions";
import Axios from "axios";
import { axiosWithAuth } from "./utils/axiosAuth";
import WorkerView from "./components/WorkerView/WorkerView";
import Profile from "./components/Profile/Profile";
import SettingsView from "./components/SettingsView/SettingsView";

function App() {
  const dispatch = useDispatch();
  const workers = useSelector(state => state.userReducer.workers);
  console.log("Current workers: ", workers);

  useEffect(() => {
    dispatch(updateApp());
  }, []);

  const handleLogin = () => {
    const credentials = {
      username: "mark",
      password: "test"
    };
    // dispatch(getWorkers());
    dispatch(login(credentials));
    // dispatch(register(credentials));
    // axiosWithAuth()
    //   .get("/api/auth")
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err));
    // dispatch(login(credentials));
  };

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <h1>Test</h1>
          <Button color="secondary" onClick={handleLogin} variant="contained">
            Login
          </Button>
          <WorkerView />
        </Route>
        <Route exact path="/login" component={LogIn}>
          {/* Put login component here */}
        </Route>

        <Route exact path="/register" component={UserForm}></Route>

        <PrivateRoute path="/dashboard">
          {/* Dashboard component here. */}
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute path="/profile">
          <Profile />
        </PrivateRoute>
        <PrivateRoute path="/worker/:id">
          {/*Service worker profile here (Passing in ID of worker through path)  */}
          <WorkerView />
        </PrivateRoute>
        <PrivateRoute path="/settings">
          <SettingsView />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
