// INITIAL STATE
const initialState = {
  isLogin: false,
  isEditName: false,
  isSavingName: false,
  isCancelSaveName: false,
};

// ACTIONS CREATOR
export const loginAction = () => ({type: "SIGN_IN"});
export const logoutAction = () => ({type: "SIGN_OUT"});
export const editNameAction = () => ({type: "EDIT_NAME"});
export const saveNameAction = () => ({type: "SAVE_NAME"});
export const cancelSaveNameAction = () => ({type: "CANCEL_SAVE_NAME"});

// GLOBAL REDUCER
function globalReducer(state = initialState, action) {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        isLogin: true,
      };
    case "SIGN_OUT":
      return {
        ...state,
        isLogin: false,
      };
    case "EDIT_NAME":
      return {
        ...state,
        isEditName: true,
      };
    case "SAVE_NAME":
      return {
        ...state,
        isSavingName: true,
      };
    case "CANCEL_SAVE_NAME":
      return {
        ...state,
        isCancelSaveName: true,
      };
    default:
      return state;
  }
}

export default globalReducer;

