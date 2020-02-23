import React from 'react'

export default function Greeting({ firstName }) {
  function displayGreetingText() {
    const date = new Date()
    const hours = date.getHours()

    if (hours < 12) {
      return `Good Morning, ${firstName}`
    } else if(hours >= 12 && hours < 17) {
      return `Good Afternoon, ${firstName}`
    } else {
      return `Good Evening, ${firstName}`
    }
  }
  
  return (
    <h2>{ displayGreetingText()}</h2>
  )
}