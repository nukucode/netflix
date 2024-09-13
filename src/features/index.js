import { combineReducers } from "redux";
import searchReducer from "./features/searchSlice";

const rootReducer = combineReducers({
  search: searchReducer,
});
