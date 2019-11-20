import React, { useEffect } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import NavBar from "./components/NavBar/NavBar";
import UserForm from "./components/Registration/UserForm";
import LogIn from "./components/LogIn";
import Dashboard from "./components/Dashboard/Dashboard";
import { useDispatch } from "react-redux";
import { updateApp } from "./store/actions/userActions";
import WorkerView from "./components/WorkerView/WorkerView";
import Profile from "./components/Profile/Profile";
import SettingsView from "./components/SettingsView/SettingsView";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateApp());
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>

        <Route exact path="/login" component={LogIn} />
        <Route exact path="/register" component={UserForm} />

        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute path="/profile">
          <Profile />
        </PrivateRoute>
        <PrivateRoute path="/worker/:id">
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
