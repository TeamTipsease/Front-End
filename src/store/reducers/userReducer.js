import { LOGIN_SUCCESS, LOGIN_FAIL, LOGIN_START } from "../actions/userActions";

const initialState = {
  user: {
    name: ""
  },

  isLoggingIn: false,
  loggedIn: false,
  loginError: ""
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_FAIL:
      return { ...state, loginError: action.payload, isLoggingIn: false };
    case LOGIN_START:
      return { ...state, isLoggingIn: true };
    case LOGIN_SUCCESS:
      return { ...state, isLoggingIn: false, loggedIn: true, user: {} }; //TODO: Set user data from payload.
    default:
      return state;
  }
};
