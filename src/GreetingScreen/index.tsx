import React, { useEffect, useState } from 'react'
import './styles.css'

export default function GreetingScreen({ firstName }) {
  const [date, setDate] = useState(new Date())
  const [focus, setFocus] = useState()

  useEffect(() => {
    const timer = setTimeout(() => {
      const dateNow = new Date()
      
      setDate(dateNow)
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  })

  function displayTime() {
    const time = date.toLocaleTimeString()
    const splitTime = time.split(":")
    
    const [hours, minutes] = splitTime

    return `${hours}:${minutes}`
  }

  function displayGreetingText() {
    const hours = date.getHours()

    if (hours < 12) {
      return `Good Morning, ${firstName}`
    } else if(hours >= 12 && hours < 17) {
      return `Good Afternoon, ${firstName}`
    } else {
      return `Good Evening, ${firstName}`
    }
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      setFocus(event.target.value)
    }
  }

  function FocusOftheDay() {
    return(
      <div>
        { !focus && (
          <div>
            <h3>What is your main focus for today?</h3>
            <input type="text" onKeyPress={handleKeyPress} />
          </div>
        ) }
        
        { focus && (
          <div>
            <h3>Today</h3>
            <p>{focus}</p>
          </div>
        ) }
      </div>
    )
  }

  return (
    <div>
      <h1>{ displayTime() }</h1>
      <h2>{ displayGreetingText()}</h2>
      <FocusOftheDay />
    </div>
  );
}