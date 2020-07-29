import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import artwork from "./artwork/reducer";
import bids from "./bids/reducer";

export default combineReducers({
  appState,
  user,
  artwork,
  bids,
});
