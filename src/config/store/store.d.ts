import { NavigationAction } from "react-navigation";
import { ActionType, StateType } from "typesafe-actions";
import * as CalculatorActions from "screens/calculator/redux/actions";
import * as PrintersActions from "screens/settings/screens/printers/redux/actions";
import * as FilamentsActions from "screens/settings/screens/filaments/redux/actions";

import store from "./index";
import reducers from "./reducers";

export type RootActions =
  | NavigationAction
  | ActionType<typeof CalculatorActions>
  | ActionType<typeof PrintersActions>
  | ActionType<typeof FilamentsActions>;
export type Store = StateType<typeof store>;
export type RootState = StateType<typeof reducers>;

declare module "typesafe-actions" {
  export type RootAction = ActionType<RootActions>;
}
