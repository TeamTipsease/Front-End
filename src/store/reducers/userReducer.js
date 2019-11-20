import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_START,
  FETCH_WORKERS_FAIL,
  FETCH_WORKERS_START,
  FETCH_WORKERS_SUCCESS,
  LOGOUT,
  APP_UPDATE
} from "../actions/userActions";

const initialState = {
  user: {
    name: ""
  },

  isLoggingIn: false,
  loggedIn: false,
  loginError: "",

  fetchingWorkers: false,
  fetchWorkersError: "",
  workers: []
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_UPDATE:
      return { ...state, loggedIn: action.payload.loggedIn };
    case LOGOUT:
      localStorage.removeItem("authToken");
      return { ...state, loggedIn: false };
    case LOGIN_FAIL:
      return { ...state, loginError: action.payload, isLoggingIn: false };
    case LOGIN_START:
      return { ...state, isLoggingIn: true };
    case LOGIN_SUCCESS:
      localStorage.setItem("authToken", action.payload);
      return { ...state, isLoggingIn: false, loggedIn: true, user: {} }; //TODO: Set user data from payload.
    case FETCH_WORKERS_START:
      return { ...state, fetchingWorkers: true };
    case FETCH_WORKERS_SUCCESS:
      return {
        ...state,
        fetchingWorkers: false,
        workers: action.payload
      };
    case FETCH_WORKERS_FAIL:
      return {
        ...state,
        fetchingWorkers: false,
        fetchWorkersError: action.payload
      };
    default:
      return state;
  }
};
