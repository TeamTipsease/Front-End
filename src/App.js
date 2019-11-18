import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <h1>Test</h1>
        </Route>
        <Route exact path="/login">
          {/* Put login component here */}
        </Route>

        <Route exact path="/register">
          {/* Put register component here */}
        </Route>

        <PrivateRoute path="/dashboard">
          {/* Dashboard component here. */}
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
