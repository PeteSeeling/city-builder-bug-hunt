import React from 'react';

export default function WaterfrontDropdown({ setWaterfront }) {
  return (
    <div>
      Select a Waterfront
      <select onChange={e => setWaterfront(e.target.value)}>
        <option value="1">Dock</option>
        <option value="2">Sunset</option>
        <option value="3">Boats</option>
      </select>
    </div>
  );
}
