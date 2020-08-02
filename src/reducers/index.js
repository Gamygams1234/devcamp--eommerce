import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import user from "./userReducer";
import shop from "./shopReducer";

import headerNavbar from "./headernavbarReducer";

const rootReducer = combineReducers({
  form,
  headerNavbar,
  user,
  shop,
});

export default rootReducer;
