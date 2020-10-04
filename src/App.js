import React from "react";
import { connect } from "react-redux";

import * as healthActions from "./store/actions/health";
import "./App.css";

const App = ({
  playerHealth,
  onModifyPlayerHealth,
  monsterHealth,
  onModifyMonsterHealth,
}) => {
  return (
    <div className='App'>
      <header className='App-header'>
        <button onClick={() => onModifyPlayerHealth(5)}>
          Increase Player Health
        </button>
        <button onClick={() => onModifyMonsterHealth(5)}>
          Increase Monster Health
        </button>
        <p>Player Health: {playerHealth}</p>
        <p>Monster Health: {monsterHealth}</p>
      </header>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    playerHealth: state.playerHealth,
    monsterHealth: state.monsterHealth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onModifyPlayerHealth: (amount) =>
      dispatch(healthActions.modifyPlayerHealth(amount)),
    onModifyMonsterHealth: (amount) =>
      dispatch(healthActions.modifyMonsterHealth(amount)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
