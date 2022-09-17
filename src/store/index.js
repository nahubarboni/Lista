import { createStore, combineReducers } from "redux";

import { carritoReducer } from "./reducers/index";

const rootReducer = combineReducers({
  carrito: carritoReducer,
});

export default createStore(rootReducer);