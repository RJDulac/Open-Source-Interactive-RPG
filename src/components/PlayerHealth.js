import React from "react";
import { connect } from "react-redux";

const PlayerHealth = ({ playerHealth }) => {
  return (
    <div id="player-health" className="health-box">
      <h4>Player Health:</h4>
      <h1>{playerHealth}</h1>
    </div>
  );
}

const mapStateToProps = (state) => ({
  playerHealth: state.playerHealth,
});

export default connect(mapStateToProps, null)(PlayerHealth);