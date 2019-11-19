import { axiosWithAuth } from "../../utils/axiosAuth";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_FAIL = "LOGIN_FAIL";

//login action will handle all login types.
export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_START });
  axiosWithAuth()
    .post("/", credentials)
    .then(res => {
      //Pass token to reducer.
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: LOGIN_FAIL, payload: err.response }));
};

export const logout = () => dispatch => {};
