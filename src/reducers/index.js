import { combineReducers } from "redux";
import { authentication } from "./auth.reducer";



export const staticReduces = {
  authentication
};

const createReducer = asyncReducers =>
  combineReducers({
    authentication,
    ...asyncReducers
  });

export default createReducer;
