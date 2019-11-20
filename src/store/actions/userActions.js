import axios from "axios";
import { axiosWithAuth } from "../../utils/axiosAuth";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const LOGOUT = "LOGOUT";

export const APP_UPDATE = "APP_UPDATE";

export const FETCH_WORKERS_START = "FETCH_WORKERS_START";
export const FETCH_WORKERS_SUCCESS = "FETCH_WORKERS_SUCCESS";
export const FETCH_WORKERS_FAIL = "FETCH_WORKERS_FAIL";

export const FETCH_USER_START = "FETCH_USER_START";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAIL = "FETCH_USER_FAIL";

export const UPDATE_USER_START = "UPDATE_USER_START";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAIL = "UPDATE_USER_FAIL";

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
  axiosWithAuth()
    .get("/api/worker")
    .then(res => {
      dispatch({ type: FETCH_WORKERS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_WORKERS_FAIL, payload: err.message });
    });
};

export const getUser = id => dispatch => {
  dispatch({ type: FETCH_USER_START });
  axiosWithAuth()
    .get(`/${id}`)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err.response);
    });
};

export const updateApp = () => dispatch => {
  const loggedIn = localStorage.getItem("authToken") ? true : false;
  const updates = { loggedIn };
  dispatch({ type: APP_UPDATE, payload: updates });
};

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};

export const updateUser = id => dispatch => {
  dispatch({ type: UPDATE_USER_START });

  axiosWithAuth()
    .put("/")
    .then(res => {
      console.log(res);
      dispatch({ type: UPDATE_USER_SUCCESS });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: UPDATE_USER_FAIL, payload: err.message });
    });
};
