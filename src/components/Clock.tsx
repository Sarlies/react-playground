import React, { useEffect, useState } from 'react'

export default function Clock() {
  const [date, setDate] = useState(new Date())

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

  return (
    <h1>{displayTime()}</h1>
  )
}