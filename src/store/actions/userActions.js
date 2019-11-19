import axios from "axios";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_FAIL = "LOGIN_FAIL";

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

export const logout = () => dispatch => {};
