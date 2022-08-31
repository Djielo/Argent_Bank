// INITIAL STATE
const initialState = {
  isLogin: false,
  isEditName: false,
  isSavingName: false,
  isCancelSaveName: false,
};

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

