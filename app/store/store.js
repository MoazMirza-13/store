import { applyMiddleware, legacy_createStore as createStore } from "redux";
import Reducer from "./reducers";
import thunk from "redux-thunk";

export const store = createStore(Reducer, {}, applyMiddleware(thunk));
