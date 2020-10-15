import * as actionTypes from "../actions/actionTypes";

const intialState = {
  playerHealth: 100,
  monsterHealth: 100,
};

const healthReducer = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.MODIFY_PLAYER_HEALTH:
      return {
        ...state,
        playerHealth: state.playerHealth + action.payload,
      };
    case actionTypes.MODIFY_MONSTER_HEALTH:
      return {
        ...state,
        monsterHealth: state.monsterHealth + action.payload,
      };
    case actionTypes.MONSTER_DAMAGE_DEALT:
      return {
        ...state,
        playerHealth: state.playerHealth - action.payload,
      };
    default:
      return state;
  }
};

export default healthReducer;
