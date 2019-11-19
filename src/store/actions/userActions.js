import axios from "axios";
import { axiosWithAuth } from "../../utils/axiosAuth";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const FETCH_WORKERS_START = "FETCH_WORKERS_START";
export const FETCH_WORKERS_SUCCESS = "FETCH_WORKERS_SUCCESS";
export const FETCH_WORKERS_FAIL = "FETCH_WORKERS_FAIL";

//login action will handle all login types.
export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_START });
  console.log("Starting login... for: ", credentials);
  axios
    .post("https://tipseasebackend.herokuapp.com/api/auth/login", credentials)
    .then(res => {
      //Pass token to reducer.
      console.log("LOGIN RESPONSE: ", res);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
    })
    .catch(err => dispatch({ type: LOGIN_FAIL, payload: err.response }));
};

export const getWorkers = () => dispatch => {
  dispatch({ type: FETCH_WORKERS_START });
  console.log("Fetching workers...");
  axiosWithAuth()
    .get("/api/worker")
    .then(res => {
      dispatch({ type: FETCH_WORKERS_SUCCESS, payload: res.data });
      console.log(res);
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_WORKERS_FAIL, payload: err.message });
    });
};

export const logout = () => dispatch => {};
