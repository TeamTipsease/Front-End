import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_START,
  FETCH_WORKERS_FAIL,
  FETCH_WORKERS_START,
  FETCH_WORKERS_SUCCESS,
  LOGOUT,
  APP_UPDATE,
  UPDATE_USER_FAIL,
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
  REGISTER_FAIL,
  REGISTER_START,
  REGISTER_SUCCESS
} from "../actions/userActions";

const initialState = {
  user: {
    name: ""
  },

  isLoggingIn: false,
  loggedIn: false,
  loginError: "",

  isRegistering: false,
  registerError: "",

  fetchingWorkers: false,
  fetchWorkersError: "",
  workers: [],

  isUpdatingUser: false,
  updateUserError: ""
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_START:
      return { ...state, isRegistering: true, registerError: "" };
    case REGISTER_SUCCESS:
      localStorage.setItem("authToken", action.payload);
      return { ...state, isRegistering: false, loggedIn: true };
    case REGISTER_FAIL:
      return { ...state, isRegistering: false, registerError: action.payload };

    case UPDATE_USER_START:
      return { ...state, isUpdatingUser: true };
    case UPDATE_USER_FAIL:
      return {
        ...state,
        isUpdatingUser: false,
        updateUserError: action.payload
      };

    case UPDATE_USER_SUCCESS:
      return { ...state, isUpdatingUser: false, updateUserError: "" };
    case APP_UPDATE:
      return { ...state, loggedIn: action.payload.loggedIn };
    case LOGOUT:
      localStorage.removeItem("authToken");
      return { ...state, loggedIn: false };
    case LOGIN_FAIL:
      return { ...state, loginError: action.payload, isLoggingIn: false };
    case LOGIN_START:
      return { ...state, isLoggingIn: true, loginError: "" };
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
