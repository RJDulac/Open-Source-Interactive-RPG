import React from "react";
import { connect } from "react-redux";

import * as healthActions from "./store/actions/health";
import * as damageActions from "./store/actions/damage";
import Player from "./components/Player";
import Monster from "./components/Monster";

import "./App.css";

const App = ({
  onModifyPlayerHealth,
  onModifyMonsterHealth,
}) => {
  return (
    <div className='App'>
      <header className='App-header'>
        <div id="health-button-wrapper">
          <button onClick={() => onModifyPlayerHealth(5)} className="health-button">
            Increase Player Health
          </button>
          <button onClick={() => onModifyMonsterHealth(5)} className="health-button">
            Increase Monster Health
          </button>
        </div>
        <div id="health-display-wrapper">
          <Player />
          <Monster />
        </div>
      </header>
    </div>
  );
};

const mapStateToProps = (state) => {};

const mapDispatchToProps = (dispatch) => {
  return {
    onModifyPlayerHealth: (amount) =>
      dispatch(healthActions.modifyPlayerHealth(amount)),
    onModifyMonsterHealth: (amount) =>
      dispatch(healthActions.modifyMonsterHealth(amount)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
