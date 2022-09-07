export const signIn = () => {
  return {
    type: "SIGN_IN",
  };
};

export const SignOut = () => {
  return {
    type: "SIGN_OUT",
  };
};

export const tokenAction = (content) => {
  return {
    type: "TOKEN",
    payload: content,
  };
};

export const setIdentity = (content) => {
  return {
    type: "SET_IDENTITY",
    payload: content,
  };
};

export const editIdentityButton = () => {
  return {
    type: "EDIT_IDENTITY_BUTTON",
  };
};

export const cancelIdentityButton = () => {
  return {
    type: "CANCEL_IDENTITY_BUTTON",
  };
};
