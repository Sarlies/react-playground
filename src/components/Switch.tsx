import React, { useState } from 'react'
import PropTypes from 'prop-types';

const switchRail = {
  position: 'relative',
  width: '100px',
  height: '44px',
  backgroundColor: '#d0d0d0',
  borderRadius: '30px',
}

const switchKnob = {
  position: 'relative',
  top: '2px',
  width: '40px',
  height: '40px',
  borderRadius: '30px',
  backgroundColor: '#31a2e7',

}

const switchKnobOff = {
  transform: 'translateX(2px)'
}

const switchKnobOn = {
  transform: 'translateX(58px)'
}

export default function Switch({ isOn }) {
  const [state, setState] = useState(isOn); // [isOn, function() {}]

  return (
    <div
      style={switchRail}
      onClick={() => setState(!state)}>
      <div style={state ? { ...switchKnob, ...switchKnobOn } : { ...switchKnob, ...switchKnobOff }}></div>
    </div>
  )
}

Switch.propTypes = {
  isOn: PropTypes.bool.isRequired
}