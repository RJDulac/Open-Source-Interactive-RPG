import React from "react";
import { connect } from "react-redux";

const Monster = ({ monsterHealth, monsterDamage }) => {
  return (
    <div id="monster-health" className="health-box">
      <h4>Monster Health:</h4>
      <h1>{monsterHealth}</h1>
      <h4>Monster Damage:</h4>
      <h1>{monsterDamage}</h1>
    </div>
  );
}

const mapStateToProps = (state) => ({
  monsterHealth: state.monsterHealth,
  monsterDamage: state.monsterDamage,
});

export default connect(mapStateToProps, null)(Monster);