import * as actionTypes from "../actions/actionTypes";

const intialState = {
  playerDamage: 5,
  monsterDamage: 5,
};

const damageReducer = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.MODIFY_PLAYER_DAMAGE:
      return {
        ...state,
        playerDamage: state.playerDamage + action.payload,
      };
    case actionTypes.MODIFY_MONSTER_DAMAGE:
      return {
        ...state,
        monsterDamage: state.monsterDamage + action.payload,
      };
    default:
      return state;
  }
};

export default damageReducer;
