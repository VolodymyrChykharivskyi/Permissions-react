import {combineReducers, createStore} from "redux";
import permissionsReducer from "./permissionsReducer";

const reducers = combineReducers({
  permissions: permissionsReducer
});

const store = createStore(
  reducers
);

window.store = store;

export default store;
