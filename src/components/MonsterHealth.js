import React from "react";
import { connect } from "react-redux";

const MonsterHealth = ({ monsterHealth }) => {
  return (
    <div id="monster-health" className="health-box">
      <h4>Monster Health:</h4>
      <h1>{monsterHealth}</h1>
    </div>
  );
}

const mapStateToProps = (state) => ({
  monsterHealth: state.monsterHealth,
});

export default connect(mapStateToProps, null)(MonsterHealth);