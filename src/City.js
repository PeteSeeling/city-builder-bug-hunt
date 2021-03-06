import React from 'react';

export default function City({ waterfrontId, skylineId, castleId }) {
  return (
    <div className="city">
      <img src={`/waterfront-${waterfrontId}.jpeg`}/>
      <img src={`/skyline-${skylineId}.jpeg`}/>
      <img src={`/castle-${castleId}.jpeg`}/>
    </div>
  );
}
