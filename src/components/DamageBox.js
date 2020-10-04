import React from "react";

const DamageBox = ({ damage, type }) => {
  return (
    <div id='monster-health' className='health-box'>
      <p>
        {type} deals {damage} damage
      </p>
    </div>
  );
};

export default DamageBox;
