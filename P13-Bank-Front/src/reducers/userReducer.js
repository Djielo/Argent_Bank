import { getToken } from "../utils/getToken";

const initialState = {
  isEmailVerified: false,
  isPasswordVerified: false,
  isRememberMe: false,
  firstName: "",
  lastName: "",
  token: getToken(),
};

function userReducer(state = initialState, action) {
  if (action.type === "GET_USER_DATA") {
    return {
      ...state,
      firstName: action.payload.firstName,
      lastName: action.payload.lastName,
    };  
  }
  return state;
}

export default userReducer;