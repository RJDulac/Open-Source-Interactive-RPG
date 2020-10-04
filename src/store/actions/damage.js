import * as actionTypes from "./actionTypes";

export const modifyPlayerDamage = (amount) => {
  {
    return {
      type: actionTypes.MODIFY_PLAYER_DAMAGE,
      payload: amount,
    };
  }
};
export const modifyMonsterDamage = (amount) => {
  {
    return {
      type: actionTypes.MODIFY_MONSTER_DAMAGE,
      payload: amount,
    };
  }
};
