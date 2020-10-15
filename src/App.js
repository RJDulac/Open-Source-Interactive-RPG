import React from "react";
import { connect } from "react-redux";

import * as healthActions from "./store/actions/health";
import * as damageActions from "./store/actions/damage";
import Player from "./components/Player";
import Monster from "./components/Monster";

import DamageBox from "./components/DamageBox";

import "./App.css";

const App = ({
  onModifyPlayerHealth,
  onModifyMonsterHealth,
  onDealMonsterDamage,
  onDealPlayerDamage,
  playerDamage,
  monsterDamage,
}) => {
  return (
    <div className='App'>
      <header className='App-header'>
        <div id='health-button-wrapper'>
          <button
            onClick={() => onModifyPlayerHealth(5)}
            className='health-button'
          >
            Increase Player Health
          </button>
          <button
            onClick={() => onModifyMonsterHealth(5)}
            className='health-button'
          >
            Increase Monster Health
          </button>
        </div>
        <div id='health-display-wrapper'>
          <Player />
          <Monster />
        </div>
        <DamageBox damage={playerDamage} type='Player' />
        <DamageBox damage={monsterDamage} type='Goblin' />
        <button
          onClick={() => onDealMonsterDamage(monsterDamage)}
          className='health-button'
        >
          Deal Monster Damage
        </button>
        <button
          onClick={() => onDealPlayerDamage(playerDamage)}
          className='health-button'
        >
          Deal Player Damage
        </button>
      </header>
    </div>
  );
};

const mapStateToProps = (state) => ({
  playerDamage: state.damage.playerDamage,
  monsterDamage: state.damage.monsterDamage,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onModifyPlayerHealth: (amount) =>
      dispatch(healthActions.modifyPlayerHealth(amount)),
    onModifyMonsterHealth: (amount) =>
      dispatch(healthActions.modifyMonsterHealth(amount)),
    onDealPlayerDamage: (amount) => {
      dispatch(healthActions.playerDamageDealt(amount));
    },
    onDealMonsterDamage: (amount) => {
      dispatch(healthActions.monsterDamageDealt(amount));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
