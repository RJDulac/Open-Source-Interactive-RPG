import * as actionTypes from "../actions/actionTypes";

const intialState = {
  playerHealth: 100,
  monsterHealth: 100,
  gameOver:false,
  winner:null,
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
      var playerHealth = state.playerHealth - action.payload;
      if(playerHealth<=0 || state.gameOver){
        console.log('gameover');
        return {
          ...state,
          playerHealth,
          winner:'Monster',
          gameOver:true
        };
      }
      return {
        ...state,
        playerHealth,
      };

    case actionTypes.PLAYER_DAMAGE_DEALT:
      var monsterHealth = state.monsterHealth - action.payload;
      if(monsterHealth<=0 || state.gameOver){
        console.log('gameover');
        return {
          ...state,
          monsterHealth,
          winner:'Player',
          gameOver:true
        };
      }
      return {
        ...state,
        monsterHealth,
      };

    case actionTypes.NEW_GAME:
      return {
        ...state,
        monsterHealth:100,
        playerHealth:100,
        gameOver:false,
        winner:null,
      };
      
    default:
      return state;
  }
};

export default healthReducer;
