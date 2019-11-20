import React, { useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import NavBar from "./components/NavBar/NavBar";
import LogIn from "./components/LogIn";
import Dashboard from "./components/Dashboard/Dashboard";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  login,
  getWorkers,
  getUser,
  updateApp
} from "./store/actions/userActions";
import Axios from "axios";
import { axiosWithAuth } from "./utils/axiosAuth";

function App() {
  const dispatch = useDispatch();
  const workers = useSelector(state => state.userReducer.workers);
  console.log("Current workers: ", workers);

  useEffect(() => {
    dispatch(updateApp());
  }, []);

  const handleLogin = () => {
    console.log("workers");
    const credentials = {
      username: "mark",
      password: "test"
    };

    Axios.post(
      "https://tipseasebackend.herokuapp.com/api/auth/login",
      credentials
    )
      .then(res => console.log(res))
      .catch(err => console.log(err));
    // dispatch(login(credentials));

    // axiosWithAuth()
    //   .get("/api/worker/7")
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
        </Route>
        <Route exact path="/login" component={LogIn}>
          {/* Put login component here */}
        </Route>

        <Route exact path="/register">
          {/* Put register component here */}
        </Route>

        <PrivateRoute path="/dashboard">
          {/* Dashboard component here. */}
          <Dashboard />
        </PrivateRoute>

        <PrivateRoute path="/worker-profile/:id">
          {/*Service worker profile here (Passing in ID of worker through path)  */}
        </PrivateRoute>
        <PrivateRoute path="/worker-edit/:id">
          {/* Component for editing worker profile (Passin in ID of worker through path) */}
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
