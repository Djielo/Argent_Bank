import { resetStorage } from "../services/auth.service";

const userInitialState = {
  login: false,
  token: "",
  firstName: "",
  lastName: "",
  editIdentityButton: false,
};

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        login: true,
      };
    case "SIGN_OUT":
      resetStorage();
      return {
        ...state,
        login: false,
        token: "",
        firstName: "",
        lastName: "",
      };
    case "TOKEN":
      return {
        ...state,
        token: action.payload,
        login: true,
      };
    case "SET_IDENTITY":
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        editIdentityButton: false,
      };
    case "EDIT_IDENTITY_BUTTON":
      return {
        ...state,
        editIdentityButton: true,
      };
    case "SAVE_IDENTITY_BUTTON":
      return {
        ...state,
        editIdentityButton: false,
      };
    case "CANCEL_IDENTITY_BUTTON":
      return {
        ...state,
        editIdentityButton: false,
      };

    default:
      return state;
  }
};

export default userReducer;
