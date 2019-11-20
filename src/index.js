import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
//Redux
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

//Reducers
import { userReducer } from "./store/reducers/userReducer";

//Theme color imports
import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
<<<<<<< HEAD
import grey from "@material-ui/core/colors/grey";
import red from "@material-ui/core/colors/red";
=======
// import blue from "@material-ui/core/colors/blue";
// import red from "@material-ui/core/colors/red";
>>>>>>> f0f7d5ac5de11d3475181ce62ca43f2ff74a5c9a
import green from "@material-ui/core/colors/green";

const rootReducer = combineReducers({ userReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

//Creating the Material Theme colors
//Making the blue a different shade (darker than default)
const primaryColor = green[700];

//Making the theme to implement into ThemeProvider
const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor
    },
    secondary: grey
  }
});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
