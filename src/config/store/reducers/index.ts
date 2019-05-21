import { createNavigationReducer } from "react-navigation-redux-helpers";
import { combineReducers } from "redux";

import MainRoutes from "../../../routes";
const navReducer = createNavigationReducer(MainRoutes);

export default combineReducers({
  nav: navReducer,
});
