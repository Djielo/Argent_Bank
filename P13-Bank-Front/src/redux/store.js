import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducer from "../reducers/userReducer";
import globalReducer from "../reducers/globalReducer";

const store = createStore(combineReducers({
  user: userReducer,
  global: globalReducer
}), composeWithDevTools(applyMiddleware(thunk)));

export default store;