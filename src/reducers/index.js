import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import user from "./userReducer";

import headerNavbar from "./headernavbarReducer";

const rootReducer = combineReducers({
  form,
  headerNavbar,
  user,
});

export default rootReducer;
