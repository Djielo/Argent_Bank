/**
 * @typedef {("SIGN_IN"|"SIGN_OUT"|"EDIT_NAME"|"EDIT_NAME_CANCEL"|"SAVE_NAME")} GlobalStatePossibles
 */

const initialState = {
  isLogIn: false,
  isEditName: false,
  isSaving: false,
}

/**
 * @description This function is used to update the state of the global reducer.
 *
 * @param   {Object}  state
 * @param   {GlobalStatePossibles}  action 
 *
 * @return  {Object} 
 */
function globalReducer(state = initialState, action) {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        isLogIn: true,
      };
    case "SIGN_OUT":
      return {
        ...state,
        isLogIn: false,
      };
    case "EDIT_NAME":
      return {
        ...state,
        isEditName: true,
      };
      case "EDIT_NAME_CANCEL":
        return {
          ...state,
          isEditName: false,
        };
      case "SAVE_NAME":
        return {
          ...state,
          isSaving: false,
        };
    default:
      return state;
  }
}

export default globalReducer;