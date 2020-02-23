import React, { useState } from 'react'

export default function Focus() {
  const [focus, setFocus] = useState()

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      setFocus(event.target.value)
    }
  }

  function FocusOftheDay() {
    return (
      <div>
        {!focus && (
          <div>
            <h3>What is your main focus for today?</h3>
            <input type="text" onKeyPress={handleKeyPress} autoFocus />
          </div>
        )}

        {focus && (
          <div>
            <h3>Today</h3>
            <p>{focus}</p>
          </div>
        )}
      </div>
    )
  }
  return (
    <FocusOftheDay />
  )
}