import axios from "axios";
import { axiosWithAuth } from "../../utils/axiosAuth";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

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

export const DELETE_USER_START = "DELETE_USER_START";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAIL = "DELETE_USER_FAIL";

export const SET_UPDATED_USER_FLAG = "SET_UPDATED_USER_FLAG";

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

export const deleteUser = id => dispatch => {
  dispatch({ type: DELETE_USER_START });

  axiosWithAuth()
    .delete(`/api/auth/${id}`)
    .then(res => {
      console.log(res);
      dispatch({ type: DELETE_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: DELETE_USER_FAIL, payload: err });
    });
};

export const setUpdatedUserFlag = flag => dispatch => {
  dispatch({ type: SET_UPDATED_USER_FLAG, payload: flag });
};

export const register = credentials => dispatch => {
  dispatch({ type: REGISTER_START });

  axios
    .post(
      "https://tipseasebackend.herokuapp.com/api/auth/register",
      credentials
    )
    .then(res => {
      console.log(res);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: REGISTER_FAIL, payload: err });
    });
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

export const updateUser = (id, updatedUser) => dispatch => {
  dispatch({ type: UPDATE_USER_START });

  axiosWithAuth()
    .put(`/api/worker/${id}`, { id, ...updatedUser })
    .then(res => {
      console.log(res);
      dispatch({ type: UPDATE_USER_SUCCESS, payload: res.data });
      setTimeout(() => {
        dispatch(setUpdatedUserFlag(false));
      }, 6000);
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: UPDATE_USER_FAIL, payload: err.message });
    });
};
