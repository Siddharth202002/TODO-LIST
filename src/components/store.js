import { createStore, combineReducers } from "redux";
import TodoReducer from "./TodoReducers/Todoreducers";

const reducers = combineReducers({ todo: TodoReducer });
const store = createStore(reducers);

export default store;
