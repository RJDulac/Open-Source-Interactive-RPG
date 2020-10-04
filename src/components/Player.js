import React from "react";
import { connect } from "react-redux";

const Player = ({ playerHealth, playerDamage }) => {
  return (
    <div id="player-health" className="health-box">
      <h4>Player Health:</h4>
      <h1>{playerHealth}</h1>
      <h4>Player damage</h4>
      <h1>{playerDamage}</h1>
    </div>
  );
}

const mapStateToProps = (state) => ({
  playerHealth: state.playerHealth,
  playerDamage: state.playerDamage,
});

export default connect(mapStateToProps, null)(Player);