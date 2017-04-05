import React from 'react';
import requireAuth from './require_authentication';


const Resources = () => {
  return (
    <div>
      Super Special Secret Recipe
      <ul>
        <li>1 Cup Salt</li>
        <li>1 Cup Butter</li>
        <li>1 Cup Pickles</li>
      </ul>
    </div>
  );
}

export default requireAuth(Resources);
