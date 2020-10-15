import * as actionTypes from "./actionTypes";

export const modifyPlayerHealth = (amount) => {
  return {
    type: actionTypes.MODIFY_PLAYER_HEALTH,
    payload: amount,
  };
};
export const modifyMonsterHealth = (amount) => {
  return {
    type: actionTypes.MODIFY_MONSTER_HEALTH,
    payload: amount,
  };
};
export const monsterDamageDealt = (amount) => {
  return {
    type: actionTypes.MONSTER_DAMAGE_DEALT,
    payload: amount,
  };
};
