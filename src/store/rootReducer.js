import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import artwork from "./artwork/reducer";
import details from "./details/reducer";

export default combineReducers({
  appState,
  user,
  artwork,
  details,
});
