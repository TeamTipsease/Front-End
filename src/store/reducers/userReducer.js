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
  REGISTER_SUCCESS,
  DELETE_USER_FAIL,
  DELETE_USER_START,
  DELETE_USER_SUCCESS,
  SET_UPDATED_USER_FLAG
} from "../actions/userActions";

const initialState = {
  user: {
    info: "37 yr Male living in Florida",
    month_at_job: 6,
    name: "Tony",
    tagline: "We are not in Kansas anymore.",
    tip: 3,
    user_id: 7
  },

  isLoggingIn: false,
  loggedIn: false,
  loginError: "",

  isRegistering: false,
  registerError: "",

  fetchingWorkers: false,
  fetchWorkersError: "",
  workers: [
    {
      id: 1,
      info: "37 yr Male living in Florida",
      month_at_job: 6,
      name: "Tony",
      tagline: "We are not in Kansas anymore.",
      tip: 3,
      user_id: 1
    }
  ],

  isDeleting: false,
  deleteError: "",

  isUpdatingUser: false,
  updateUserError: "",
  updatedUser: false
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_USER_START:
      return { ...state, isDeleting: true, deleteError: "" };
    case DELETE_USER_FAIL:
      return { ...state, isDeleting: false, deleteError: action.payload };
    case DELETE_USER_SUCCESS:
      return { ...state, isDeleting: false };
    case REGISTER_START:
      return { ...state, isRegistering: true, registerError: "" };
    case REGISTER_SUCCESS:
      localStorage.setItem("authToken", action.payload);
      return { ...state, isRegistering: false, loggedIn: true };
    case REGISTER_FAIL:
      return { ...state, isRegistering: false, registerError: action.payload };

    case UPDATE_USER_START:
      return { ...state, isUpdatingUser: true, updatedUser: false };
    case UPDATE_USER_FAIL:
      return {
        ...state,
        isUpdatingUser: false,
        updateUserError: action.payload
      };

    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        isUpdatingUser: false,
        updateUserError: "",
        updatedUser: true,
        user: action.payload
      };
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
    case SET_UPDATED_USER_FLAG:
      return { ...state, updatedUser: action.payload };
    default:
      return state;
  }
};
