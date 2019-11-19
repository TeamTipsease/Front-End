import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import NavBar from "./components/NavBar/NavBar";
import LogIn from "./components/LogIn";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <h1>Test</h1>
        </Route>
        <Route exact path="/login" component={LogIn}>
          {/* Put login component here */}
        </Route>

        <Route exact path="/register">
          {/* Put register component here */}
        </Route>

        <Route path="/dashboard">
          {/* Dashboard component here. */}
          <Dashboard />
        </Route>

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
