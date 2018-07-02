import { combineReducers } from "redux";
import { INormalizedData } from "common/models/normalized";
import { reducer as usersReducer } from "./users";

export const INITIAL_STATE: INormalizedData = {
  users: {},
};

export const reducer = combineReducers<INormalizedData>({
  users: usersReducer,
});
