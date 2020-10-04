import React from "react";
import ReactDOM from "react-dom";
import { createStore, compose, combineReducers } from "redux";
import { Provider } from "react-redux";

import health from "./store/reducers/healthReducer";
import damage from "./store/reducers/damageReducer";

import "./index.css";
import App from "./App";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({ health, damage });

const store = createStore(rootReducer, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
