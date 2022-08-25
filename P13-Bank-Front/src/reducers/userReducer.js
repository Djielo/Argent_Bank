import { getToken } from "../utils/getToken";

const initialState = {
  isUsernameValid: false,
  isPasswordValid: false,
  isRememberMeChecked: false,
  firstName: "",
  lastName: "",
  token: getToken(),
};

function userReducer(state = initialState, action) {
  if (action.type === "GET_PROFILE_DATA") {
    return {
      ...state,
      firstName: action.payload.firstName,
      lastName: action.payload.lastName,
    };
  }
  return state;
}

export default userReducer;
